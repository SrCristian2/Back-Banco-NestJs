import mongoose, { Document } from 'mongoose';
export declare class Credit extends Document {
    product: string;
    client: mongoose.Schema.Types.ObjectId;
    fiador: string;
    images?: {
        secure_url: string;
        public_id: string;
    }[];
    totalIntereses: number;
    cuotas: number;
    totalAPagarCadaCuota: number;
    montoAPagar: number;
}
declare const creditSchema: mongoose.Schema<Credit, mongoose.Model<Credit, any, any, any, mongoose.Document<unknown, any, Credit> & Omit<Credit & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Credit, mongoose.Document<unknown, {}, mongoose.FlatRecord<Credit>> & Omit<mongoose.FlatRecord<Credit> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
export default creditSchema;
