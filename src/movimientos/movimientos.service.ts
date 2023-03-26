import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FastifyReply } from 'fastify';
import { Model } from 'mongoose';
import { response } from 'src/comun/helpers/Response';
import { Credit } from 'src/credit/entities/credit.entity';
import { CuentaAhorro } from 'src/cuenta-ahorros/entities/cuenta-ahorro.entity';
import { CreateConsignacionDto } from './dto/create-consignacion.dto';
import { CreatePagosDto } from './dto/create-pagos.dto';
import { CreateTransferenciaDto } from './dto/create-transferencia.dto';
import { Consignacion } from './entities/consignacion.entity';
import { Pagos } from './entities/pagos.entity';
import { Transferencias } from './entities/transferencia.entity';

@Injectable()
export class MovimientosService {
  constructor(
    @InjectModel(Transferencias.name)
    private readonly transferModel: Model<Transferencias>,

    @InjectModel(Consignacion.name)
    private readonly consignacionModel: Model<Consignacion>,

    @InjectModel(Pagos.name)
    private readonly pagosModel: Model<Pagos>,

    @InjectModel(CuentaAhorro.name)
    private readonly ahorrosModel: Model<CuentaAhorro>,

    @InjectModel(Credit.name)
    private readonly creditModel: Model<Credit>,
  ) {}

  async transferencia(
    reply: FastifyReply,
    createTransferenciaDto: CreateTransferenciaDto,
  ) {
    try {
      const { cuentaOrigen, cuentaDestino, monto } = createTransferenciaDto;
      const rootAccount = await this.ahorrosModel.findById({
        _id: cuentaOrigen,
      });

      const destinyAccount = await this.ahorrosModel.findById({
        _id: cuentaDestino,
      });

      if (!rootAccount || !destinyAccount) {
        return response(reply, 404, false, '', `account not found`);
      }

      if (rootAccount.isBlocked === true || destinyAccount.isBlocked === true) {
        return response(reply, 400, false, '', `accounts is blocked`);
      }

      if (
        rootAccount.isDisabled === true ||
        destinyAccount.isDisabled === true
      ) {
        return response(reply, 400, false, '', `account is disabled `);
      }

      if (rootAccount.founds < monto) {
        return response(reply, 400, false, '', `insufficient funds`);
      }

      const saldo = rootAccount.founds;

      await rootAccount.updateOne({ saldo: saldo - monto });
      await destinyAccount.updateOne({ saldo: saldo + monto });

      const newTransfer = new this.transferModel({
        ...createTransferenciaDto,
      });

      await newTransfer.save();

      return response(
        reply,
        201,
        true,
        newTransfer.toJSON(),
        'Transfer Success',
      );
    } catch (error) {
      return this.catchMessage(reply, error);
    }
  }

  async findAllTransfers(reply: FastifyReply) {
    try {
      const transfers = await this.transferModel.find();

      return response(reply, 200, true, transfers, "transfer's list");
    } catch (error) {
      return this.catchMessage(reply, error);
    }
  }

  async consignacion(
    reply: FastifyReply,
    createConsignacionDto: CreateConsignacionDto,
  ) {
    try {
      const { cuentaDestino, monto } = createConsignacionDto;

      const destinyAccount = await this.ahorrosModel.findById({
        _id: cuentaDestino,
      });

      if (!destinyAccount) {
        return response(reply, 404, false, '', `account not found`);
      }

      if (destinyAccount.isBlocked == true) {
        return response(reply, 400, false, '', `accounts is blocked`);
      }

      if (destinyAccount.isDisabled === true) {
        return response(reply, 400, false, '', `account is disabled `);
      }

      const saldo = destinyAccount.founds;

      const newConsignacion = new this.consignacionModel({
        ...createConsignacionDto,
      });

      await destinyAccount.updateOne({ saldo: saldo + monto });

      await newConsignacion.save();

      return response(reply, 201, true, newConsignacion, 'consignment Success');
    } catch (error) {
      return this.catchMessage(reply, error);
    }
  }

  async findAllConsignaciones(reply: FastifyReply) {
    try {
      const consignaciones = await this.consignacionModel.find();

      return response(reply, 200, true, consignaciones, "consignment's list");
    } catch (error) {
      return this.catchMessage(reply, error);
    }
  }

  async pagos(reply: FastifyReply, createPagosDto: CreatePagosDto) {
    try {
      const { credit, ahorros, monto, cuotas } = createPagosDto;

      const product = await this.creditModel.findOne({ _id: credit });

      const total = product.totalAPagarCadaCuota * cuotas;

      if (monto < total) {
        return response(
          reply,
          400,
          false,
          '',
          `the amount entered does not correspond to the total amount payable ${total}`,
        );
      }
      if (ahorros) {
        const account = await this.ahorrosModel.findById({ _id: ahorros });

        if (!account) {
          return response(reply, 404, false, '', 'account not found');
        }

        if (account.founds < total) {
          return response(
            reply,
            400,
            false,
            '',
            `la cuenta no tiene fondos suficientes para pagar ${total} `,
          );
        }
        if (monto < total) {
          return response(
            reply,
            400,
            false,
            '',
            `the amount entered does not correspond to the total amount payable ${total}`,
          );
        }
        const newPago1 = new this.pagosModel({
          ...createPagosDto,
        });

        await product.updateOne({ montoAPagar: product.montoAPagar - monto });

        await product.updateOne({ cuotas: product.cuotas - cuotas });

        await this.ahorrosModel.updateOne({ saldo: account.founds - monto });

        await this.pagosModel.create(newPago1);

        return response(reply, 200, true, newPago1, 'payment success');
      }

      const newPago = new this.pagosModel({
        ...createPagosDto,
      });

      await product.updateOne({ cuotas: product.cuotas - cuotas });

      await product.updateOne({ montoAPagar: product.montoAPagar - monto });

      await this.pagosModel.create(newPago);

      return response(reply, 201, true, newPago.toJSON(), 'pago Success');
    } catch (error) {
      return this.catchMessage(reply, error);
    }
  }

  async findAllPagos(reply: FastifyReply) {
    try {
      const pagos = await this.pagosModel.find();

      return response(reply, 200, true, pagos, "pago's list");
    } catch (error) {
      return this.catchMessage(reply, error);
    }
  }

  catchMessage(reply: FastifyReply, error: any) {
    return response(reply, 500, false, '', error.message);
  }
}
