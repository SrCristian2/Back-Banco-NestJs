import { Injectable } from '@nestjs/common';
import { response } from 'src/comun/helpers/Response';
import { CreateCuentaAhorroDto } from './dto/create-cuenta-ahorro.dto';
import { FastifyReply } from 'fastify';
import { InjectModel } from '@nestjs/mongoose';
import { CuentaAhorro } from './entities/cuenta-ahorro.entity';
import { Model } from 'mongoose';
import { User } from 'src/user/entities/user.entity';
import { subirImagenACloudinary } from 'src/comun/helpers/UploadImg';
import { UpdateCuentaAhorroDto } from './dto/update-cuenta-ahorro.dto';

@Injectable()
export class CuentaAhorrosService {
  constructor(
    @InjectModel(CuentaAhorro.name)
    private readonly ahorrosModel: Model<CuentaAhorro>,
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
  ) {}

  async create(
    reply: FastifyReply,
    file: Express.Multer.File,
    createCuentaAhorroDto: CreateCuentaAhorroDto,
  ) {
    try {
      const { user } = createCuentaAhorroDto;
      const cliente = await this.userModel.findById({ _id: user });
      if (!cliente) {
        return response(reply, 404, false, '', `the client does not exist`);
      }

      const newCuenta = new this.ahorrosModel({
        ...createCuentaAhorroDto,
      });
      if (file) {
        const { secure_url, public_id } = await subirImagenACloudinary(file);
        newCuenta.setImg(secure_url, public_id);
      }
      await newCuenta.save();

      const cuenta = await this.ahorrosModel
        .findById({ _id: newCuenta._id })
        .populate('user', { name: 1, email: 1, role: 1 });

      return response(reply, 201, true, cuenta, 'account created');
    } catch (error: any) {
      return this.catchMessage(reply, error);
    }
  }

  async findAll(reply: FastifyReply) {
    try {
      const cuentas = await this.ahorrosModel.find();

      return response(reply, 200, true, cuentas, 'lista de cuentas');
    } catch (error) {
      return this.catchMessage(reply, error);
    }
  }

  async findOne(reply: FastifyReply, id: string) {
    try {
      const ahorros = await this.ahorrosModel.findById({ _id: id });
      const user = await this.userModel.findById({ _id: ahorros.user });

      if (!ahorros) {
        return response(reply, 404, false, '', `the account does not exist`);
      }

      return response(
        reply,
        200,
        true,
        { ...ahorros.toJSON(), user: user.name },
        'account found',
      );
    } catch (error: any) {
      return this.catchMessage(reply, error);
    }
  }

  async blockAccount(
    reply: FastifyReply,
    id: string,
    updateCuentaDto: UpdateCuentaAhorroDto,
  ) {
    try {
      const ahorros = await this.ahorrosModel.findById(id);
      if (!ahorros) {
        return response(reply, 404, false, '', 'Account does not exist');
      }
      if (ahorros.isDisabled === true) {
        return response(
          reply,
          400,
          false,
          '',
          "account can't be block because account is disabled",
        );
      }

      if (updateCuentaDto.isBlocked) {
        await ahorros.updateOne({ isBlocked: updateCuentaDto.isBlocked });
        return response(reply, 200, true, '', 'cuenta desbloqueada');
      } else {
        if (ahorros.isBlocked === true) {
          return response(reply, 400, false, '', 'account already block');
        }
      }

      await ahorros.updateOne({ isBlocked: true });
      return response(reply, 200, true, '', 'account succefully block');
    } catch (error: any) {
      return this.catchMessage(reply, error);
    }
  }

  async disableAccount(
    reply: FastifyReply,
    id: string,
    updateCuentaDto: UpdateCuentaAhorroDto,
  ) {
    try {
      const ahorros = await this.ahorrosModel.findById(id);
      if (!ahorros) {
        return response(reply, 404, false, '', 'Account does not exist');
      }

      if (updateCuentaDto.isDisabled) {
        await ahorros.updateOne({ isDisabled: updateCuentaDto.isDisabled });
        return response(reply, 200, true, '', 'cuenta desbloqueada');
      } else {
        if (ahorros.isDisabled === true) {
          return response(reply, 400, false, '', 'account alredy disabled');
        }
      }

      await ahorros.updateOne({ isDisabled: true });
      return response(reply, 200, true, '', 'Account disabled successfully');
    } catch (error: any) {
      return this.catchMessage(reply, error);
    }
  }

  catchMessage(reply: FastifyReply, error: any) {
    return response(reply, 500, false, '', error.message);
  }
}
