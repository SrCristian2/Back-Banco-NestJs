import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Res,
  UploadedFile,
  UseInterceptors,
  Put,
} from '@nestjs/common';
import { CuentaAhorrosService } from './cuenta-ahorros.service';
import { CreateCuentaAhorroDto } from './dto/create-cuenta-ahorro.dto';
import { FastifyReply } from 'fastify';
import { FileFastifyInterceptor, diskStorage } from 'fastify-file-interceptor';
import { fileFilter } from 'src/comun/helpers/fileFilter.helper';
import { fileName } from 'src/comun/helpers/fileName.fileFilter';
// import { JwtAuthGuard } from 'src/user/guards/jwt-auth.guard';
import { UpdateCuentaAhorroDto } from './dto/update-cuenta-ahorro.dto';
import { Auth } from 'src/user/decorators/auth.decorator';
import { validRoles } from 'src/user/interfaces/valid-roles';

// @UseGuards(JwtAuthGuard)
@Controller('ahorros')
export class CuentaAhorrosController {
  constructor(private readonly cuentaAhorrosService: CuentaAhorrosService) {}

  @Post('create')
  @Auth(validRoles.employee, validRoles.admin)
  @UseInterceptors(
    FileFastifyInterceptor('img', {
      fileFilter: fileFilter,
      storage: diskStorage({
        destination: './uploads',
        filename: fileName,
      }),
    }),
  )
  create(
    @Res() reply: FastifyReply,
    @UploadedFile() file: Express.Multer.File,
    @Body() createCuentaAhorroDto: CreateCuentaAhorroDto,
  ) {
    return this.cuentaAhorrosService.create(reply, file, createCuentaAhorroDto);
  }

  @Get()
  @Auth(validRoles.employee, validRoles.admin)
  findAll(@Res() reply: FastifyReply) {
    return this.cuentaAhorrosService.findAll(reply);
  }

  @Get(':id')
  findOne(@Res() reply: FastifyReply, @Param('id') id: string) {
    return this.cuentaAhorrosService.findOne(reply, id);
  }

  @Put('block/:id')
  blockAccount(
    @Res() reply: FastifyReply,
    @Param('id') id: string,
    @Body() updateCuentaDto: UpdateCuentaAhorroDto,
  ) {
    return this.cuentaAhorrosService.blockAccount(reply, id, updateCuentaDto);
  }

  @Put('disabled/:id')
  disableAccount(
    @Res() reply: FastifyReply,
    @Param('id') id: string,
    @Body() updateCuentaDto: UpdateCuentaAhorroDto,
  ) {
    return this.cuentaAhorrosService.disableAccount(reply, id, updateCuentaDto);
  }
}
