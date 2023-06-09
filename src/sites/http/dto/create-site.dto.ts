import { IsString } from 'class-validator';

export class CreateSiteDto {
  @IsString()
  name: string;
}
