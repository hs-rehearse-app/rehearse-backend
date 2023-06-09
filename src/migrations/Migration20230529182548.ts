import { Migration } from '@mikro-orm/migrations';

export class Migration20230529182548 extends Migration {
  async up(): Promise<void> {
    await this.addSql(
      'create table "rehearsal_site" ("id" serial primary key, "name" varchar(255) not null);',
    );
  }

  async down(): Promise<void> {
    await this.addSql('drop table if exists "rehearsal_site" cascade;');
  }
}
