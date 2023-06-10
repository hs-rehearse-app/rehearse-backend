import { ConflictException, Injectable } from '@nestjs/common';
import { SiteRepository } from '../../database/repository/site.repository';
import { CreateSiteRequest } from '../actions/create-site.request';
import { Site } from '../models/site.model';
import { UniqueException } from '../exception/unique-exception';

@Injectable()
export class SiteService {
  constructor(private readonly repo: SiteRepository) {}

  public create(command: CreateSiteRequest): Promise<Site> {
    return this.repo.create(command).catch((e) => this.handleCreateError(e));
  }

  private handleCreateError(e: unknown): never {
    if (e instanceof UniqueException) {
      throw new ConflictException('Site with this name already exists');
    }

    throw e;
  }

  public getAll(): Promise<Site[]> {
    return this.repo.findAll();
  }
}
