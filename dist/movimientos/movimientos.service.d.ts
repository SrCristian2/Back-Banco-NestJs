import { FastifyReply } from 'fastify';
import { Model } from 'mongoose';
import { Credit } from 'src/credit/entities/credit.entity';
import { CuentaAhorro } from 'src/cuenta-ahorros/entities/cuenta-ahorro.entity';
import { CreateConsignacionDto } from './dto/create-consignacion.dto';
import { CreatePagosDto } from './dto/create-pagos.dto';
import { CreateTransferenciaDto } from './dto/create-transferencia.dto';
import { Consignacion } from './entities/consignacion.entity';
import { Pagos } from './entities/pagos.entity';
import { Transferencias } from './entities/transferencia.entity';
export declare class MovimientosService {
    private readonly transferModel;
    private readonly consignacionModel;
    private readonly pagosModel;
    private readonly ahorrosModel;
    private readonly creditModel;
    constructor(transferModel: Model<Transferencias>, consignacionModel: Model<Consignacion>, pagosModel: Model<Pagos>, ahorrosModel: Model<CuentaAhorro>, creditModel: Model<Credit>);
    transferencia(reply: FastifyReply, createTransferenciaDto: CreateTransferenciaDto): Promise<void>;
    findAllTransfers(reply: FastifyReply): Promise<void>;
    consignacion(reply: FastifyReply, createConsignacionDto: CreateConsignacionDto): Promise<void>;
    findAllConsignaciones(reply: FastifyReply): Promise<void>;
    pagos(reply: FastifyReply, createPagosDto: CreatePagosDto): Promise<void>;
    findAllPagos(reply: FastifyReply): Promise<void>;
    catchMessage(reply: FastifyReply, error: any): void;
}
