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
exports.Credit = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let Credit = class Credit extends mongoose_2.Document {
};
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
    }),
    __metadata("design:type", String)
], Credit.prototype, "product", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.default.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    }),
    __metadata("design:type", mongoose_2.default.Schema.Types.ObjectId)
], Credit.prototype, "client", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
    }),
    __metadata("design:type", String)
], Credit.prototype, "fiador", void 0);
__decorate([
    (0, mongoose_1.Prop)([
        {
            secure_url: { type: String },
            public_id: { type: String },
        },
    ]),
    __metadata("design:type", Array)
], Credit.prototype, "images", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Number,
        default: 0,
    }),
    __metadata("design:type", Number)
], Credit.prototype, "totalIntereses", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Number,
        default: 0,
    }),
    __metadata("design:type", Number)
], Credit.prototype, "cuotas", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Number,
        default: 0,
    }),
    __metadata("design:type", Number)
], Credit.prototype, "totalAPagarCadaCuota", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Number,
        default: 0,
    }),
    __metadata("design:type", Number)
], Credit.prototype, "montoAPagar", void 0);
Credit = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Credit);
exports.Credit = Credit;
const creditSchema = mongoose_1.SchemaFactory.createForClass(Credit);
exports.default = creditSchema;
//# sourceMappingURL=credit.entity.js.map