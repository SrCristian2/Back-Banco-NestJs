import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FastifyReply } from 'fastify';
import { Model } from 'mongoose';
import { Cdt } from 'src/cdt/entities/cdt.entity';
import { response } from 'src/comun/helpers/Response';
import { Credit } from 'src/credit/entities/credit.entity';
import { CuentaAhorro } from 'src/cuenta-ahorros/entities/cuenta-ahorro.entity';
// import { CreateEstadisticaDto } from './dto/create-estadistica.dto';
// import { UpdateEstadisticaDto } from './dto/update-estadistica.dto';
import { Estadistica } from './entities/estadistica.entity';

@Injectable()
export class EstadisticasService {
  constructor(
    @InjectModel(Estadistica.name)
    private readonly estadisticaModel: Model<Estadistica>,

    @InjectModel(CuentaAhorro.name)
    private readonly ahorrosModel: Model<CuentaAhorro>,

    @InjectModel(Cdt.name)
    private readonly cdtModel: Model<Cdt>,

    @InjectModel(Credit.name)
    private readonly creditModel: Model<Credit>,
  ) {}

  async create(
    reply: FastifyReply,
    // createEstadisticaDto: CreateEstadisticaDto,
  ) {
    try {
      const accounts = await this.ahorrosModel.find();

      // const cdts = await this.cdtModel.find();

      const credits = await this.creditModel.find();

      const blockedAccounts = accounts.filter(
        (item) => item.isBlocked === true,
      );
      const disabledAccounts = accounts.filter(
        (item) => item.isDisabled === true,
      );

      disabledAccounts.map((item) => {
        item.founds = 0;
      });
      const ganancia = credits.reduce(
        (acc, account) => acc + account.totalIntereses,
        0,
      );

      const ahorros = accounts.reduce(
        (acc, account) => acc + account.founds,
        0,
      );

      const newEstadistica = new this.estadisticaModel({
        cuentasBancarias: accounts.length,
        ahorrosTotales: ahorros,
        cuentasBloqueadas: blockedAccounts.length,
        gananciasTotales: ganancia,
        creditos: credits.length,
        cuentasDeshabilitadas: disabledAccounts.length,
      });

      await newEstadistica.save();

      return response(reply, 200, true, newEstadistica, 'estadisticas');
    } catch (error: any) {
      return this.catchMessage(reply, error);
    }
  }

  catchMessage(reply: FastifyReply, error: any) {
    return response(reply, 500, false, '', error.message);
  }
}
