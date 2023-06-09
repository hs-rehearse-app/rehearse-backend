import { Body, Controller, Post } from '@nestjs/common';
import { CreateRehearsalSiteDto } from './dto/create-rehearsal-site.dto';
import { RehearsalSiteService } from '../domain/services/rehearsal-site.service';
import { CreateRehearsalSiteCommand } from '../domain/commands/create-rehearsal-site.command';

@Controller('/rehearsal-sites')
export class RehearsalSiteController {
  constructor(private readonly service: RehearsalSiteService) {}

  @Post()
  public create(@Body() createSiteDto: CreateRehearsalSiteDto) {
    return this.service.create(
      new CreateRehearsalSiteCommand(createSiteDto.name),
    );
  }
}
