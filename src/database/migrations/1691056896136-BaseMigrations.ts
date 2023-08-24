import { MigrationInterface, QueryRunner } from "typeorm";

export class BaseMigrations1691056896136 implements MigrationInterface {
    name = 'BaseMigrations1691056896136'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "questions" DROP CONSTRAINT "FK_35d54f06d12ea78d4842aed6b6d"`);
        await queryRunner.query(`ALTER TABLE "options" DROP CONSTRAINT "FK_46b668c49a6c4154d4643d875a5"`);
        await queryRunner.query(`ALTER TABLE "quizes" RENAME COLUMN "isActive" TO "is_active"`);
        await queryRunner.query(`ALTER TABLE "questions" RENAME COLUMN "quizId" TO "quiz_id"`);
        await queryRunner.query(`ALTER TABLE "options" DROP COLUMN "isCorrect"`);
        await queryRunner.query(`ALTER TABLE "options" DROP COLUMN "questionId"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "options" ADD "is_correct" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "options" ADD "question_id" integer`);
        await queryRunner.query(`COMMENT ON COLUMN "options"."question_id" IS 'This is the question unique identifier'`);
        await queryRunner.query(`ALTER TABLE "users" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "quizes" ALTER COLUMN "is_active" SET DEFAULT '1'`);
        await queryRunner.query(`ALTER TABLE "questions" ADD CONSTRAINT "FK_46b3c125e02f7242662e4ccb307" FOREIGN KEY ("quiz_id") REFERENCES "quizes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "options" ADD CONSTRAINT "FK_2bdd03245b8cb040130fe16f21d" FOREIGN KEY ("question_id") REFERENCES "questions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "options" DROP CONSTRAINT "FK_2bdd03245b8cb040130fe16f21d"`);
        await queryRunner.query(`ALTER TABLE "questions" DROP CONSTRAINT "FK_46b3c125e02f7242662e4ccb307"`);
        await queryRunner.query(`ALTER TABLE "quizes" ALTER COLUMN "is_active" SET DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "created_at"`);
        await queryRunner.query(`COMMENT ON COLUMN "options"."question_id" IS 'This is the question unique identifier'`);
        await queryRunner.query(`ALTER TABLE "options" DROP COLUMN "question_id"`);
        await queryRunner.query(`ALTER TABLE "options" DROP COLUMN "is_correct"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "options" ADD "questionId" integer`);
        await queryRunner.query(`ALTER TABLE "options" ADD "isCorrect" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "questions" RENAME COLUMN "quiz_id" TO "quizId"`);
        await queryRunner.query(`ALTER TABLE "quizes" RENAME COLUMN "is_active" TO "isActive"`);
        await queryRunner.query(`ALTER TABLE "options" ADD CONSTRAINT "FK_46b668c49a6c4154d4643d875a5" FOREIGN KEY ("questionId") REFERENCES "questions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "questions" ADD CONSTRAINT "FK_35d54f06d12ea78d4842aed6b6d" FOREIGN KEY ("quizId") REFERENCES "quizes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
