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
exports.CreditService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const Response_1 = require("../comun/helpers/Response");
const UploadImg_1 = require("../comun/helpers/UploadImg");
const config_entity_1 = require("../configs/entities/config.entity");
const user_entity_1 = require("../user/entities/user.entity");
const credit_entity_1 = require("./entities/credit.entity");
let CreditService = class CreditService {
    constructor(creditModel, userModel, configModel) {
        this.creditModel = creditModel;
        this.userModel = userModel;
        this.configModel = configModel;
    }
    async create(reply, files, createCreditDto) {
        try {
            const { client, cuotas, montoAPagar } = createCreditDto;
            const iva = await this.configModel.find();
            const porcentaje = iva[0].porcentajeCreditoAnual;
            const valorIvaDelCredito = (montoAPagar * porcentaje) / 100;
            const montoTotal = valorIvaDelCredito + montoAPagar;
            const cuota = montoTotal / cuotas;
            const cliente = await this.userModel.findById({ _id: client });
            if (!cliente) {
                return (0, Response_1.response)(reply, 404, false, '', `the client does not exist`);
            }
            const newCredit = new this.creditModel(Object.assign(Object.assign({}, createCreditDto), { totalAPagarCadaCuota: cuota.toFixed(0), montoAPagar: montoTotal.toFixed(0), totalIntereses: valorIvaDelCredito.toFixed(0) }));
            if (files.length > 0) {
                for (const file of files) {
                    const { secure_url, public_id } = await (0, UploadImg_1.subirImagenACloudinary)(file);
                    newCredit.images.push({ secure_url, public_id });
                }
            }
            await this.creditModel.create(newCredit);
            return (0, Response_1.response)(reply, 201, true, newCredit, 'credit has been created successfully');
        }
        catch (error) {
            return this.catchMessage(reply, error);
        }
    }
    async findAll(reply) {
        try {
            const credits = await this.creditModel
                .find()
                .populate('user', { name: 1, email: 1, role: 1 });
            return (0, Response_1.response)(reply, 200, true, credits, 'lista de creditos');
        }
        catch (error) {
            return this.catchMessage(reply, error);
        }
    }
    async findOne(reply, id) {
        try {
            const credit = await this.creditModel
                .findById({ _id: id })
                .populate('user', { name: 1, email: 1, role: 1 });
            if (!credit) {
                return (0, Response_1.response)(reply, 404, false, '', `the credit does not exist`);
            }
            return (0, Response_1.response)(reply, 200, true, credit, 'Credit found');
        }
        catch (error) {
            return this.catchMessage(reply, error);
        }
    }
    catchMessage(reply, error) {
        return (0, Response_1.response)(reply, 500, false, '', error.message);
    }
};
CreditService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(credit_entity_1.Credit.name)),
    __param(1, (0, mongoose_1.InjectModel)(user_entity_1.User.name)),
    __param(2, (0, mongoose_1.InjectModel)(config_entity_1.Config.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], CreditService);
exports.CreditService = CreditService;
//# sourceMappingURL=credit.service.js.map