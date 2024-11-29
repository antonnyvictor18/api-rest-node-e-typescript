import type { Knex } from "knex";
import { ETableNames } from "../ETableNames";

export async function up(knex: Knex) {
    return knex
    .schema
    .createTable(ETableNames.CIDADE, table => {
        table.bigIncrements('id').primary().index();
        table.string('nome', 150).index().notNullable();
        table.comment('Tabela usada para armazenar as cidades');
    }
    ).then(() => {
        console.log(`Tabela ${ETableNames.CIDADE} criada com sucesso.`);
    });
}


export async function down(knex: Knex) {
    return knex
    .schema
    .dropTable(ETableNames.CIDADE)
    .then(() => {
        console.log(`Tabela ${ETableNames.CIDADE} excluída com sucesso.`);
    });;
}

