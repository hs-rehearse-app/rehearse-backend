import { Migration } from '@mikro-orm/migrations';

export class Migration20230609164550 extends Migration {
  async up(): Promise<void> {
    await this.addSql(
      'alter table "rehearsal_site" add constraint "rehearsal_site_name_unique" unique ("name");',
    );
  }

  async down(): Promise<void> {
    await this.addSql(
      'alter table "rehearsal_site" drop constraint "rehearsal_site_name_unique";',
    );
  }
}
