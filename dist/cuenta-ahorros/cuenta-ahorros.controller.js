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
exports.CuentaAhorrosController = void 0;
const common_1 = require("@nestjs/common");
const cuenta_ahorros_service_1 = require("./cuenta-ahorros.service");
const create_cuenta_ahorro_dto_1 = require("./dto/create-cuenta-ahorro.dto");
const fastify_file_interceptor_1 = require("fastify-file-interceptor");
const fileFilter_helper_1 = require("../comun/helpers/fileFilter.helper");
const fileName_fileFilter_1 = require("../comun/helpers/fileName.fileFilter");
const update_cuenta_ahorro_dto_1 = require("./dto/update-cuenta-ahorro.dto");
const auth_decorator_1 = require("../user/decorators/auth.decorator");
const valid_roles_1 = require("../user/interfaces/valid-roles");
let CuentaAhorrosController = class CuentaAhorrosController {
    constructor(cuentaAhorrosService) {
        this.cuentaAhorrosService = cuentaAhorrosService;
    }
    create(reply, file, createCuentaAhorroDto) {
        return this.cuentaAhorrosService.create(reply, file, createCuentaAhorroDto);
    }
    findAll(reply) {
        return this.cuentaAhorrosService.findAll(reply);
    }
    findOne(reply, id) {
        return this.cuentaAhorrosService.findOne(reply, id);
    }
    blockAccount(reply, id, updateCuentaDto) {
        return this.cuentaAhorrosService.blockAccount(reply, id, updateCuentaDto);
    }
    disableAccount(reply, id, updateCuentaDto) {
        return this.cuentaAhorrosService.disableAccount(reply, id, updateCuentaDto);
    }
};
__decorate([
    (0, common_1.Post)('create'),
    (0, auth_decorator_1.Auth)(valid_roles_1.validRoles.employee, valid_roles_1.validRoles.admin),
    (0, common_1.UseInterceptors)((0, fastify_file_interceptor_1.FileFastifyInterceptor)('img', {
        fileFilter: fileFilter_helper_1.fileFilter,
        storage: (0, fastify_file_interceptor_1.diskStorage)({
            destination: './uploads',
            filename: fileName_fileFilter_1.fileName,
        }),
    })),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.UploadedFile)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, create_cuenta_ahorro_dto_1.CreateCuentaAhorroDto]),
    __metadata("design:returntype", void 0)
], CuentaAhorrosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, auth_decorator_1.Auth)(valid_roles_1.validRoles.employee, valid_roles_1.validRoles.admin),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CuentaAhorrosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], CuentaAhorrosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)('block/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, update_cuenta_ahorro_dto_1.UpdateCuentaAhorroDto]),
    __metadata("design:returntype", void 0)
], CuentaAhorrosController.prototype, "blockAccount", null);
__decorate([
    (0, common_1.Put)('disabled/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, update_cuenta_ahorro_dto_1.UpdateCuentaAhorroDto]),
    __metadata("design:returntype", void 0)
], CuentaAhorrosController.prototype, "disableAccount", null);
CuentaAhorrosController = __decorate([
    (0, common_1.Controller)('ahorros'),
    __metadata("design:paramtypes", [cuenta_ahorros_service_1.CuentaAhorrosService])
], CuentaAhorrosController);
exports.CuentaAhorrosController = CuentaAhorrosController;
//# sourceMappingURL=cuenta-ahorros.controller.js.map