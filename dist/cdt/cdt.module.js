"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CdtModule = void 0;
const common_1 = require("@nestjs/common");
const cdt_service_1 = require("./cdt.service");
const cdt_controller_1 = require("./cdt.controller");
const mongoose_1 = require("@nestjs/mongoose");
const user_entity_1 = require("../user/entities/user.entity");
const cdt_entity_1 = require("./entities/cdt.entity");
const user_module_1 = require("../user/user.module");
const config_entity_1 = require("../configs/entities/config.entity");
let CdtModule = class CdtModule {
};
CdtModule = __decorate([
    (0, common_1.Module)({
        controllers: [cdt_controller_1.CdtController],
        providers: [cdt_service_1.CdtService],
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: cdt_entity_1.Cdt.name,
                    schema: cdt_entity_1.default,
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
], CdtModule);
exports.CdtModule = CdtModule;
//# sourceMappingURL=cdt.module.js.map