import mongoose, { Document } from 'mongoose';
export declare class Consignacion extends Document {
    cuentaDestino: mongoose.Schema.Types.ObjectId;
    monto: number;
}
declare const consignacionSchema: mongoose.Schema<Consignacion, mongoose.Model<Consignacion, any, any, any, mongoose.Document<unknown, any, Consignacion> & Omit<Consignacion & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Consignacion, mongoose.Document<unknown, {}, mongoose.FlatRecord<Consignacion>> & Omit<mongoose.FlatRecord<Consignacion> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
export default consignacionSchema;
