import { MikroORM } from '@mikro-orm/core';
import { Injectable } from '@nestjs/common';
import { RehearsalSite } from '../entity/rehearsal-site.entity';
import { CreateRehearsalSiteCommand } from 'src/rehearsal-sites/domain/commands/create-rehearsal-site.command';

@Injectable()
export class RehearsalSiteRepository {
  constructor(private readonly orm: MikroORM) {}

  public get em() {
    return this.orm.em.fork();
  }

  public async create(command: CreateRehearsalSiteCommand) {
    const site = this.em.create(RehearsalSite, command);

    await this.em.persistAndFlush(site);

    return site;
  }
}
