import mongoose from 'mongoose';
export declare class CreateTransferenciaDto {
    cuentaOrigen: mongoose.Schema.Types.ObjectId;
    cuentaDestino: mongoose.Schema.Types.ObjectId;
    monto: number;
}
