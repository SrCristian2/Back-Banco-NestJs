import { Type } from 'class-transformer';
import { IsMongoId, IsNotEmpty, IsNumber } from 'class-validator';
import mongoose from 'mongoose';

export class CreateTransferenciaDto {
  @IsNotEmpty()
  @IsMongoId()
  cuentaOrigen: mongoose.Schema.Types.ObjectId;

  @IsNotEmpty()
  @IsMongoId()
  cuentaDestino: mongoose.Schema.Types.ObjectId;

  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  monto: number;
}
