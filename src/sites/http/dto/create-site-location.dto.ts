import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSiteLocationDto {
  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsString()
  @IsNotEmpty()
  timeZone: string;
}
