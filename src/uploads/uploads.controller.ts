import {
  Controller,
  Get,
  Param,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import { UploadsService } from './services/uploads.service';

@Controller('uploads')
export class UploadsController {
  constructor(private readonly uploadsService: UploadsService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  public async uploadFile(
    @UploadedFile() file: Express.Multer.File,
  ): Promise<{ fileName: string }> {
    const uploadResult = await this.uploadsService.uploadFile(file);

    return { fileName: uploadResult.Key };
  }

  @Get(':key')
  public async getFile(
    @Param('key') key: string,
    @Res() res: Response,
  ): Promise<void> {
    try {
      const file = await this.uploadsService.getFile(key);

      if (file.ContentType) {
        res.setHeader('Content-Type', file.ContentType);
      }

      res.send(file.Body);
    } catch (err) {
      console.error(err);
      res.status(500).send(err);
    }
  }
}
