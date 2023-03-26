import { Controller, Get, Post, Body, Res } from '@nestjs/common';
import { ConfigService } from './config.service';
import { CreateConfigDto } from './dto/create-config.dto';
// import { UpdateConfigDto } from './dto/update-config.dto';
import { FastifyReply } from 'fastify';
import { Auth } from 'src/user/decorators/auth.decorator';
import { validRoles } from 'src/user/interfaces/valid-roles';

@Controller('config')
export class ConfigController {
  constructor(private readonly configService: ConfigService) {}

  @Post('create')
  @Auth(validRoles.admin)
  create(@Res() reply: FastifyReply, @Body() createConfigDto: CreateConfigDto) {
    return this.configService.create(reply, createConfigDto);
  }

  @Get()
  @Auth(validRoles.admin)
  findAll(@Res() reply: FastifyReply) {
    return this.configService.findAll(reply);
  }
}
