import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { Room } from '../../domain/models/room.model';
import { SiteEntity } from './site.entity';
import { plainToInstance } from 'class-transformer';

@Entity({ tableName: 'room' })
export class RoomEntity {
  @PrimaryKey({ autoincrement: true })
  id: number;

  @Property()
  name: string;

  @Property({ type: 'decimal' })
  pricePerHour: number;

  @Property({ type: 'array' })
  pictures: string[];

  @ManyToOne(() => SiteEntity)
  site: SiteEntity;

  public static toModel(entity: RoomEntity): Room {
    const { site, ...room } = entity;

    return plainToInstance(Room, room);
  }
}
