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
exports.CdtService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const Response_1 = require("../comun/helpers/Response");
const UploadImg_1 = require("../comun/helpers/UploadImg");
const config_entity_1 = require("../configs/entities/config.entity");
const user_entity_1 = require("../user/entities/user.entity");
const cdt_entity_1 = require("./entities/cdt.entity");
let CdtService = class CdtService {
    constructor(cdtModel, userModel, configModel) {
        this.cdtModel = cdtModel;
        this.userModel = userModel;
        this.configModel = configModel;
    }
    async create(reply, files, createCdtDto) {
        try {
            const { client, montoDeposito, PlazoDias } = createCdtDto;
            const cliente = await this.userModel.findById({ _id: client });
            const iva = await this.configModel.find();
            let interes = iva[0].tasaInteresCdt;
            const retencion = iva[0].retencion;
            let meses = 0;
            if (!cliente) {
                return (0, Response_1.response)(reply, 404, false, '', 'client not found');
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
            const tasaDeRetorno = (montoDeposito * interes) / 100;
            const retorno = tasaDeRetorno * meses;
            const retencion1 = (retorno * retencion) / 100;
            const dineroTotal = retorno + montoDeposito - retencion1;
            const cdt = new this.cdtModel(Object.assign(Object.assign({}, createCdtDto), { totalGanancia: retorno.toFixed(0), retencion: retencion1.toFixed(0), gananciaTotal: dineroTotal.toFixed(0) }));
            if (files.length > 0) {
                for (const file of files) {
                    const { secure_url, public_id } = await (0, UploadImg_1.subirImagenACloudinary)(file);
                    cdt.images.push({ secure_url, public_id });
                }
            }
            await cdt.save();
            return (0, Response_1.response)(reply, 201, true, cdt.toJSON(), 'cdt created successfully');
        }
        catch (error) {
            return this.catchMessage(reply, error);
        }
    }
    async findAll(reply) {
        try {
            const cdts = await this.cdtModel.find();
            return (0, Response_1.response)(reply, 200, true, cdts, 'lista de cdts');
        }
        catch (error) {
            return this.catchMessage(reply, error);
        }
    }
    async findOne(reply, id) {
        try {
            const cdt = await this.cdtModel.findById(id).populate('user');
            if (!cdt) {
                return (0, Response_1.response)(reply, 404, false, '', 'cdt not found');
            }
            return (0, Response_1.response)(reply, 200, true, cdt, 'cdt list successfully');
        }
        catch (error) {
            return this.catchMessage(reply, error);
        }
    }
    async simulacion(reply, simulacionCdtDto) {
        try {
            const { montoDeposito, plazoDias } = simulacionCdtDto;
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
            const tasaDeRetorno = (montoDeposito * interes) / 100;
            const retorno = tasaDeRetorno * meses;
            const retencion1 = (retorno * retencion) / 100;
            const dineroTotal = retorno + montoDeposito - retencion1;
            (0, Response_1.response)(reply, 201, true, Object.assign(Object.assign({}, simulacionCdtDto), { retorno: retorno.toFixed(0), retencion1: retencion1.toFixed(0), dineroTotal: dineroTotal.toFixed(0) }), 'cdt simulator successfully');
        }
        catch (error) {
            return this.catchMessage(reply, error);
        }
    }
    catchMessage(reply, error) {
        return (0, Response_1.response)(reply, 500, false, '', error.message);
    }
};
CdtService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(cdt_entity_1.Cdt.name)),
    __param(1, (0, mongoose_1.InjectModel)(user_entity_1.User.name)),
    __param(2, (0, mongoose_1.InjectModel)(config_entity_1.Config.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], CdtService);
exports.CdtService = CdtService;
//# sourceMappingURL=cdt.service.js.map