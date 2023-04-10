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
exports.CuentaAhorrosService = void 0;
const common_1 = require("@nestjs/common");
const Response_1 = require("../comun/helpers/Response");
const mongoose_1 = require("@nestjs/mongoose");
const cuenta_ahorro_entity_1 = require("./entities/cuenta-ahorro.entity");
const mongoose_2 = require("mongoose");
const user_entity_1 = require("../user/entities/user.entity");
const UploadImg_1 = require("../comun/helpers/UploadImg");
let CuentaAhorrosService = class CuentaAhorrosService {
    constructor(ahorrosModel, userModel) {
        this.ahorrosModel = ahorrosModel;
        this.userModel = userModel;
    }
    async create(reply, file, createCuentaAhorroDto) {
        try {
            const { user } = createCuentaAhorroDto;
            const cliente = await this.userModel.findById({ _id: user });
            if (!cliente) {
                return (0, Response_1.response)(reply, 404, false, '', `the client does not exist`);
            }
            const newCuenta = new this.ahorrosModel(Object.assign({}, createCuentaAhorroDto));
            if (file) {
                const { secure_url, public_id } = await (0, UploadImg_1.subirImagenACloudinary)(file);
                newCuenta.setImg(secure_url, public_id);
            }
            await newCuenta.save();
            const cuenta = await this.ahorrosModel
                .findById({ _id: newCuenta._id })
                .populate('user', { name: 1, email: 1, role: 1 });
            return (0, Response_1.response)(reply, 201, true, cuenta, 'account created');
        }
        catch (error) {
            return this.catchMessage(reply, error);
        }
    }
    async findAll(reply) {
        try {
            const cuentas = await this.ahorrosModel.find();
            return (0, Response_1.response)(reply, 200, true, cuentas, 'lista de cuentas');
        }
        catch (error) {
            return this.catchMessage(reply, error);
        }
    }
    async findOne(reply, id) {
        try {
            const ahorros = await this.ahorrosModel.findById({ _id: id });
            const user = await this.userModel.findById({ _id: ahorros.user });
            if (!ahorros) {
                return (0, Response_1.response)(reply, 404, false, '', `the account does not exist`);
            }
            return (0, Response_1.response)(reply, 200, true, Object.assign(Object.assign({}, ahorros.toJSON()), { user: user.name }), 'account found');
        }
        catch (error) {
            return this.catchMessage(reply, error);
        }
    }
    async blockAccount(reply, id, updateCuentaDto) {
        try {
            const ahorros = await this.ahorrosModel.findById(id);
            if (!ahorros) {
                return (0, Response_1.response)(reply, 404, false, '', 'Account does not exist');
            }
            if (ahorros.isDisabled === true) {
                return (0, Response_1.response)(reply, 400, false, '', "account can't be block because account is disabled");
            }
            if (updateCuentaDto.isBlocked) {
                await ahorros.updateOne({ isBlocked: updateCuentaDto.isBlocked });
                return (0, Response_1.response)(reply, 200, true, '', 'cuenta desbloqueada');
            }
            else {
                if (ahorros.isBlocked === true) {
                    return (0, Response_1.response)(reply, 400, false, '', 'account already block');
                }
            }
            await ahorros.updateOne({ isBlocked: true });
            return (0, Response_1.response)(reply, 200, true, '', 'account succefully block');
        }
        catch (error) {
            return this.catchMessage(reply, error);
        }
    }
    async disableAccount(reply, id, updateCuentaDto) {
        try {
            const ahorros = await this.ahorrosModel.findById(id);
            if (!ahorros) {
                return (0, Response_1.response)(reply, 404, false, '', 'Account does not exist');
            }
            if (updateCuentaDto.isDisabled) {
                await ahorros.updateOne({ isDisabled: updateCuentaDto.isDisabled });
                return (0, Response_1.response)(reply, 200, true, '', 'cuenta desbloqueada');
            }
            else {
                if (ahorros.isDisabled === true) {
                    return (0, Response_1.response)(reply, 400, false, '', 'account alredy disabled');
                }
            }
            await ahorros.updateOne({ isDisabled: true });
            return (0, Response_1.response)(reply, 200, true, '', 'Account disabled successfully');
        }
        catch (error) {
            return this.catchMessage(reply, error);
        }
    }
    catchMessage(reply, error) {
        return (0, Response_1.response)(reply, 500, false, '', error.message);
    }
};
CuentaAhorrosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(cuenta_ahorro_entity_1.CuentaAhorro.name)),
    __param(1, (0, mongoose_1.InjectModel)(user_entity_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], CuentaAhorrosService);
exports.CuentaAhorrosService = CuentaAhorrosService;
//# sourceMappingURL=cuenta-ahorros.service.js.map