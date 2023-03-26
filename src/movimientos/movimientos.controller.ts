import { Controller, Get, Post, Body } from '@nestjs/common';
import { MovimientosService } from './movimientos.service';
import { CreateTransferenciaDto } from './dto/create-transferencia.dto';
// import { UpdateMovimientoDto } from './dto/update-movimiento.dto';
import { Res } from '@nestjs/common/decorators';
import { FastifyReply } from 'fastify';
import { CreateConsignacionDto } from './dto/create-consignacion.dto';
import { CreatePagosDto } from './dto/create-pagos.dto';
import { Auth } from 'src/user/decorators/auth.decorator';
import { validRoles } from 'src/user/interfaces/valid-roles';

@Controller('movimientos')
export class MovimientosController {
  constructor(private readonly movimientosService: MovimientosService) {}

  @Post('transfer/create')
  @Auth(validRoles.client)
  transferencia(
    @Res() reply: FastifyReply,
    @Body() createTransferenciaDto: CreateTransferenciaDto,
  ) {
    return this.movimientosService.transferencia(reply, createTransferenciaDto);
  }

  @Get('transfer')
  @Auth(validRoles.client)
  findAll(@Res() reply: FastifyReply) {
    return this.movimientosService.findAllTransfers(reply);
  }

  @Post('consignacion/create')
  @Auth(validRoles.client)
  consignacion(
    @Res() reply: FastifyReply,
    @Body() createConsignacionDto: CreateConsignacionDto,
  ) {
    return this.movimientosService.consignacion(reply, createConsignacionDto);
  }

  @Get('consignacion')
  @Auth(validRoles.client)
  findAllConsignacion(@Res() reply: FastifyReply) {
    return this.movimientosService.findAllConsignaciones(reply);
  }

  @Post('pagos/create')
  @Auth(validRoles.client)
  pagos(@Res() reply: FastifyReply, createPagosDto: CreatePagosDto) {
    return this.movimientosService.pagos(reply, createPagosDto);
  }

  @Get('pagos')
  @Auth(validRoles.client)
  findAllPagos(@Res() reply: FastifyReply) {
    return this.movimientosService.findAllPagos(reply);
  }
}
