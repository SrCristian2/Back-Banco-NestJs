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
exports.MovimientosController = void 0;
const common_1 = require("@nestjs/common");
const movimientos_service_1 = require("./movimientos.service");
const create_transferencia_dto_1 = require("./dto/create-transferencia.dto");
const decorators_1 = require("@nestjs/common/decorators");
const create_consignacion_dto_1 = require("./dto/create-consignacion.dto");
const create_pagos_dto_1 = require("./dto/create-pagos.dto");
const auth_decorator_1 = require("../user/decorators/auth.decorator");
const valid_roles_1 = require("../user/interfaces/valid-roles");
let MovimientosController = class MovimientosController {
    constructor(movimientosService) {
        this.movimientosService = movimientosService;
    }
    transferencia(reply, createTransferenciaDto) {
        return this.movimientosService.transferencia(reply, createTransferenciaDto);
    }
    findAll(reply) {
        return this.movimientosService.findAllTransfers(reply);
    }
    consignacion(reply, createConsignacionDto) {
        return this.movimientosService.consignacion(reply, createConsignacionDto);
    }
    findAllConsignacion(reply) {
        return this.movimientosService.findAllConsignaciones(reply);
    }
    pagos(reply, createPagosDto) {
        return this.movimientosService.pagos(reply, createPagosDto);
    }
    findAllPagos(reply) {
        return this.movimientosService.findAllPagos(reply);
    }
};
__decorate([
    (0, common_1.Post)('transfer/create'),
    (0, auth_decorator_1.Auth)(valid_roles_1.validRoles.client),
    __param(0, (0, decorators_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_transferencia_dto_1.CreateTransferenciaDto]),
    __metadata("design:returntype", void 0)
], MovimientosController.prototype, "transferencia", null);
__decorate([
    (0, common_1.Get)('transfer'),
    (0, auth_decorator_1.Auth)(valid_roles_1.validRoles.client),
    __param(0, (0, decorators_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MovimientosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('consignacion/create'),
    (0, auth_decorator_1.Auth)(valid_roles_1.validRoles.client),
    __param(0, (0, decorators_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_consignacion_dto_1.CreateConsignacionDto]),
    __metadata("design:returntype", void 0)
], MovimientosController.prototype, "consignacion", null);
__decorate([
    (0, common_1.Get)('consignacion'),
    (0, auth_decorator_1.Auth)(valid_roles_1.validRoles.client),
    __param(0, (0, decorators_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MovimientosController.prototype, "findAllConsignacion", null);
__decorate([
    (0, common_1.Post)('pagos/create'),
    (0, auth_decorator_1.Auth)(valid_roles_1.validRoles.client),
    __param(0, (0, decorators_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_pagos_dto_1.CreatePagosDto]),
    __metadata("design:returntype", void 0)
], MovimientosController.prototype, "pagos", null);
__decorate([
    (0, common_1.Get)('pagos'),
    (0, auth_decorator_1.Auth)(valid_roles_1.validRoles.client),
    __param(0, (0, decorators_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MovimientosController.prototype, "findAllPagos", null);
MovimientosController = __decorate([
    (0, common_1.Controller)('movimientos'),
    __metadata("design:paramtypes", [movimientos_service_1.MovimientosService])
], MovimientosController);
exports.MovimientosController = MovimientosController;
//# sourceMappingURL=movimientos.controller.js.map