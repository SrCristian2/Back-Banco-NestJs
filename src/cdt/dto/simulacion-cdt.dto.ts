import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString, Max, Min } from 'class-validator';

export class SimulacionCdtDto {
  @IsString()
  name: string;

  @Type(() => Number)
  @IsNumber()
  montoDeposito: number;

  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  @Max(747)
  plazoDias: number;
}
