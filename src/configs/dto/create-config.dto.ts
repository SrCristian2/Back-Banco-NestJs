import { IsNumber } from 'class-validator';

export class CreateConfigDto {
  @IsNumber()
  porcentajeIva: number;
  @IsNumber()
  porcentajeInteresAhorros: number;
  @IsNumber()
  porcentajeCreditoAnual: number;
  @IsNumber()
  retencion: number;
  @IsNumber()
  tasaInteresCdt: number;
}
