/// <reference types="multer" />
import { FastifyReply } from 'fastify';
import { Model } from 'mongoose';
import { Config } from 'src/configs/entities/config.entity';
import { User } from 'src/user/entities/user.entity';
import { CreateCdtDto } from './dto/create-cdt.dto';
import { SimulacionCdtDto } from './dto/simulacion-cdt.dto';
import { Cdt } from './entities/cdt.entity';
export declare class CdtService {
    private readonly cdtModel;
    private readonly userModel;
    private readonly configModel;
    constructor(cdtModel: Model<Cdt>, userModel: Model<User>, configModel: Model<Config>);
    create(reply: FastifyReply, files: Express.Multer.File[], createCdtDto: CreateCdtDto): Promise<void>;
    findAll(reply: FastifyReply): Promise<void>;
    findOne(reply: FastifyReply, id: string): Promise<void>;
    simulacion(reply: FastifyReply, simulacionCdtDto: SimulacionCdtDto): Promise<void>;
    catchMessage(reply: FastifyReply, error: any): void;
}
