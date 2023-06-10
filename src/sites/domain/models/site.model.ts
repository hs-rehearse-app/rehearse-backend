import { Exclude } from 'class-transformer';
import { SiteLocation } from './location.model';

export class Site {
  @Exclude()
  private '@modelType' = 'Site';

  id: number;

  name: string;

  logo?: string;

  pictures: string[];

  location: SiteLocation;
}
