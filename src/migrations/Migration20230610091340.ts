import { Migration } from '@mikro-orm/migrations';

export class Migration20230610091340 extends Migration {
  async up(): Promise<void> {
    await this.addSql(
      'alter table "rehearsal_site" add column "pictures" text[] not null;',
    );
  }

  async down(): Promise<void> {
    await this.addSql('alter table "rehearsal_site" drop column "pictures";');
  }
}
