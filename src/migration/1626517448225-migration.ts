import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1626517448225 implements MigrationInterface {
    name = 'migration1626517448225'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `pre_testing` (`id` varchar(255) NOT NULL, `name` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `pre_testing`");
    }

}
