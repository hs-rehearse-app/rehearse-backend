import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Post,
  Res,
  UseInterceptors,
} from '@nestjs/common';
import { CreateSiteDto } from '../dto/create-site.dto';
import { SiteService } from '../../domain/services/site.service';
import { CreateSiteRequest } from '../../domain/actions/create-site.request';
import { Site } from '../../domain/models/site.model';
import { Response } from 'express';
import { renderSitesPage } from './sites-page';

@Controller('/sites')
export class SiteController {
  constructor(private readonly service: SiteService) {}

  @Post()
  @UseInterceptors(ClassSerializerInterceptor)
  public create(@Body() createSiteDto: CreateSiteDto): Promise<Site> {
    const { location, rooms, ...siteData } = createSiteDto;

    return this.service.create(
      new CreateSiteRequest(siteData, location, rooms),
    );
  }

  @Get()
  @UseInterceptors(ClassSerializerInterceptor)
  public getAll(): Promise<Site[]> {
    return this.service.getAll();
  }

  @Get('rendered')
  public async getRendered(@Res() res: Response): Promise<void> {
    try {
      const sites = await this.service.getAll();

      const html = renderSitesPage(sites);

      res.setHeader('Content-Type', 'text/html');

      res.send(html);
    } catch (err) {
      console.error(err);
      res.status(500).send(err);
    }
  }
}
