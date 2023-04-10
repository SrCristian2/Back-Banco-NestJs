/// <reference types="multer" />
import { CuentaAhorrosService } from './cuenta-ahorros.service';
import { CreateCuentaAhorroDto } from './dto/create-cuenta-ahorro.dto';
import { FastifyReply } from 'fastify';
import { UpdateCuentaAhorroDto } from './dto/update-cuenta-ahorro.dto';
export declare class CuentaAhorrosController {
    private readonly cuentaAhorrosService;
    constructor(cuentaAhorrosService: CuentaAhorrosService);
    create(reply: FastifyReply, file: Express.Multer.File, createCuentaAhorroDto: CreateCuentaAhorroDto): Promise<void>;
    findAll(reply: FastifyReply): Promise<void>;
    findOne(reply: FastifyReply, id: string): Promise<void>;
    blockAccount(reply: FastifyReply, id: string, updateCuentaDto: UpdateCuentaAhorroDto): Promise<void>;
    disableAccount(reply: FastifyReply, id: string, updateCuentaDto: UpdateCuentaAhorroDto): Promise<void>;
}
