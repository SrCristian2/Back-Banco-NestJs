"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CuentaAhorrosModule = void 0;
const common_1 = require("@nestjs/common");
const cuenta_ahorros_service_1 = require("./cuenta-ahorros.service");
const cuenta_ahorros_controller_1 = require("./cuenta-ahorros.controller");
const mongoose_1 = require("@nestjs/mongoose");
const cuenta_ahorro_entity_1 = require("./entities/cuenta-ahorro.entity");
const user_entity_1 = require("../user/entities/user.entity");
const user_module_1 = require("../user/user.module");
let CuentaAhorrosModule = class CuentaAhorrosModule {
};
CuentaAhorrosModule = __decorate([
    (0, common_1.Module)({
        controllers: [cuenta_ahorros_controller_1.CuentaAhorrosController],
        providers: [cuenta_ahorros_service_1.CuentaAhorrosService],
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: cuenta_ahorro_entity_1.CuentaAhorro.name,
                    schema: cuenta_ahorro_entity_1.default,
                },
                {
                    name: user_entity_1.User.name,
                    schema: user_entity_1.default,
                },
            ]),
            user_module_1.UserModule,
        ],
    })
], CuentaAhorrosModule);
exports.CuentaAhorrosModule = CuentaAhorrosModule;
//# sourceMappingURL=cuenta-ahorros.module.js.map