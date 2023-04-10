/// <reference types="multer" />
import { FastifyReply } from 'fastify';
import { CreditService } from './credit.service';
import { CreateCreditDto } from './dto/create-credit.dto';
export declare class CreditController {
    private readonly creditService;
    constructor(creditService: CreditService);
    create(reply: FastifyReply, files: Express.Multer.File[], createCreditDto: CreateCreditDto): Promise<void>;
    findAll(reply: FastifyReply): Promise<void>;
    findOne(reply: FastifyReply, id: string): Promise<void>;
}
