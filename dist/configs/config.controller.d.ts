import { ConfigService } from './config.service';
import { CreateConfigDto } from './dto/create-config.dto';
import { FastifyReply } from 'fastify';
export declare class ConfigController {
    private readonly configService;
    constructor(configService: ConfigService);
    create(reply: FastifyReply, createConfigDto: CreateConfigDto): Promise<void>;
    findAll(reply: FastifyReply): Promise<void>;
}
