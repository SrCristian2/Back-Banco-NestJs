import { Type } from 'class-transformer';
import { IsMongoId, IsNotEmpty, IsNumber } from 'class-validator';
import mongoose from 'mongoose';

export class CreatePagosDto {
  @IsNotEmpty()
  @IsMongoId()
  credit: mongoose.Schema.Types.ObjectId;

  @IsMongoId()
  ahorros?: mongoose.Schema.Types.ObjectId;

  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  cuotas: number;

  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  monto: number;
}
