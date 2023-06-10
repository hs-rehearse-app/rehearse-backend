import { Migration } from '@mikro-orm/migrations';

export class Migration20230610091632 extends Migration {
  async up(): Promise<void> {
    await this.addSql(
      'alter table "rehearsal_site" alter column "pictures" type text[] using ("pictures"::text[]);',
    );
    this.addSql(
      'alter table "rehearsal_site" alter column "pictures" drop not null;',
    );
  }

  async down(): Promise<void> {
    await this.addSql(
      'alter table "rehearsal_site" alter column "pictures" type text[] using ("pictures"::text[]);',
    );
    this.addSql(
      'alter table "rehearsal_site" alter column "pictures" set not null;',
    );
  }
}
