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
exports.EstadisticasController = void 0;
const common_1 = require("@nestjs/common");
const estadisticas_service_1 = require("./estadisticas.service");
const auth_decorator_1 = require("../user/decorators/auth.decorator");
const valid_roles_1 = require("../user/interfaces/valid-roles");
let EstadisticasController = class EstadisticasController {
    constructor(estadisticasService) {
        this.estadisticasService = estadisticasService;
    }
    create(reply) {
        return this.estadisticasService.create(reply);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, auth_decorator_1.Auth)(valid_roles_1.validRoles.admin),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], EstadisticasController.prototype, "create", null);
EstadisticasController = __decorate([
    (0, common_1.Controller)('estadisticas'),
    __metadata("design:paramtypes", [estadisticas_service_1.EstadisticasService])
], EstadisticasController);
exports.EstadisticasController = EstadisticasController;
//# sourceMappingURL=estadisticas.controller.js.map