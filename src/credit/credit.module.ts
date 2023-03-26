import { Module } from '@nestjs/common';
import { CreditService } from './credit.service';
import { CreditController } from './credit.controller';
import { MongooseModule } from '@nestjs/mongoose';
import creditSchema, { Credit } from './entities/credit.entity';
import { UserModule } from 'src/user/user.module';
import userSchema, { User } from 'src/user/entities/user.entity';
import configSchema, { Config } from 'src/configs/entities/config.entity';

@Module({
  controllers: [CreditController],
  providers: [CreditService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Credit.name,
        schema: creditSchema,
      },
      {
        name: User.name,
        schema: userSchema,
      },
      {
        name: Config.name,
        schema: configSchema,
      },
    ]),

    UserModule,
  ],
})
export class CreditModule {}
