import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity({ tableName: 'rehearsal_site' })
export class RehearsalSite {
  @PrimaryKey({ autoincrement: true })
  id: number;

  @Property()
  name: string;
}
