import { SiteLocation } from '../models/location.model';
import { Room } from '../models/room.model';
import { Site } from '../models/site.model';

export class CreateSiteRequest {
  constructor(
    public siteData: Omit<Site, '@modelType' | 'id' | 'location' | 'rooms'>,
    public locationData: Omit<SiteLocation, 'id' | 'site'>,
    public roomsData: Array<Omit<Room, '@modelType' | 'id' | 'site'>>,
  ) {}
}
