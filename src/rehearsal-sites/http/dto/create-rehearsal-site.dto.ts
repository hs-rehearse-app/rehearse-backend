import { IsString } from 'class-validator';

export class CreateRehearsalSiteDto {
  @IsString()
  name: string;
}
