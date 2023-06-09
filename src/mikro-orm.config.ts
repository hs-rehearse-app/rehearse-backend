import * as path from 'path';
import { RehearsalSite } from './rehearsal-sites/database/entity/rehearsal-site.entity';

export default {
  entities: [RehearsalSite],
  // entities: [path.join(__dirname, '..', '..', './dist/**/*.entity.js')],
  // entitiesTs: [path.join(__dirname, '..', '..', './src/**/*.entity.ts')],
  dbName: 'rehearse',
  user: 'rehearse',
  host: 'localhost',
  port: 5438,
  password: 'rehearse',
  type: 'postgresql',
  migrations: {
    path: './src/migrations',
    transactional: true,
    allOrNothing: true,
    dropTables: true,
    safe: false,
    emit: 'ts',
  },
};
