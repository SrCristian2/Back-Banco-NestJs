"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstadisticasModule = void 0;
const common_1 = require("@nestjs/common");
const estadisticas_service_1 = require("./estadisticas.service");
const estadisticas_controller_1 = require("./estadisticas.controller");
const mongoose_1 = require("@nestjs/mongoose");
const estadistica_entity_1 = require("./entities/estadistica.entity");
const cuenta_ahorro_entity_1 = require("../cuenta-ahorros/entities/cuenta-ahorro.entity");
const cdt_entity_1 = require("../cdt/entities/cdt.entity");
const credit_entity_1 = require("../credit/entities/credit.entity");
const user_module_1 = require("../user/user.module");
let EstadisticasModule = class EstadisticasModule {
};
EstadisticasModule = __decorate([
    (0, common_1.Module)({
        controllers: [estadisticas_controller_1.EstadisticasController],
        providers: [estadisticas_service_1.EstadisticasService],
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: estadistica_entity_1.Estadistica.name,
                    schema: estadistica_entity_1.default,
                },
                {
                    name: cuenta_ahorro_entity_1.CuentaAhorro.name,
                    schema: cuenta_ahorro_entity_1.default,
                },
                {
                    name: cdt_entity_1.Cdt.name,
                    schema: cdt_entity_1.default,
                },
                {
                    name: credit_entity_1.Credit.name,
                    schema: credit_entity_1.default,
                },
            ]),
            user_module_1.UserModule,
        ],
    })
], EstadisticasModule);
exports.EstadisticasModule = EstadisticasModule;
//# sourceMappingURL=estadisticas.module.js.map