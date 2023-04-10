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
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const dist_1 = require("@nestjs/mongoose/dist");
const bcrypt_1 = require("bcrypt");
let User = class User extends mongoose_1.Document {
};
__decorate([
    (0, dist_1.Prop)({
        type: String,
        required: true,
    }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, dist_1.Prop)({
        type: String,
        required: true,
    }),
    __metadata("design:type", String)
], User.prototype, "lastname", void 0);
__decorate([
    (0, dist_1.Prop)({
        type: String,
        unique: true,
        required: true,
    }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, dist_1.Prop)({
        type: String,
        select: false,
        required: true,
    }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, dist_1.Prop)({
        type: String,
        enum: ['client', 'employee', 'admin'],
        default: 'client',
    }),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
User = __decorate([
    (0, mongoose_2.Schema)({
        timestamps: true,
        methods: {
            matchPassword(password) {
                return (0, bcrypt_1.compareSync)(password, this.password);
            },
        },
    })
], User);
exports.User = User;
const userSchema = dist_1.SchemaFactory.createForClass(User);
userSchema.pre('save', function () {
    this.password = (0, bcrypt_1.hashSync)(this.password, 10);
});
exports.default = userSchema;
//# sourceMappingURL=user.entity.js.map