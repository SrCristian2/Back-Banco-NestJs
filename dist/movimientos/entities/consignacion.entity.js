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
exports.Consignacion = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let Consignacion = class Consignacion extends mongoose_2.Document {
};
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.default.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    }),
    __metadata("design:type", mongoose_2.default.Schema.Types.ObjectId)
], Consignacion.prototype, "cuentaDestino", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Number,
        required: true,
    }),
    __metadata("design:type", Number)
], Consignacion.prototype, "monto", void 0);
Consignacion = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Consignacion);
exports.Consignacion = Consignacion;
const consignacionSchema = mongoose_1.SchemaFactory.createForClass(Consignacion);
exports.default = consignacionSchema;
//# sourceMappingURL=consignacion.entity.js.map