import { Exclude } from 'class-transformer';
import { SiteLocation } from './location.model';
import { Room } from './room.model';

export class Site {
  @Exclude()
  private '@modelType' = 'Site';

  id: number;

  name: string;

  logo?: string;

  pictures: string[];

  rules: string[];

  location: SiteLocation;

  rooms?: Room[];
}
