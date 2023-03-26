import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FastifyReply } from 'fastify';
import { Model } from 'mongoose';
import { response } from 'src/comun/helpers/Response';
import { subirImagenACloudinary } from 'src/comun/helpers/UploadImg';
import { Config } from 'src/configs/entities/config.entity';
import { User } from 'src/user/entities/user.entity';
import { CreateCreditDto } from './dto/create-credit.dto';
// import { UpdateCreditDto } from './dto/update-credit.dto';
import { Credit } from './entities/credit.entity';

@Injectable()
export class CreditService {
  constructor(
    @InjectModel(Credit.name)
    private readonly creditModel: Model<Credit>,
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
    @InjectModel(Config.name)
    private readonly configModel: Model<Config>,
  ) {}

  async create(
    reply: FastifyReply,
    files: Express.Multer.File[],
    createCreditDto: CreateCreditDto,
  ) {
    try {
      const { client, cuotas, montoAPagar } = createCreditDto;

      const iva = await this.configModel.find();

      // const porcentaje = iva[0].porcentajeIva;

      const porcentaje = iva[0].porcentajeCreditoAnual;

      //Valor del Iva

      const valorIvaDelCredito = (montoAPagar * porcentaje) / 100;

      //Valor completo con el iva
      // const totalGanancia = valorIvaDelCredito * cuotas;

      const montoTotal = valorIvaDelCredito + montoAPagar;

      const cuota = montoTotal / cuotas;

      const cliente = await this.userModel.findById({ _id: client });
      if (!cliente) {
        return response(reply, 404, false, '', `the client does not exist`);
      }

      const newCredit = new this.creditModel({
        ...createCreditDto,
        totalAPagarCadaCuota: cuota.toFixed(0),
        montoAPagar: montoTotal.toFixed(0),
        totalIntereses: valorIvaDelCredito.toFixed(0),
      });

      if (files.length > 0) {
        for (const file of files) {
          const { secure_url, public_id } = await subirImagenACloudinary(file);
          newCredit.images.push({ secure_url, public_id });
        }
      }

      await this.creditModel.create(newCredit);

      return response(
        reply,
        201,
        true,
        newCredit,
        'credit has been created successfully',
      );
    } catch (error: any) {
      return this.catchMessage(reply, error);
    }
  }

  async findAll(reply: FastifyReply) {
    try {
      const credits = await this.creditModel
        .find()
        .populate('user', { name: 1, email: 1, role: 1 });

      return response(reply, 200, true, credits, 'lista de creditos');
    } catch (error) {
      return this.catchMessage(reply, error);
    }
  }

  async findOne(reply: FastifyReply, id: string) {
    try {
      const credit = await this.creditModel
        .findById({ _id: id })
        .populate('user', { name: 1, email: 1, role: 1 });

      if (!credit) {
        return response(reply, 404, false, '', `the credit does not exist`);
      }

      return response(reply, 200, true, credit, 'Credit found');
    } catch (error) {
      return this.catchMessage(reply, error);
    }
  }

  // update(id: number, updateCreditDto: UpdateCreditDto) {
  //   return `This action updates a #${id} credit`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} credit`;
  // }

  catchMessage(reply: FastifyReply, error: any) {
    return response(reply, 500, false, '', error.message);
  }
}
