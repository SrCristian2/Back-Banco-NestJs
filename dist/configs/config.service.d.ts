import { CreateConfigDto } from './dto/create-config.dto';
import { FastifyReply } from 'fastify';
import { Config } from './entities/config.entity';
import { Model } from 'mongoose';
export declare class ConfigService {
    private readonly configModel;
    constructor(configModel: Model<Config>);
    create(reply: FastifyReply, createConfigDto: CreateConfigDto): Promise<void>;
    findAll(reply: FastifyReply): Promise<void>;
    catchMessage(reply: FastifyReply, error: any): void;
}
