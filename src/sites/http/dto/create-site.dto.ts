import { IsOptional, IsString, ValidateNested } from 'class-validator';
import { CreateSiteLocationDto } from './create-site-location.dto';
import { Type } from 'class-transformer';

export class CreateSiteDto {
  @IsString()
  name: string;

  @Type(() => CreateSiteLocationDto)
  @ValidateNested()
  location: CreateSiteLocationDto;

  @IsString()
  @IsOptional()
  logo?: string;

  @IsString({ each: true })
  pictures: string[];
}
