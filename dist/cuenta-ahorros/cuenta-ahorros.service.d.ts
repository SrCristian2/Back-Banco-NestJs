/// <reference types="multer" />
import { CreateCuentaAhorroDto } from './dto/create-cuenta-ahorro.dto';
import { FastifyReply } from 'fastify';
import { CuentaAhorro } from './entities/cuenta-ahorro.entity';
import { Model } from 'mongoose';
import { User } from 'src/user/entities/user.entity';
import { UpdateCuentaAhorroDto } from './dto/update-cuenta-ahorro.dto';
export declare class CuentaAhorrosService {
    private readonly ahorrosModel;
    private readonly userModel;
    constructor(ahorrosModel: Model<CuentaAhorro>, userModel: Model<User>);
    create(reply: FastifyReply, file: Express.Multer.File, createCuentaAhorroDto: CreateCuentaAhorroDto): Promise<void>;
    findAll(reply: FastifyReply): Promise<void>;
    findOne(reply: FastifyReply, id: string): Promise<void>;
    blockAccount(reply: FastifyReply, id: string, updateCuentaDto: UpdateCuentaAhorroDto): Promise<void>;
    disableAccount(reply: FastifyReply, id: string, updateCuentaDto: UpdateCuentaAhorroDto): Promise<void>;
    catchMessage(reply: FastifyReply, error: any): void;
}
