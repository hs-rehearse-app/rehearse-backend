import { MikroORM, UniqueConstraintViolationException } from '@mikro-orm/core';
import { Injectable } from '@nestjs/common';
import { SiteEntity } from '../entity/site.entity';
import { CreateSiteCommand } from '../../domain/commands/create-site.command';
import { SiteLocationEntity } from '../entity/site-location.entity';
import { createInstance } from 'src/utils/create-instance';
import { UniqueException } from 'src/sites/domain/exception/unique-exception';
import { Site } from 'src/sites/domain/models/site.model';

@Injectable()
export class SiteRepository {
  constructor(private readonly orm: MikroORM) {}

  public get em() {
    return this.orm.em.fork();
  }

  public async create(command: CreateSiteCommand): Promise<Site> {
    const location = createInstance(SiteLocationEntity, command.location);

    const site = createInstance(SiteEntity, { ...command, location });

    await this.em
      .persistAndFlush(site)
      .catch((e) => this.handleCreationError(e));

    return SiteEntity.toModel(site);
  }

  public findAll(): Promise<Site[]> {
    return this.em
      .find(SiteEntity, {}, { populate: ['location'] })
      .then((res) => res.map(SiteEntity.toModel));
  }

  private handleCreationError(e: unknown): never {
    if (e instanceof UniqueConstraintViolationException) {
      throw new UniqueException(e.message);
    }

    throw e;
  }
}
