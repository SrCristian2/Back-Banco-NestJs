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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const Response_1 = require("../comun/helpers/Response");
const mongoose_1 = require("@nestjs/mongoose");
const user_entity_1 = require("./entities/user.entity");
const mongoose_2 = require("mongoose");
const jwt_1 = require("@nestjs/jwt");
let UserService = class UserService {
    constructor(userModel, jwtService) {
        this.userModel = userModel;
        this.jwtService = jwtService;
    }
    async register(reply, createUserDto) {
        try {
            const { email } = createUserDto;
            const user = await this.userModel.findOne({ email });
            if (user) {
                return (0, Response_1.response)(reply, 409, false, '', 'el email ya existe en otro registro');
            }
            const newUser = await this.userModel.create(createUserDto);
            const token = this.jwtService.sign({ _id: newUser._id });
            (0, Response_1.response)(reply, 201, true, Object.assign(Object.assign({}, newUser.toJSON()), { token }), 'Usuario creado');
        }
        catch (error) {
            return this.catchMessage(reply, error);
        }
    }
    async login(reply, loginUserDto) {
        try {
            const { password, email } = loginUserDto;
            const user = await this.userModel.findOne({ email }).select('+password');
            if (user && user.matchPassword(password)) {
                const token = this.jwtService.sign({ _id: user._id });
                return (0, Response_1.response)(reply, 200, true, Object.assign(Object.assign({}, user.toJSON()), { password: null, token }), 'Bienvenido');
            }
            return (0, Response_1.response)(reply, 400, false, '', 'email o password incorrectos');
        }
        catch (error) {
            return this.catchMessage(reply, error);
        }
    }
    catchMessage(reply, error) {
        return (0, Response_1.response)(reply, 500, false, '', error.message);
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_entity_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        jwt_1.JwtService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map