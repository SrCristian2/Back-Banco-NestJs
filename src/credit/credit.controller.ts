import { Controller, Get, Post, Body, Param, Res } from '@nestjs/common';
import { FastifyReply } from 'fastify';
import { Auth } from 'src/user/decorators/auth.decorator';
import { validRoles } from 'src/user/interfaces/valid-roles';
import { CreditService } from './credit.service';
import { CreateCreditDto } from './dto/create-credit.dto';
// import { UpdateCreditDto } from './dto/update-credit.dto';

@Controller('credit')
export class CreditController {
  constructor(private readonly creditService: CreditService) {}

  @Post('create')
  @Auth(validRoles.admin, validRoles.employee)
  create(
    @Res() reply: FastifyReply,
    files: Express.Multer.File[],
    @Body() createCreditDto: CreateCreditDto,
  ) {
    return this.creditService.create(reply, files, createCreditDto);
  }

  @Get()
  @Auth(validRoles.admin, validRoles.employee)
  findAll(@Res() reply: FastifyReply) {
    return this.creditService.findAll(reply);
  }

  @Get(':id')
  @Auth(validRoles.client)
  findOne(@Res() reply: FastifyReply, @Param('id') id: string) {
    return this.creditService.findOne(reply, id);
  }
}
