import { Entity, OneToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { SiteLocationEntity } from './site-location.entity';
import { Site } from '../../domain/models/site.model';
import { createRequiredInstance } from '../../../utils/create-instance';

@Entity({ tableName: 'rehearsal_site' })
export class SiteEntity {
  @PrimaryKey({ autoincrement: true })
  id: number;

  @Property({ unique: true })
  name: string;

  @Property({ type: 'text', nullable: true })
  logo: string | null;

  @Property({ type: 'array' })
  pictures: string[];

  @OneToOne(() => SiteLocationEntity, (l) => l.site, {
    owner: true,
  })
  location: SiteLocationEntity;

  public static toModel(entity: SiteEntity): Site {
    return createRequiredInstance(Site, {
      id: entity.id,
      name: entity.name,
      pictures: entity.pictures,
      location: SiteLocationEntity.toModel(entity.location),
      logo: entity.logo ?? undefined,
    });
  }
}
