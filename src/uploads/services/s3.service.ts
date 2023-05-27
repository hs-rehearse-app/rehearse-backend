import { Inject, Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import { PromiseResult } from 'aws-sdk/lib/request';
import { InjectS3 } from '../providers/s3.provider';
import { S3_BUCKET_TOKEN } from '../providers/bucket.provider';

export type GetFileResult = PromiseResult<AWS.S3.GetObjectOutput, AWS.AWSError>;

@Injectable()
export class S3Service {
  constructor(
    @InjectS3()
    private readonly s3: AWS.S3,
    @Inject(S3_BUCKET_TOKEN)
    private readonly bucket: string,
  ) {}

  public uploadFile(
    file: Buffer,
    name: string,
  ): Promise<AWS.S3.ManagedUpload.SendData> {
    const params = {
      Bucket: this.bucket,
      Key: name,
      Body: file,
    };

    return this.s3.upload(params).promise();
  }

  public getFile(name: string): Promise<GetFileResult> {
    const params = {
      Bucket: this.bucket,
      Key: name,
    };

    return this.s3.getObject(params).promise();
  }
}
