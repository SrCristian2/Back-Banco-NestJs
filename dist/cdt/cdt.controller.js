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
exports.CdtController = void 0;
const common_1 = require("@nestjs/common");
const fastify_file_interceptor_1 = require("fastify-file-interceptor");
const fileFilter_helper_1 = require("../comun/helpers/fileFilter.helper");
const fileName_fileFilter_1 = require("../comun/helpers/fileName.fileFilter");
const cdt_service_1 = require("./cdt.service");
const create_cdt_dto_1 = require("./dto/create-cdt.dto");
const simulacion_cdt_dto_1 = require("./dto/simulacion-cdt.dto");
const auth_decorator_1 = require("../user/decorators/auth.decorator");
const valid_roles_1 = require("../user/interfaces/valid-roles");
let CdtController = class CdtController {
    constructor(cdtService) {
        this.cdtService = cdtService;
    }
    create(reply, files, createCdtDto) {
        return this.cdtService.create(reply, files, createCdtDto);
    }
    findAll(reply) {
        return this.cdtService.findAll(reply);
    }
    findOne(reply, id) {
        return this.cdtService.findOne(reply, id);
    }
    simulacion(reply, simulacionCdtDto) {
        return this.cdtService.simulacion(reply, simulacionCdtDto);
    }
};
__decorate([
    (0, common_1.Post)('create'),
    (0, auth_decorator_1.Auth)(valid_roles_1.validRoles.admin, valid_roles_1.validRoles.employee),
    (0, common_1.UseInterceptors)((0, fastify_file_interceptor_1.FilesFastifyInterceptor)('images', 3, {
        fileFilter: fileFilter_helper_1.fileFilter,
        storage: (0, fastify_file_interceptor_1.diskStorage)({
            destination: './uploads',
            filename: fileName_fileFilter_1.fileName,
        }),
    })),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.UploadedFiles)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Array, create_cdt_dto_1.CreateCdtDto]),
    __metadata("design:returntype", void 0)
], CdtController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, auth_decorator_1.Auth)(valid_roles_1.validRoles.admin, valid_roles_1.validRoles.employee),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CdtController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, auth_decorator_1.Auth)(valid_roles_1.validRoles.client),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], CdtController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)('simulacion'),
    (0, auth_decorator_1.Auth)(valid_roles_1.validRoles.client),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, simulacion_cdt_dto_1.SimulacionCdtDto]),
    __metadata("design:returntype", void 0)
], CdtController.prototype, "simulacion", null);
CdtController = __decorate([
    (0, common_1.Controller)('cdt'),
    __metadata("design:paramtypes", [cdt_service_1.CdtService])
], CdtController);
exports.CdtController = CdtController;
//# sourceMappingURL=cdt.controller.js.map