import mongoose from 'mongoose';
export declare class CreateConsignacionDto {
    cuentaDestino: mongoose.Schema.Types.ObjectId;
    monto: number;
}
