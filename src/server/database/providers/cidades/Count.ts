import { number } from "yup";
import { ETableNames } from "../../ETableNames";
import { knex } from "../../knex";


export const count = async (filter: string = ''):Promise<number|Error> => {
    
    try {
        const [{count}] = await knex(ETableNames.CIDADE)
        .where('nome', 'like', `%${filter}%`)
        .count<[{count: number}]>('* as count');
        
        if (Number.isInteger(Number(count))) return Number(count);
        return new Error("Erro ao consultar a quantidade total de registros");
    }
    catch (error) {
        console.error(error);
        return new Error("Erro ao consultar a quantidade total de registros");
    }
};