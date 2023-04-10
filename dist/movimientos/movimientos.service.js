"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovimientosService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const Response_1 = require("../comun/helpers/Response");
const credit_entity_1 = require("../credit/entities/credit.entity");
const cuenta_ahorro_entity_1 = require("../cuenta-ahorros/entities/cuenta-ahorro.entity");
const consignacion_entity_1 = require("./entities/consignacion.entity");
const pagos_entity_1 = require("./entities/pagos.entity");
const transferencia_entity_1 = require("./entities/transferencia.entity");
let MovimientosService = class MovimientosService {
    constructor(transferModel, consignacionModel, pagosModel, ahorrosModel, creditModel) {
        this.transferModel = transferModel;
        this.consignacionModel = consignacionModel;
        this.pagosModel = pagosModel;
        this.ahorrosModel = ahorrosModel;
        this.creditModel = creditModel;
    }
    async transferencia(reply, createTransferenciaDto) {
        try {
            const { cuentaOrigen, cuentaDestino, monto } = createTransferenciaDto;
            const rootAccount = await this.ahorrosModel.findById({
                _id: cuentaOrigen,
            });
            const destinyAccount = await this.ahorrosModel.findById({
                _id: cuentaDestino,
            });
            if (!rootAccount || !destinyAccount) {
                return (0, Response_1.response)(reply, 404, false, '', `account not found`);
            }
            if (rootAccount.isBlocked === true || destinyAccount.isBlocked === true) {
                return (0, Response_1.response)(reply, 400, false, '', `accounts is blocked`);
            }
            if (rootAccount.isDisabled === true ||
                destinyAccount.isDisabled === true) {
                return (0, Response_1.response)(reply, 400, false, '', `account is disabled `);
            }
            if (rootAccount.founds < monto) {
                return (0, Response_1.response)(reply, 400, false, '', `insufficient funds`);
            }
            const saldo = rootAccount.founds;
            await rootAccount.updateOne({ saldo: saldo - monto });
            await destinyAccount.updateOne({ saldo: saldo + monto });
            const newTransfer = new this.transferModel(Object.assign({}, createTransferenciaDto));
            await newTransfer.save();
            return (0, Response_1.response)(reply, 201, true, newTransfer.toJSON(), 'Transfer Success');
        }
        catch (error) {
            return this.catchMessage(reply, error);
        }
    }
    async findAllTransfers(reply) {
        try {
            const transfers = await this.transferModel.find();
            return (0, Response_1.response)(reply, 200, true, transfers, "transfer's list");
        }
        catch (error) {
            return this.catchMessage(reply, error);
        }
    }
    async consignacion(reply, createConsignacionDto) {
        try {
            const { cuentaDestino, monto } = createConsignacionDto;
            const destinyAccount = await this.ahorrosModel.findById({
                _id: cuentaDestino,
            });
            if (!destinyAccount) {
                return (0, Response_1.response)(reply, 404, false, '', `account not found`);
            }
            if (destinyAccount.isBlocked == true) {
                return (0, Response_1.response)(reply, 400, false, '', `accounts is blocked`);
            }
            if (destinyAccount.isDisabled === true) {
                return (0, Response_1.response)(reply, 400, false, '', `account is disabled `);
            }
            const saldo = destinyAccount.founds;
            const newConsignacion = new this.consignacionModel(Object.assign({}, createConsignacionDto));
            await destinyAccount.updateOne({ saldo: saldo + monto });
            await newConsignacion.save();
            return (0, Response_1.response)(reply, 201, true, newConsignacion, 'consignment Success');
        }
        catch (error) {
            return this.catchMessage(reply, error);
        }
    }
    async findAllConsignaciones(reply) {
        try {
            const consignaciones = await this.consignacionModel.find();
            return (0, Response_1.response)(reply, 200, true, consignaciones, "consignment's list");
        }
        catch (error) {
            return this.catchMessage(reply, error);
        }
    }
    async pagos(reply, createPagosDto) {
        try {
            const { credit, ahorros, monto, cuotas } = createPagosDto;
            const product = await this.creditModel.findOne({ _id: credit });
            const total = product.totalAPagarCadaCuota * cuotas;
            if (monto < total) {
                return (0, Response_1.response)(reply, 400, false, '', `the amount entered does not correspond to the total amount payable ${total}`);
            }
            if (ahorros) {
                const account = await this.ahorrosModel.findById({ _id: ahorros });
                if (!account) {
                    return (0, Response_1.response)(reply, 404, false, '', 'account not found');
                }
                if (account.founds < total) {
                    return (0, Response_1.response)(reply, 400, false, '', `la cuenta no tiene fondos suficientes para pagar ${total} `);
                }
                if (monto < total) {
                    return (0, Response_1.response)(reply, 400, false, '', `the amount entered does not correspond to the total amount payable ${total}`);
                }
                const newPago1 = new this.pagosModel(Object.assign({}, createPagosDto));
                await product.updateOne({ montoAPagar: product.montoAPagar - monto });
                await product.updateOne({ cuotas: product.cuotas - cuotas });
                await this.ahorrosModel.updateOne({ saldo: account.founds - monto });
                await this.pagosModel.create(newPago1);
                return (0, Response_1.response)(reply, 200, true, newPago1, 'payment success');
            }
            const newPago = new this.pagosModel(Object.assign({}, createPagosDto));
            await product.updateOne({ cuotas: product.cuotas - cuotas });
            await product.updateOne({ montoAPagar: product.montoAPagar - monto });
            await this.pagosModel.create(newPago);
            return (0, Response_1.response)(reply, 201, true, newPago.toJSON(), 'pago Success');
        }
        catch (error) {
            return this.catchMessage(reply, error);
        }
    }
    async findAllPagos(reply) {
        try {
            const pagos = await this.pagosModel.find();
            return (0, Response_1.response)(reply, 200, true, pagos, "pago's list");
        }
        catch (error) {
            return this.catchMessage(reply, error);
        }
    }
    catchMessage(reply, error) {
        return (0, Response_1.response)(reply, 500, false, '', error.message);
    }
};
MovimientosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(transferencia_entity_1.Transferencias.name)),
    __param(1, (0, mongoose_1.InjectModel)(consignacion_entity_1.Consignacion.name)),
    __param(2, (0, mongoose_1.InjectModel)(pagos_entity_1.Pagos.name)),
    __param(3, (0, mongoose_1.InjectModel)(cuenta_ahorro_entity_1.CuentaAhorro.name)),
    __param(4, (0, mongoose_1.InjectModel)(credit_entity_1.Credit.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], MovimientosService);
exports.MovimientosService = MovimientosService;
//# sourceMappingURL=movimientos.service.js.map