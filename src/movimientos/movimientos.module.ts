import { Module } from '@nestjs/common';
import { MovimientosService } from './movimientos.service';
import { MovimientosController } from './movimientos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import transferenciaSchema, {
  Transferencias,
} from './entities/transferencia.entity';
import { UserModule } from 'src/user/user.module';
import consignacionSchema, {
  Consignacion,
} from './entities/consignacion.entity';
import pagosSchema, { Pagos } from './entities/pagos.entity';
import creditSchema, { Credit } from 'src/credit/entities/credit.entity';
import ahorrosSchema, {
  CuentaAhorro,
} from 'src/cuenta-ahorros/entities/cuenta-ahorro.entity';

@Module({
  controllers: [MovimientosController],
  providers: [MovimientosService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Transferencias.name,
        schema: transferenciaSchema,
      },
      {
        name: Consignacion.name,
        schema: consignacionSchema,
      },
      {
        name: Pagos.name,
        schema: pagosSchema,
      },
      {
        name: Credit.name,
        schema: creditSchema,
      },
      {
        name: CuentaAhorro.name,
        schema: ahorrosSchema,
      },
    ]),

    UserModule,
  ],
})
export class MovimientosModule {}
