import { Migration } from '@mikro-orm/migrations';

export class Migration20230610091933 extends Migration {
  async up(): Promise<void> {
    await this.addSql(
      'alter table "rehearsal_site" alter column "logo" type text using ("logo"::text);',
    );
    this.addSql(
      'alter table "rehearsal_site" alter column "logo" drop not null;',
    );
  }

  async down(): Promise<void> {
    await this.addSql(
      'alter table "rehearsal_site" alter column "logo" type varchar(255) using ("logo"::varchar(255));',
    );
    this.addSql(
      'alter table "rehearsal_site" alter column "logo" set not null;',
    );
  }
}
