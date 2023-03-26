import { Module } from '@nestjs/common';
import { EstadisticasService } from './estadisticas.service';
import { EstadisticasController } from './estadisticas.controller';
import { MongooseModule } from '@nestjs/mongoose';
import estadisticaSchema, { Estadistica } from './entities/estadistica.entity';
import ahorrosSchema, {
  CuentaAhorro,
} from 'src/cuenta-ahorros/entities/cuenta-ahorro.entity';
import cdtSchema, { Cdt } from 'src/cdt/entities/cdt.entity';
import creditSchema, { Credit } from 'src/credit/entities/credit.entity';
import { UserModule } from 'src/user/user.module';

@Module({
  controllers: [EstadisticasController],
  providers: [EstadisticasService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Estadistica.name,
        schema: estadisticaSchema,
      },
      {
        name: CuentaAhorro.name,
        schema: ahorrosSchema,
      },
      {
        name: Cdt.name,
        schema: cdtSchema,
      },
      {
        name: Credit.name,
        schema: creditSchema,
      },
    ]),

    UserModule,
  ],
})
export class EstadisticasModule {}
