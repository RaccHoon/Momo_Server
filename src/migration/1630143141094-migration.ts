import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1630143141094 implements MigrationInterface {
    name = 'migration1630143141094'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`momo\`.\`group\` ADD \`memberIds\` text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`momo\`.\`group\` DROP COLUMN \`memberIds\``);
    }

}
