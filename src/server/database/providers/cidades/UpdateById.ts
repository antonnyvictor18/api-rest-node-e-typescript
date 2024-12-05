import { knex } from "../../knex";
import { ETableNames } from "../../ETableNames";
import { ICidade } from "../../models";

export const updateById = async (id:number, cidade: Omit<ICidade, 'id'>):Promise<void | Error> => {
    
    try {
        const result = await knex(ETableNames.CIDADE)
        .update(cidade)
        .where('id', '=', id);
        
        if (result) return;
        
        return new Error("Erro ao atualizar cidade");
    }
    catch (error) {
        console.error(error);
        return new Error("Erro ao atualizar cidade");
    }
};
