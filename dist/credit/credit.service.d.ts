/// <reference types="multer" />
import { FastifyReply } from 'fastify';
import { Model } from 'mongoose';
import { Config } from 'src/configs/entities/config.entity';
import { User } from 'src/user/entities/user.entity';
import { CreateCreditDto } from './dto/create-credit.dto';
import { Credit } from './entities/credit.entity';
export declare class CreditService {
    private readonly creditModel;
    private readonly userModel;
    private readonly configModel;
    constructor(creditModel: Model<Credit>, userModel: Model<User>, configModel: Model<Config>);
    create(reply: FastifyReply, files: Express.Multer.File[], createCreditDto: CreateCreditDto): Promise<void>;
    findAll(reply: FastifyReply): Promise<void>;
    findOne(reply: FastifyReply, id: string): Promise<void>;
    catchMessage(reply: FastifyReply, error: any): void;
}
