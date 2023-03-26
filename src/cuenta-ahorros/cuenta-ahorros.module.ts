import { Module } from '@nestjs/common';
import { CuentaAhorrosService } from './cuenta-ahorros.service';
import { CuentaAhorrosController } from './cuenta-ahorros.controller';
import { MongooseModule } from '@nestjs/mongoose';
import ahorrosSchema, { CuentaAhorro } from './entities/cuenta-ahorro.entity';
import userSchema, { User } from 'src/user/entities/user.entity';
import { UserModule } from 'src/user/user.module';

@Module({
  controllers: [CuentaAhorrosController],
  providers: [CuentaAhorrosService],
  imports: [
    MongooseModule.forFeature([
      {
        name: CuentaAhorro.name,
        schema: ahorrosSchema,
      },
      {
        name: User.name,
        schema: userSchema,
      },
    ]),

    UserModule,
  ],
})
export class CuentaAhorrosModule {}
