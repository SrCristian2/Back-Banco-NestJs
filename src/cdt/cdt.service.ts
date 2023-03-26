import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FastifyReply } from 'fastify';
import { Model } from 'mongoose';
import { response } from 'src/comun/helpers/Response';
import { subirImagenACloudinary } from 'src/comun/helpers/UploadImg';
import { Config } from 'src/configs/entities/config.entity';
import { User } from 'src/user/entities/user.entity';
import { CreateCdtDto } from './dto/create-cdt.dto';
import { SimulacionCdtDto } from './dto/simulacion-cdt.dto';
// import { UpdateCdtDto } from './dto/update-cdt.dto';
import { Cdt } from './entities/cdt.entity';

@Injectable()
export class CdtService {
  constructor(
    @InjectModel(Cdt.name)
    private readonly cdtModel: Model<Cdt>,
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
    @InjectModel(Config.name)
    private readonly configModel: Model<Config>,
  ) {}

  async create(
    reply: FastifyReply,
    files: Express.Multer.File[],
    createCdtDto: CreateCdtDto,
  ) {
    try {
      const { client, montoDeposito, PlazoDias } = createCdtDto;

      const cliente = await this.userModel.findById({ _id: client });

      const iva = await this.configModel.find();

      let interes = iva[0].tasaInteresCdt;
      const retencion = iva[0].retencion;
      let meses = 0;

      if (!cliente) {
        return response(reply, 404, false, '', 'client not found');
      }

      if (PlazoDias >= 90 && PlazoDias <= 360) {
        interes = interes / 12;

        meses = PlazoDias / 30;
      }

      if (PlazoDias >= 361 && PlazoDias <= 540) {
        interes = 13.5;
        meses = PlazoDias / 30;
      }
      if (PlazoDias >= 541 && PlazoDias <= 747) {
        interes = 14;
        meses = PlazoDias / 30;
      }
      //Esto es la ganancia del cliente
      const tasaDeRetorno = (montoDeposito * interes) / 100;

      //Retencion del gobierno
      const retorno = tasaDeRetorno * meses;

      const retencion1 = (retorno * retencion) / 100;
      //DineroTotal con retencion del gobierno, es el dinero que invirtio mas sus ganancias menos la retencion
      const dineroTotal = retorno + montoDeposito - retencion1;

      const cdt = new this.cdtModel({
        ...createCdtDto,
        totalGanancia: retorno.toFixed(0),
        retencion: retencion1.toFixed(0),
        gananciaTotal: dineroTotal.toFixed(0),
      });

      if (files.length > 0) {
        for (const file of files) {
          // console.log(files);
          const { secure_url, public_id } = await subirImagenACloudinary(file);
          cdt.images.push({ secure_url, public_id });
        }
      }

      await cdt.save();

      return response(
        reply,
        201,
        true,
        cdt.toJSON(),
        'cdt created successfully',
      );
    } catch (error: any) {
      return this.catchMessage(reply, error);
    }
  }

  async findAll(reply: FastifyReply) {
    try {
      const cdts = await this.cdtModel.find();

      return response(reply, 200, true, cdts, 'lista de cdts');
    } catch (error) {
      return this.catchMessage(reply, error);
    }
  }

  async findOne(reply: FastifyReply, id: string) {
    try {
      const cdt = await this.cdtModel.findById(id).populate('user');
      if (!cdt) {
        return response(reply, 404, false, '', 'cdt not found');
      }
      return response(reply, 200, true, cdt, 'cdt list successfully');
    } catch (error: any) {
      return this.catchMessage(reply, error);
    }
  }

  async simulacion(reply: FastifyReply, simulacionCdtDto: SimulacionCdtDto) {
    try {
      const { montoDeposito, plazoDias } = simulacionCdtDto;

      //Tasa de inteseres de acuerdo a los dias

      const iva = await this.configModel.find();

      let interes = iva[0].tasaInteresCdt;
      const retencion = iva[0].retencion;

      let meses = 0;

      if (plazoDias >= 90 && plazoDias <= 360) {
        interes = interes / 12;

        meses = plazoDias / 30;
      }

      if (plazoDias >= 361 && plazoDias <= 540) {
        interes = 13.5;
        meses = plazoDias / 30;
      }
      if (plazoDias >= 541 && plazoDias <= 747) {
        interes = 14;
        meses = plazoDias / 30;
      }
      //Esto es la ganancia del cliente

      const tasaDeRetorno = (montoDeposito * interes) / 100;

      //Retencion del gobierno

      const retorno = tasaDeRetorno * meses;

      const retencion1 = (retorno * retencion) / 100;

      //DineroTotal con retencion del gobierno, es el dinero que invirtio mas sus ganancias menos la retencion

      const dineroTotal = retorno + montoDeposito - retencion1;

      response(
        reply,
        201,
        true,
        {
          ...simulacionCdtDto,
          retorno: retorno.toFixed(0),
          retencion1: retencion1.toFixed(0),
          dineroTotal: dineroTotal.toFixed(0),
        },
        'cdt simulator successfully',
      );
    } catch (error) {
      return this.catchMessage(reply, error);
    }
  }

  catchMessage(reply: FastifyReply, error: any) {
    return response(reply, 500, false, '', error.message);
  }
}
