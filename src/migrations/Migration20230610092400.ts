import { Migration } from '@mikro-orm/migrations';

export class Migration20230610092400 extends Migration {
  async up(): Promise<void> {
    await this.addSql(
      'alter table "rehearsal_site" alter column "pictures" type text[] using ("pictures"::text[]);',
    );
    this.addSql(
      'alter table "rehearsal_site" alter column "pictures" set not null;',
    );
  }

  async down(): Promise<void> {
    await this.addSql(
      'alter table "rehearsal_site" alter column "pictures" type text[] using ("pictures"::text[]);',
    );
    this.addSql(
      'alter table "rehearsal_site" alter column "pictures" drop not null;',
    );
  }
}
