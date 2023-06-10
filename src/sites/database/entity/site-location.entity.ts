import { Entity, OneToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { SiteEntity } from './site.entity';
import { plainToInstance } from 'class-transformer';
import { SiteLocation } from 'src/sites/domain/models/location.model';

@Entity({ tableName: 'site_location' })
export class SiteLocationEntity {
  @PrimaryKey({ autoincrement: true })
  id: number;

  @Property()
  city: string;

  @Property()
  address: string;

  @Property()
  timeZone: string;

  @OneToOne(() => SiteEntity, (site) => site.location, {
    orphanRemoval: true,
    lazy: true,
  })
  site: SiteEntity;

  public static toModel(entity: SiteLocationEntity): SiteLocation {
    const { site, ...location } = entity;

    return plainToInstance(SiteLocation, location);
  }
}
