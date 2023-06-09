import { Module } from '@nestjs/common';
import { RehearsalSiteService } from './domain/services/rehearsal-site.service';
import { RehearsalSiteRepository } from './database/repository/rehearsal-site.repository';
import { RehearsalSiteController } from './http/rehearsal-site.controller';

@Module({
  controllers: [RehearsalSiteController],
  providers: [RehearsalSiteService, RehearsalSiteRepository],
})
export class RehearsalSitesModule {}
