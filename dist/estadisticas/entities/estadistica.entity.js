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
exports.Estadistica = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let Estadistica = class Estadistica extends mongoose_1.Document {
};
__decorate([
    (0, mongoose_2.Prop)({
        type: Number,
        default: 0,
    }),
    __metadata("design:type", Number)
], Estadistica.prototype, "cuentasBancarias", void 0);
__decorate([
    (0, mongoose_2.Prop)({
        type: Number,
        default: 0,
    }),
    __metadata("design:type", Number)
], Estadistica.prototype, "ahorrosTotales", void 0);
__decorate([
    (0, mongoose_2.Prop)({
        type: Number,
        default: 0,
    }),
    __metadata("design:type", Number)
], Estadistica.prototype, "cuentasBloqueadas", void 0);
__decorate([
    (0, mongoose_2.Prop)({
        type: Number,
        default: 0,
    }),
    __metadata("design:type", Number)
], Estadistica.prototype, "gananciasTotales", void 0);
__decorate([
    (0, mongoose_2.Prop)({
        type: Number,
        default: 0,
    }),
    __metadata("design:type", Number)
], Estadistica.prototype, "creditos", void 0);
__decorate([
    (0, mongoose_2.Prop)({
        type: Number,
        default: 0,
    }),
    __metadata("design:type", Number)
], Estadistica.prototype, "cuentasDeshabilitadas", void 0);
Estadistica = __decorate([
    (0, mongoose_2.Schema)({ timestamps: true })
], Estadistica);
exports.Estadistica = Estadistica;
const estadisticaSchema = mongoose_2.SchemaFactory.createForClass(Estadistica);
exports.default = estadisticaSchema;
//# sourceMappingURL=estadistica.entity.js.map