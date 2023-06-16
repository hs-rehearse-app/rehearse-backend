import { Module } from '@nestjs/common';
import { SiteService } from './domain/services/site.service';
import { SiteRepository } from './database/repository/site.repository';
import { SiteController } from './http/controllers/site.controller';
import { RoomController } from './http/controllers/room.controller';

@Module({
  controllers: [SiteController, RoomController],
  providers: [SiteService, SiteRepository],
})
export class SitesModule {}
