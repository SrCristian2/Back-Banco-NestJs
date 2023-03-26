import { Module } from '@nestjs/common';
import { ConfigService } from './config.service';
import { ConfigController } from './config.controller';
import { MongooseModule } from '@nestjs/mongoose';
import configSchema, { Config } from './entities/config.entity';
import { UserModule } from 'src/user/user.module';

@Module({
  controllers: [ConfigController],
  providers: [ConfigService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Config.name,
        schema: configSchema,
      },
    ]),

    UserModule,
  ],
})
export class ConfigsModule {}
