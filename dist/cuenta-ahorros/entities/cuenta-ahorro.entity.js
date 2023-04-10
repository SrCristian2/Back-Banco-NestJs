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
exports.CuentaAhorro = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const dist_1 = require("@nestjs/mongoose/dist");
let CuentaAhorro = class CuentaAhorro extends mongoose_1.Document {
};
__decorate([
    (0, dist_1.Prop)({
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }),
    __metadata("design:type", mongoose_1.default.Schema.Types.ObjectId)
], CuentaAhorro.prototype, "user", void 0);
__decorate([
    (0, dist_1.Prop)({
        type: Number,
        default: 0,
    }),
    __metadata("design:type", Number)
], CuentaAhorro.prototype, "founds", void 0);
__decorate([
    (0, dist_1.Prop)({
        type: String,
        default: null,
    }),
    __metadata("design:type", String)
], CuentaAhorro.prototype, "imgUrl", void 0);
__decorate([
    (0, dist_1.Prop)({
        type: String,
        required: true,
    }),
    __metadata("design:type", String)
], CuentaAhorro.prototype, "address", void 0);
__decorate([
    (0, dist_1.Prop)({
        type: Boolean,
        default: false,
    }),
    __metadata("design:type", Boolean)
], CuentaAhorro.prototype, "isDisabled", void 0);
__decorate([
    (0, dist_1.Prop)({
        type: String,
        default: null,
    }),
    __metadata("design:type", String)
], CuentaAhorro.prototype, "public_id", void 0);
__decorate([
    (0, dist_1.Prop)({
        type: Boolean,
        default: false,
    }),
    __metadata("design:type", Boolean)
], CuentaAhorro.prototype, "isBlocked", void 0);
CuentaAhorro = __decorate([
    (0, mongoose_2.Schema)({
        timestamps: true,
        methods: {
            setImg(secure_url, public_id) {
                this.imgUrl = secure_url;
                this.public_id = public_id;
            },
        },
    })
], CuentaAhorro);
exports.CuentaAhorro = CuentaAhorro;
const ahorrosSchema = dist_1.SchemaFactory.createForClass(CuentaAhorro);
exports.default = ahorrosSchema;
//# sourceMappingURL=cuenta-ahorro.entity.js.map