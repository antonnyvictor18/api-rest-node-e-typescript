import { knex } from "../../knex";
import { ICidade } from "../../models";
import { ETableNames } from "../../ETableNames";

export const create = async (cidade: Omit<ICidade, 'id'>):Promise<number|Error> => {
    
    try {
        const [result] = await knex(ETableNames.CIDADE).insert(cidade).returning('id');
        if (typeof result === 'object') {
            return result.id;   
        }
        else if (typeof result === 'number') {
            return result;
        }
        return new Error("Erro ao criar cidade");
    }
    catch (error) {
        console.error(error);
        return new Error("Erro ao criar cidade");
    }
};
