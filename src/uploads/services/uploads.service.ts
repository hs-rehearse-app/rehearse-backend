import { Injectable } from '@nestjs/common';
import { GetFileResult, S3Service } from './s3.service';
import { v4 as uuidv4 } from 'uuid';
import * as path from 'path';

@Injectable()
export class UploadsService {
  constructor(private readonly s3Service: S3Service) {}

  public uploadFile(
    file: Express.Multer.File,
  ): Promise<AWS.S3.ManagedUpload.SendData> {
    const extension = path.extname(file.originalname);
    const uuid = uuidv4();
    const fileName = `${uuid}${extension}`;

    return this.s3Service.uploadFile(file.buffer, fileName);
  }

  public getFile(name: string): Promise<GetFileResult> {
    return this.s3Service.getFile(name);
  }
}
