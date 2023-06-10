import { Migration } from '@mikro-orm/migrations';

export class Migration20230609162512 extends Migration {
  async up(): Promise<void> {
    await this.addSql(
      'create table "site_location" ("id" serial primary key, "city" varchar(255) not null, "address" varchar(255) not null, "time_zone" varchar(255) not null);',
    );

    this.addSql(
      'alter table "rehearsal_site" add column "location_id" int not null;',
    );
    this.addSql(
      'alter table "rehearsal_site" add constraint "rehearsal_site_location_id_foreign" foreign key ("location_id") references "site_location" ("id") on update cascade;',
    );
    this.addSql(
      'alter table "rehearsal_site" add constraint "rehearsal_site_location_id_unique" unique ("location_id");',
    );
  }

  async down(): Promise<void> {
    await this.addSql(
      'alter table "rehearsal_site" drop constraint "rehearsal_site_location_id_foreign";',
    );

    this.addSql('drop table if exists "site_location" cascade;');

    this.addSql(
      'alter table "rehearsal_site" drop constraint "rehearsal_site_location_id_unique";',
    );
    this.addSql('alter table "rehearsal_site" drop column "location_id";');
  }
}
