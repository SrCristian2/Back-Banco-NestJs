import { PartialType } from '@nestjs/mapped-types';
import { CreateCdtDto } from './create-cdt.dto';

export class UpdateCdtDto extends PartialType(CreateCdtDto) {}
