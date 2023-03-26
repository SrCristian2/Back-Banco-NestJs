import { PartialType } from '@nestjs/mapped-types';
import { CreateCuentaAhorroDto } from './create-cuenta-ahorro.dto';

export class UpdateCuentaAhorroDto extends PartialType(CreateCuentaAhorroDto) {}
