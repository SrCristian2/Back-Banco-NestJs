import mongoose, { Document } from 'mongoose';
export declare class Transferencias extends Document {
    cuentaOrigen: mongoose.Schema.Types.ObjectId;
    cuentaDestino: mongoose.Schema.Types.ObjectId;
    monto: number;
}
declare const transferenciaSchema: mongoose.Schema<Transferencias, mongoose.Model<Transferencias, any, any, any, mongoose.Document<unknown, any, Transferencias> & Omit<Transferencias & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Transferencias, mongoose.Document<unknown, {}, mongoose.FlatRecord<Transferencias>> & Omit<mongoose.FlatRecord<Transferencias> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
export default transferenciaSchema;
