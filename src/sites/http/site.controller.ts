import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Post,
  Res,
  UseInterceptors,
} from '@nestjs/common';
import { CreateSiteDto } from './dto/create-site.dto';
import { SiteService } from '../domain/services/site.service';
import { CreateSiteCommand } from '../domain/commands/create-site.command';
import { Site } from '../domain/models/site.model';
import { Response } from 'express';

@Controller('/sites')
export class SiteController {
  constructor(private readonly service: SiteService) {}

  @Post()
  @UseInterceptors(ClassSerializerInterceptor)
  public create(@Body() createSiteDto: CreateSiteDto): Promise<Site> {
    return this.service.create(
      new CreateSiteCommand(
        createSiteDto.name,
        createSiteDto.location,
        createSiteDto.pictures,
        createSiteDto.logo,
      ),
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

      const html = `<ul>${sites
        .map((site) => {
          return `
        <div class="container" style="padding: 20px; margin-top: 20px; border: 1px solid #ccc;">
          <h1 style="font-weight: bold; font-size: 2em;">
            ${
              site.logo
                ? `<img src="${site.logo}" alt="${site.name} logo" style="height: 1em; margin-right: 0.5em;">`
                : ''
            }
            ${site.name}
          </h1>
          <p style="font-size: 1.2em;"><strong>ID:</strong> ${site.id}</p>
          <p style="font-size: 1.2em;"><strong>Location:</strong> ${
            site.location.city
          }, ${site.location.address} (${site.location.timeZone})</p>
          <p style="font-size: 1.2em;"><strong>Pictures:</strong></p>
          <div style="display: flex; flex-wrap: wrap; gap: 10px;">
            ${site.pictures
              .map(
                (picture) =>
                  `<img src="${picture}" alt="Picture" style="width: 100px; height: 100px;">`,
              )
              .join('')}
          </div>
        </div>
      `;
        })
        .join('\n')}</ul>`;

      res.setHeader('Content-Type', 'text/html');

      res.send(html);
    } catch (err) {
      console.error(err);
      res.status(500).send(err);
    }
  }
}
