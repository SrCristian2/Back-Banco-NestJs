import { Type } from 'class-transformer';
import {
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';
import mongoose from 'mongoose';

export class CreateCdtDto {
  @IsNotEmpty()
  @IsMongoId()
  client: mongoose.Schema.Types.ObjectId;
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  nameBeneficiary: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(10)
  @MaxLength(10)
  contact: string;
  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  @Max(747)
  PlazoDias: number;

  @Type(() => Number)
  @IsNumber()
  montoDeposito: number;
  totalGanancia?: number;
  gananciaTotal?: number;
}
