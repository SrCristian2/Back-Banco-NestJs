import { Injectable } from '@nestjs/common';
import { response } from 'src/comun/helpers/Response';
import { CreateUserDto } from './dto/create-user.dto';
import { FastifyReply } from 'fastify';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
    private readonly jwtService: JwtService,
  ) {}

  async register(reply: FastifyReply, createUserDto: CreateUserDto) {
    try {
      const { email } = createUserDto;
      const user = await this.userModel.findOne({ email });
      if (user) {
        return response(
          reply,
          409,
          false,
          '',
          'el email ya existe en otro registro',
        );
      }

      const newUser = await this.userModel.create(createUserDto);

      const token = this.jwtService.sign({ _id: newUser._id });

      response(
        reply,
        201,
        true,
        { ...newUser.toJSON(), token },
        'Usuario creado',
      );
    } catch (error: any) {
      return this.catchMessage(reply, error);
    }
  }

  async login(reply: FastifyReply, loginUserDto: LoginUserDto) {
    try {
      const { password, email } = loginUserDto;
      const user = await this.userModel.findOne({ email }).select('+password');

      if (user && user.matchPassword(password)) {
        const token = this.jwtService.sign({ _id: user._id });
        return response(
          reply,
          200,
          true,
          { ...user.toJSON(), password: null, token },
          'Bienvenido',
        );
      }
      return response(reply, 400, false, '', 'email o password incorrectos');
    } catch (error: any) {
      return this.catchMessage(reply, error);
    }
  }

  catchMessage(reply: FastifyReply, error: any) {
    return response(reply, 500, false, '', error.message);
  }
}
