import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UploadsModule } from './uploads/uploads.module';
import { ConfigModule } from '@nestjs/config';
import { RehearsalSitesModule } from './rehearsal-sites/rehearsal-sites.module';
import { MikroOrmModule } from '@mikro-orm/nestjs';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MikroOrmModule.forRoot({
      entities: ['./dist/**/*.entity.js'],
      entitiesTs: ['./src/**/*.entity.ts'],
      dbName: 'rehearse',
      user: 'rehearse',
      host: 'localhost',
      port: 5438,
      password: 'rehearse',
      type: 'postgresql',
      migrations: {
        path: './migrations',
        transactional: true,
        allOrNothing: true,
        dropTables: true,
        safe: false,
        emit: 'ts',
      },
    }),
    UploadsModule,
    RehearsalSitesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
