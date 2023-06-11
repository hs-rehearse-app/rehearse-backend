import { Migration } from '@mikro-orm/migrations';

export class Migration20230611092842 extends Migration {
  async up(): Promise<void> {
    await this.addSql(
      'alter table "rehearsal_site" add column "rules" text[] not null;',
    );
  }

  async down(): Promise<void> {
    await this.addSql('alter table "rehearsal_site" drop column "rules";');
  }
}
