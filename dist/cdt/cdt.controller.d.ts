/// <reference types="multer" />
import { CdtService } from './cdt.service';
import { CreateCdtDto } from './dto/create-cdt.dto';
import { FastifyReply } from 'fastify';
import { SimulacionCdtDto } from './dto/simulacion-cdt.dto';
export declare class CdtController {
    private readonly cdtService;
    constructor(cdtService: CdtService);
    create(reply: FastifyReply, files: Express.Multer.File[], createCdtDto: CreateCdtDto): Promise<void>;
    findAll(reply: FastifyReply): Promise<void>;
    findOne(reply: FastifyReply, id: string): Promise<void>;
    simulacion(reply: FastifyReply, simulacionCdtDto: SimulacionCdtDto): Promise<void>;
}
