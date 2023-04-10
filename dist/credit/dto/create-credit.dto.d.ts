import mongoose from 'mongoose';
export declare class CreateCreditDto {
    product: string;
    client: mongoose.Schema.Types.ObjectId;
    fiador: string;
    images?: {
        secure_url: string;
        public_id: string;
    }[];
    totalIntereses?: number;
    cuotas: number;
    totalAPagarCadaCuota?: number;
    montoAPagar?: number;
}
