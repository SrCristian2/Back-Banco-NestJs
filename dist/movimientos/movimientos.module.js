"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovimientosModule = void 0;
const common_1 = require("@nestjs/common");
const movimientos_service_1 = require("./movimientos.service");
const movimientos_controller_1 = require("./movimientos.controller");
const mongoose_1 = require("@nestjs/mongoose");
const transferencia_entity_1 = require("./entities/transferencia.entity");
const user_module_1 = require("../user/user.module");
const consignacion_entity_1 = require("./entities/consignacion.entity");
const pagos_entity_1 = require("./entities/pagos.entity");
const credit_entity_1 = require("../credit/entities/credit.entity");
const cuenta_ahorro_entity_1 = require("../cuenta-ahorros/entities/cuenta-ahorro.entity");
let MovimientosModule = class MovimientosModule {
};
MovimientosModule = __decorate([
    (0, common_1.Module)({
        controllers: [movimientos_controller_1.MovimientosController],
        providers: [movimientos_service_1.MovimientosService],
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: transferencia_entity_1.Transferencias.name,
                    schema: transferencia_entity_1.default,
                },
                {
                    name: consignacion_entity_1.Consignacion.name,
                    schema: consignacion_entity_1.default,
                },
                {
                    name: pagos_entity_1.Pagos.name,
                    schema: pagos_entity_1.default,
                },
                {
                    name: credit_entity_1.Credit.name,
                    schema: credit_entity_1.default,
                },
                {
                    name: cuenta_ahorro_entity_1.CuentaAhorro.name,
                    schema: cuenta_ahorro_entity_1.default,
                },
            ]),
            user_module_1.UserModule,
        ],
    })
], MovimientosModule);
exports.MovimientosModule = MovimientosModule;
//# sourceMappingURL=movimientos.module.js.map