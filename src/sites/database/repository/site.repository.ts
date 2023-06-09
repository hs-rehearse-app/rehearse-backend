import { MikroORM } from '@mikro-orm/core';
import { Injectable } from '@nestjs/common';
import { SiteEntity } from '../entity/site.entity';
import { CreateSiteCommand } from '../../domain/commands/create-site.command';

@Injectable()
export class SiteRepository {
  constructor(private readonly orm: MikroORM) {}

  public get em() {
    return this.orm.em.fork();
  }

  public async create(command: CreateSiteCommand): Promise<SiteEntity> {
    const site = this.em.create(SiteEntity, command);

    await this.em.persistAndFlush(site);

    return site;
  }
}
