import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createOrphanages1602629436782 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "orphanages",
        columns: [
          {
            name: "id",
            type: "integer",
            unsigned: true, //only positives numbers
            isPrimary: true,
            isGenerated: true, //auto generation
            generationStrategy: "increment", //auto increment id
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "opening_hours",
            type: "varchar",
          },
          {
            name: "latitude",
            type: "decimal",
            scale: 10,
            precision: 2,
          },
          {
            name: "longitude",
            type: "decimal",
            scale: 10,
            precision: 2,
          },
          {
            name: "about",
            type: "text",
          },
          {
            name: "instructions",
            type: "text",
          },
          {
            name: "open_on_weekends",
            type: "boolean",
            default: false,
          },
        ],
      })
    );
  }
  //realizar as alteraçoes no banco de dados
  //criar tabela, criar campo, deletar, etc

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("orphanages");
  }
  //desfazer o q foi feito no metodo up
}
