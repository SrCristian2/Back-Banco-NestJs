import { Type } from 'class-transformer';
import { IsMongoId, IsNotEmpty, IsNumber } from 'class-validator';
import mongoose from 'mongoose';

export class CreateConsignacionDto {
  @IsNotEmpty()
  @IsMongoId()
  cuentaDestino: mongoose.Schema.Types.ObjectId;

  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  monto: number;
}
