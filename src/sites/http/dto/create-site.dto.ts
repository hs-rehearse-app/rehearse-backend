import {
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CreateSiteLocationDto } from './create-site-location.dto';
import { Type } from 'class-transformer';
import { CreateRoomDto } from './create-room-dto';

export class CreateSiteDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @Type(() => CreateSiteLocationDto)
  @ValidateNested()
  location: CreateSiteLocationDto;

  @IsString()
  @IsOptional()
  logo?: string;

  @IsString({ each: true })
  pictures: string[];

  @ValidateNested({ each: true })
  rooms: CreateRoomDto[];
}
