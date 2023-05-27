import { FactoryProvider, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as AWS from 'aws-sdk';

export const S3_TOKEN = 'S3';

export const InjectS3 = () => Inject(S3_TOKEN);

export const S3Provider: FactoryProvider = {
  provide: S3_TOKEN,
  useFactory: (config: ConfigService): AWS.S3 => {
    return new AWS.S3({
      accessKeyId: config.get('AWS_ACCESS_KEY'),
      secretAccessKey: config.get('AWS_SECRET_ACCESS_KEY'),
      region: config.get('AWS_REGION'),
    });
  },
  inject: [ConfigService],
};
