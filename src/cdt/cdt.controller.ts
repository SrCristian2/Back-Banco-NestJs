import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseInterceptors,
  UploadedFiles,
  Res,
} from '@nestjs/common';
import { diskStorage, FilesFastifyInterceptor } from 'fastify-file-interceptor';
import { fileFilter } from 'src/comun/helpers/fileFilter.helper';
import { fileName } from 'src/comun/helpers/fileName.fileFilter';
import { CdtService } from './cdt.service';
import { CreateCdtDto } from './dto/create-cdt.dto';
// import { UpdateCdtDto } from './dto/update-cdt.dto';
import { FastifyReply } from 'fastify';
import { SimulacionCdtDto } from './dto/simulacion-cdt.dto';
import { Auth } from 'src/user/decorators/auth.decorator';
import { validRoles } from 'src/user/interfaces/valid-roles';

@Controller('cdt')
export class CdtController {
  constructor(private readonly cdtService: CdtService) {}

  @Post('create')
  @Auth(validRoles.admin, validRoles.employee)
  @UseInterceptors(
    FilesFastifyInterceptor('images', 3, {
      fileFilter: fileFilter,
      storage: diskStorage({
        destination: './uploads',
        filename: fileName,
      }),
    }),
  )
  create(
    @Res() reply: FastifyReply,
    @UploadedFiles() files: Express.Multer.File[],
    @Body() createCdtDto: CreateCdtDto,
  ) {
    return this.cdtService.create(reply, files, createCdtDto);
  }

  @Get()
  @Auth(validRoles.admin, validRoles.employee)
  findAll(@Res() reply: FastifyReply) {
    return this.cdtService.findAll(reply);
  }

  @Get(':id')
  @Auth(validRoles.client)
  findOne(@Res() reply: FastifyReply, @Param('id') id: string) {
    return this.cdtService.findOne(reply, id);
  }

  @Post('simulacion')
  @Auth(validRoles.client)
  simulacion(
    @Res() reply: FastifyReply,
    @Body() simulacionCdtDto: SimulacionCdtDto,
  ) {
    return this.cdtService.simulacion(reply, simulacionCdtDto);
  }
}
