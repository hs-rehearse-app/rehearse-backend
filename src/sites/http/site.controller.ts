import { Body, Controller, Post } from '@nestjs/common';
import { CreateSiteDto } from './dto/create-site.dto';
import { SiteService } from '../domain/services/site.service';
import { CreateSiteCommand } from '../domain/commands/create-site.command';

@Controller('/sites')
export class SiteController {
  constructor(private readonly service: SiteService) {}

  @Post()
  public create(@Body() createSiteDto: CreateSiteDto) {
    return this.service.create(new CreateSiteCommand(createSiteDto.name));
  }
}
