import mongoose, { Document } from 'mongoose';
export declare class CuentaAhorro extends Document {
    user: mongoose.Schema.Types.ObjectId;
    founds: number;
    imgUrl: string;
    address: string;
    isDisabled: boolean;
    public_id: string;
    isBlocked: boolean;
    setImg: (secure_url: string, public_id: string) => void;
}
declare const ahorrosSchema: mongoose.Schema<CuentaAhorro, mongoose.Model<CuentaAhorro, any, any, any, mongoose.Document<unknown, any, CuentaAhorro> & Omit<CuentaAhorro & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, CuentaAhorro, mongoose.Document<unknown, {}, mongoose.FlatRecord<CuentaAhorro>> & Omit<mongoose.FlatRecord<CuentaAhorro> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
export default ahorrosSchema;
