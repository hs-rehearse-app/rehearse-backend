import { Module } from '@nestjs/common';
import { UploadsController } from './uploads.controller';
import { S3Service } from './services/s3.service';
import { UploadsService } from './services/uploads.service';
import { S3Provider } from './providers/s3.provider';
import { S3BucketProvider } from './providers/bucket.provider';

@Module({
  controllers: [UploadsController],
  providers: [S3Provider, S3BucketProvider, S3Service, UploadsService],
})
export class UploadsModule {}
