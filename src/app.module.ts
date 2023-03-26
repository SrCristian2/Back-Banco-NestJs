import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { CuentaAhorrosModule } from './cuenta-ahorros/cuenta-ahorros.module';
import { CdtModule } from './cdt/cdt.module';
import { ConfigsModule } from './configs/config.module';
import { CreditModule } from './credit/credit.module';
import { MovimientosModule } from './movimientos/movimientos.module';
import { EstadisticasModule } from './estadisticas/estadisticas.module';

@Module({
  imports: [
    ConfigModule.forRoot(),

    MongooseModule.forRoot(process.env.MONGO_URI),

    UserModule,

    CuentaAhorrosModule,

    CdtModule,

    ConfigsModule,

    CreditModule,

    MovimientosModule,

    EstadisticasModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
