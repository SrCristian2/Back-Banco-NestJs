import mongoose from 'mongoose';
export declare class CreateCuentaAhorroDto {
    user: mongoose.Schema.Types.ObjectId;
    founds: number;
    imgUrl?: string;
    address: string;
    isDisabled?: string;
    public_id?: string;
    isBlocked?: string;
}
