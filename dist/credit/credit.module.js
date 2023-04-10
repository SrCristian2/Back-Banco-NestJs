"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditModule = void 0;
const common_1 = require("@nestjs/common");
const credit_service_1 = require("./credit.service");
const credit_controller_1 = require("./credit.controller");
const mongoose_1 = require("@nestjs/mongoose");
const credit_entity_1 = require("./entities/credit.entity");
const user_module_1 = require("../user/user.module");
const user_entity_1 = require("../user/entities/user.entity");
const config_entity_1 = require("../configs/entities/config.entity");
let CreditModule = class CreditModule {
};
CreditModule = __decorate([
    (0, common_1.Module)({
        controllers: [credit_controller_1.CreditController],
        providers: [credit_service_1.CreditService],
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: credit_entity_1.Credit.name,
                    schema: credit_entity_1.default,
                },
                {
                    name: user_entity_1.User.name,
                    schema: user_entity_1.default,
                },
                {
                    name: config_entity_1.Config.name,
                    schema: config_entity_1.default,
                },
            ]),
            user_module_1.UserModule,
        ],
    })
], CreditModule);
exports.CreditModule = CreditModule;
//# sourceMappingURL=credit.module.js.map