import { Controller, Post, Body, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { FastifyReply } from 'fastify';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  register(@Res() reply: FastifyReply, @Body() createUserDto: CreateUserDto) {
    return this.userService.register(reply, createUserDto);
  }

  @Post('login')
  login(@Res() reply: FastifyReply, @Body() loginUserDto: LoginUserDto) {
    return this.userService.login(reply, loginUserDto);
  }
}
