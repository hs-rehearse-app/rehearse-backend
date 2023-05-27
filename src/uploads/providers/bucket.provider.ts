import { FactoryProvider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

export const S3_BUCKET_TOKEN = 'S3_BUCKET';

export const S3BucketProvider: FactoryProvider = {
  provide: S3_BUCKET_TOKEN,
  useFactory: (config: ConfigService): string => {
    return config.get('BUCKET') ?? '';
  },
  inject: [ConfigService],
};
