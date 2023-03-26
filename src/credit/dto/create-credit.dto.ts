import { Type } from 'class-transformer';
import {
  IsEnum,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import mongoose from 'mongoose';

export class CreateCreditDto {
  @IsNotEmpty()
  @IsString()
  @IsEnum([
    'viviendas',
    'tarjeta de credito',
    'educacion',
    'viajes',
    'libre inversion',
  ])
  product: string;
  @IsNotEmpty()
  @IsMongoId()
  client: mongoose.Schema.Types.ObjectId;
  @IsNotEmpty()
  @IsString()
  fiador: string;
  images?: {
    secure_url: string;
    public_id: string;
  }[];

  totalIntereses?: number;
  @Type(() => Number)
  @IsNumber()
  cuotas: number;
  totalAPagarCadaCuota?: number;
  montoAPagar?: number;
}
