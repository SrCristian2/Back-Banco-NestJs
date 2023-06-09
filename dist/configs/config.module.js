"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigsModule = void 0;
const common_1 = require("@nestjs/common");
const config_service_1 = require("./config.service");
const config_controller_1 = require("./config.controller");
const mongoose_1 = require("@nestjs/mongoose");
const config_entity_1 = require("./entities/config.entity");
const user_module_1 = require("../user/user.module");
let ConfigsModule = class ConfigsModule {
};
ConfigsModule = __decorate([
    (0, common_1.Module)({
        controllers: [config_controller_1.ConfigController],
        providers: [config_service_1.ConfigService],
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: config_entity_1.Config.name,
                    schema: config_entity_1.default,
                },
            ]),
            user_module_1.UserModule,
        ],
    })
], ConfigsModule);
exports.ConfigsModule = ConfigsModule;
//# sourceMappingURL=config.module.js.map