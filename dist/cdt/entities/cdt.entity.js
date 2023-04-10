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
exports.Cdt = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let Cdt = class Cdt extends mongoose_1.Document {
};
__decorate([
    (0, mongoose_2.Prop)({
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: true,
    }),
    __metadata("design:type", mongoose_1.default.Schema.Types.ObjectId)
], Cdt.prototype, "client", void 0);
__decorate([
    (0, mongoose_2.Prop)({
        type: String,
        required: true,
    }),
    __metadata("design:type", String)
], Cdt.prototype, "nameBeneficiary", void 0);
__decorate([
    (0, mongoose_2.Prop)([
        {
            secure_url: { type: String },
            public_id: { type: String },
        },
    ]),
    __metadata("design:type", Array)
], Cdt.prototype, "images", void 0);
__decorate([
    (0, mongoose_2.Prop)({
        type: String,
        required: true,
    }),
    __metadata("design:type", String)
], Cdt.prototype, "contact", void 0);
__decorate([
    (0, mongoose_2.Prop)({
        type: Number,
        min: 0,
        max: 747,
    }),
    __metadata("design:type", Number)
], Cdt.prototype, "PlazoDias", void 0);
__decorate([
    (0, mongoose_2.Prop)({
        type: Number,
        default: 0,
    }),
    __metadata("design:type", Number)
], Cdt.prototype, "montoDeposito", void 0);
__decorate([
    (0, mongoose_2.Prop)({
        type: Number,
        default: 0,
    }),
    __metadata("design:type", Number)
], Cdt.prototype, "totalGanancia", void 0);
__decorate([
    (0, mongoose_2.Prop)({
        type: Number,
        default: 0,
    }),
    __metadata("design:type", Number)
], Cdt.prototype, "gananciaTotal", void 0);
Cdt = __decorate([
    (0, mongoose_2.Schema)({
        timestamps: true,
    })
], Cdt);
exports.Cdt = Cdt;
const cdtSchema = mongoose_2.SchemaFactory.createForClass(Cdt);
exports.default = cdtSchema;
//# sourceMappingURL=cdt.entity.js.map