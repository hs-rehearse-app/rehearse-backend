import { Module } from '@nestjs/common';
import { SiteService } from './domain/services/site.service';
import { SiteRepository } from './database/repository/site.repository';
import { SiteController } from './http/site.controller';

@Module({
  controllers: [SiteController],
  providers: [SiteService, SiteRepository],
})
export class SitesModule {}
