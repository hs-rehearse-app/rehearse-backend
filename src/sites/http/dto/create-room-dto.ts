import { IsDecimal, IsNotEmpty, IsString } from 'class-validator';

export class CreateRoomDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsDecimal()
  pricePerHour: number;

  @IsString({ each: true })
  pictures: string[];
}
