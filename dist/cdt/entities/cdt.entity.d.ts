import mongoose, { Document } from 'mongoose';
export declare class Cdt extends Document {
    client: mongoose.Schema.Types.ObjectId;
    nameBeneficiary: string;
    images?: {
        secure_url: string;
        public_id: string;
    }[];
    contact: string;
    PlazoDias: number;
    montoDeposito: number;
    totalGanancia: number;
    gananciaTotal: number;
}
declare const cdtSchema: mongoose.Schema<Cdt, mongoose.Model<Cdt, any, any, any, mongoose.Document<unknown, any, Cdt> & Omit<Cdt & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Cdt, mongoose.Document<unknown, {}, mongoose.FlatRecord<Cdt>> & Omit<mongoose.FlatRecord<Cdt> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
export default cdtSchema;
