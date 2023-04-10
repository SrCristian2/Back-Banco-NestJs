import mongoose from 'mongoose';
export declare class CreatePagosDto {
    credit: mongoose.Schema.Types.ObjectId;
    ahorros?: mongoose.Schema.Types.ObjectId;
    cuotas: number;
    monto: number;
}
