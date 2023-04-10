import mongoose, { Document } from 'mongoose';
export declare class Pagos extends Document {
    credit: mongoose.Schema.Types.ObjectId;
    ahorros?: mongoose.Schema.Types.ObjectId;
    cuotas: number;
    monto: number;
}
declare const pagosSchema: mongoose.Schema<Pagos, mongoose.Model<Pagos, any, any, any, mongoose.Document<unknown, any, Pagos> & Omit<Pagos & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Pagos, mongoose.Document<unknown, {}, mongoose.FlatRecord<Pagos>> & Omit<mongoose.FlatRecord<Pagos> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
export default pagosSchema;
