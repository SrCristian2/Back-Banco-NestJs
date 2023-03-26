import { Controller, Res, Post } from '@nestjs/common';
import { EstadisticasService } from './estadisticas.service';
// import { CreateEstadisticaDto } from './dto/create-estadistica.dto';
// import { UpdateEstadisticaDto } from './dto/update-estadistica.dto';
import { FastifyReply } from 'fastify';
import { Auth } from 'src/user/decorators/auth.decorator';
import { validRoles } from 'src/user/interfaces/valid-roles';

@Controller('estadisticas')
export class EstadisticasController {
  constructor(private readonly estadisticasService: EstadisticasService) {}

  @Post()
  @Auth(validRoles.admin)
  create(@Res() reply: FastifyReply) {
    return this.estadisticasService.create(reply);
  }

  // @Get()
  // findAll() {
  //   return this.estadisticasService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.estadisticasService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateEstadisticaDto: UpdateEstadisticaDto) {
  //   return this.estadisticasService.update(+id, updateEstadisticaDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.estadisticasService.remove(+id);
}
