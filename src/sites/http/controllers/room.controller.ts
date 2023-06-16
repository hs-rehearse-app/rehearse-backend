import { MikroORM } from '@mikro-orm/core';
import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { RoomEntity } from 'src/sites/database/entity/room.entity';

@Controller('rooms')
export class RoomController {
  constructor(private mikroorm: MikroORM) {}

  @Get(':id')
  public getOne(@Param('id', ParseIntPipe) roomId: number) {
    return this.mikroorm.em.findOne(RoomEntity, { id: roomId });
  }
}
