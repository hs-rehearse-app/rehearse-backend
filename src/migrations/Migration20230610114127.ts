import { Migration } from '@mikro-orm/migrations';

export class Migration20230610114127 extends Migration {
  async up(): Promise<void> {
    await this.addSql(
      'create table "room" ("id" serial primary key, "name" varchar(255) not null, "price_per_hour" numeric(10,0) not null, "pictures" text[] not null, "site_id" int not null);',
    );

    this.addSql(
      'alter table "room" add constraint "room_site_id_foreign" foreign key ("site_id") references "rehearsal_site" ("id") on update cascade;',
    );
  }

  async down(): Promise<void> {
    await this.addSql('drop table if exists "room" cascade;');
  }
}
