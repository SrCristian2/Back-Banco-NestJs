import { MovimientosService } from './movimientos.service';
import { CreateTransferenciaDto } from './dto/create-transferencia.dto';
import { FastifyReply } from 'fastify';
import { CreateConsignacionDto } from './dto/create-consignacion.dto';
import { CreatePagosDto } from './dto/create-pagos.dto';
export declare class MovimientosController {
    private readonly movimientosService;
    constructor(movimientosService: MovimientosService);
    transferencia(reply: FastifyReply, createTransferenciaDto: CreateTransferenciaDto): Promise<void>;
    findAll(reply: FastifyReply): Promise<void>;
    consignacion(reply: FastifyReply, createConsignacionDto: CreateConsignacionDto): Promise<void>;
    findAllConsignacion(reply: FastifyReply): Promise<void>;
    pagos(reply: FastifyReply, createPagosDto: CreatePagosDto): Promise<void>;
    findAllPagos(reply: FastifyReply): Promise<void>;
}
