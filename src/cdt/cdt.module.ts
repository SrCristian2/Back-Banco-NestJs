import { Module } from '@nestjs/common';
import { CdtService } from './cdt.service';
import { CdtController } from './cdt.controller';
import { MongooseModule } from '@nestjs/mongoose';
import userSchema, { User } from 'src/user/entities/user.entity';
import cdtSchema, { Cdt } from './entities/cdt.entity';
import { UserModule } from 'src/user/user.module';
import configSchema, { Config } from 'src/configs/entities/config.entity';

@Module({
  controllers: [CdtController],
  providers: [CdtService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Cdt.name,
        schema: cdtSchema,
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
export class CdtModule {}
