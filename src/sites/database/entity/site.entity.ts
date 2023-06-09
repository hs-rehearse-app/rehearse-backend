import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity({ tableName: 'rehearsal_site' })
export class SiteEntity {
  @PrimaryKey({ autoincrement: true })
  id: number;

  @Property()
  name: string;
}
