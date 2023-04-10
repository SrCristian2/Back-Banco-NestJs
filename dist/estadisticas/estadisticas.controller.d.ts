import { EstadisticasService } from './estadisticas.service';
import { FastifyReply } from 'fastify';
export declare class EstadisticasController {
    private readonly estadisticasService;
    constructor(estadisticasService: EstadisticasService);
    create(reply: FastifyReply): Promise<void>;
}
