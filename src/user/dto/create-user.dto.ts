import {
  IsString,
  IsEmail,
  IsEnum,
  IsOptional,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(3)
  name: string;
  @IsString()
  @MinLength(3)
  lastname: string;
  @IsString()
  @IsEmail()
  email: string;
  @IsString()
  @MinLength(3)
  password: string;

  @IsOptional()
  @IsString()
  @IsEnum(['client', 'employee', 'admin'])
  role: string;
}
