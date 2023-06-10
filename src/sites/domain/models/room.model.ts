import { Exclude } from 'class-transformer';

export class Room {
  @Exclude()
  private '@modelType' = 'Room';

  id: number;

  name: string;

  pricePerHour: number;

  pictures: string[];
}
