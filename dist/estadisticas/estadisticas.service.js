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
exports.EstadisticasService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const cdt_entity_1 = require("../cdt/entities/cdt.entity");
const Response_1 = require("../comun/helpers/Response");
const credit_entity_1 = require("../credit/entities/credit.entity");
const cuenta_ahorro_entity_1 = require("../cuenta-ahorros/entities/cuenta-ahorro.entity");
const estadistica_entity_1 = require("./entities/estadistica.entity");
let EstadisticasService = class EstadisticasService {
    constructor(estadisticaModel, ahorrosModel, cdtModel, creditModel) {
        this.estadisticaModel = estadisticaModel;
        this.ahorrosModel = ahorrosModel;
        this.cdtModel = cdtModel;
        this.creditModel = creditModel;
    }
    async create(reply) {
        try {
            const accounts = await this.ahorrosModel.find();
            const credits = await this.creditModel.find();
            const blockedAccounts = accounts.filter((item) => item.isBlocked === true);
            const disabledAccounts = accounts.filter((item) => item.isDisabled === true);
            disabledAccounts.map((item) => {
                item.founds = 0;
            });
            const ganancia = credits.reduce((acc, account) => acc + account.totalIntereses, 0);
            const ahorros = accounts.reduce((acc, account) => acc + account.founds, 0);
            const newEstadistica = new this.estadisticaModel({
                cuentasBancarias: accounts.length,
                ahorrosTotales: ahorros,
                cuentasBloqueadas: blockedAccounts.length,
                gananciasTotales: ganancia,
                creditos: credits.length,
                cuentasDeshabilitadas: disabledAccounts.length,
            });
            await newEstadistica.save();
            return (0, Response_1.response)(reply, 200, true, newEstadistica, 'estadisticas');
        }
        catch (error) {
            return this.catchMessage(reply, error);
        }
    }
    catchMessage(reply, error) {
        return (0, Response_1.response)(reply, 500, false, '', error.message);
    }
};
EstadisticasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(estadistica_entity_1.Estadistica.name)),
    __param(1, (0, mongoose_1.InjectModel)(cuenta_ahorro_entity_1.CuentaAhorro.name)),
    __param(2, (0, mongoose_1.InjectModel)(cdt_entity_1.Cdt.name)),
    __param(3, (0, mongoose_1.InjectModel)(credit_entity_1.Credit.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], EstadisticasService);
exports.EstadisticasService = EstadisticasService;
//# sourceMappingURL=estadisticas.service.js.map