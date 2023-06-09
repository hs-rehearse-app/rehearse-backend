import { Injectable } from '@nestjs/common';
import { SiteRepository } from '../../database/repository/site.repository';
import { CreateSiteCommand } from '../commands/create-site.command';

@Injectable()
export class SiteService {
  constructor(private readonly repo: SiteRepository) {}

  public create(command: CreateSiteCommand) {
    return this.repo.create(command);
  }
}
