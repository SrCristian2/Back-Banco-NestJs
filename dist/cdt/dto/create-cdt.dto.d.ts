import mongoose from 'mongoose';
export declare class CreateCdtDto {
    client: mongoose.Schema.Types.ObjectId;
    nameBeneficiary: string;
    contact: string;
    PlazoDias: number;
    montoDeposito: number;
    totalGanancia?: number;
    gananciaTotal?: number;
}
