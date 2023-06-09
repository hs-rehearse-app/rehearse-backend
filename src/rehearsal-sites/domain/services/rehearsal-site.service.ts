import { Injectable } from '@nestjs/common';
import { RehearsalSiteRepository } from '../../database/repository/rehearsal-site.repository';
import { CreateRehearsalSiteCommand } from '../commands/create-rehearsal-site.command';

@Injectable()
export class RehearsalSiteService {
  constructor(private readonly repo: RehearsalSiteRepository) {}

  public create(command: CreateRehearsalSiteCommand) {
    return this.repo.create(command);
  }
}
