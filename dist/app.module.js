"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const mongoose_1 = require("@nestjs/mongoose");
const user_module_1 = require("./user/user.module");
const cuenta_ahorros_module_1 = require("./cuenta-ahorros/cuenta-ahorros.module");
const cdt_module_1 = require("./cdt/cdt.module");
const config_module_1 = require("./configs/config.module");
const credit_module_1 = require("./credit/credit.module");
const movimientos_module_1 = require("./movimientos/movimientos.module");
const estadisticas_module_1 = require("./estadisticas/estadisticas.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            mongoose_1.MongooseModule.forRoot(process.env.MONGO_URI),
            user_module_1.UserModule,
            cuenta_ahorros_module_1.CuentaAhorrosModule,
            cdt_module_1.CdtModule,
            config_module_1.ConfigsModule,
            credit_module_1.CreditModule,
            movimientos_module_1.MovimientosModule,
            estadisticas_module_1.EstadisticasModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map