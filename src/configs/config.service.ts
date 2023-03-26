import { Injectable } from '@nestjs/common';
import { response } from 'src/comun/helpers/Response';
import { CreateConfigDto } from './dto/create-config.dto';
// import { UpdateConfigDto } from './dto/update-config.dto';
import { FastifyReply } from 'fastify';
import { InjectModel } from '@nestjs/mongoose';
import { Config } from './entities/config.entity';
import { Model } from 'mongoose';

@Injectable()
export class ConfigService {
  constructor(
    @InjectModel(Config.name)
    private readonly configModel: Model<Config>,
  ) {}

  async create(reply: FastifyReply, createConfigDto: CreateConfigDto) {
    try {
      const newConfig = new this.configModel(createConfigDto);
      await newConfig.save();

      return response(reply, 201, true, newConfig.toJSON(), 'config created');
    } catch (error: any) {
      return this.catchMessage(reply, error);
    }
  }

  async findAll(reply: FastifyReply) {
    try {
      const configs = await this.configModel.find();
      return response(reply, 200, true, configs, 'configuraciones');
    } catch (error) {
      return this.catchMessage(reply, error);
    }
  }

  catchMessage(reply: FastifyReply, error: any) {
    return response(reply, 500, false, '', error.message);
  }
}
