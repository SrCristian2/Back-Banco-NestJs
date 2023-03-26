import { Type } from 'class-transformer';
import { IsMongoId, IsNumber, IsString, IsNotEmpty } from 'class-validator';
import mongoose from 'mongoose';

export class CreateCuentaAhorroDto {
  @IsMongoId()
  user: mongoose.Schema.Types.ObjectId;

  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  founds: number;
  imgUrl?: string;
  @IsString()
  address: string;
  isDisabled?: string;
  public_id?: string;
  isBlocked?: string;
}
