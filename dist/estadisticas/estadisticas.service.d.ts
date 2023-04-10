import { FastifyReply } from 'fastify';
import { Model } from 'mongoose';
import { Cdt } from 'src/cdt/entities/cdt.entity';
import { Credit } from 'src/credit/entities/credit.entity';
import { CuentaAhorro } from 'src/cuenta-ahorros/entities/cuenta-ahorro.entity';
import { Estadistica } from './entities/estadistica.entity';
export declare class EstadisticasService {
    private readonly estadisticaModel;
    private readonly ahorrosModel;
    private readonly cdtModel;
    private readonly creditModel;
    constructor(estadisticaModel: Model<Estadistica>, ahorrosModel: Model<CuentaAhorro>, cdtModel: Model<Cdt>, creditModel: Model<Credit>);
    create(reply: FastifyReply): Promise<void>;
    catchMessage(reply: FastifyReply, error: any): void;
}
