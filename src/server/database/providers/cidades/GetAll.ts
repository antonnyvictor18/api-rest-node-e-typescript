import { knex } from "../../knex";
import { ETableNames } from "../../ETableNames";
import { ICidade } from "../../models";

export const getAll = async (page: number, limit: number, filter: string, id = 0):Promise<ICidade[]|Error> => {
    
    try {
        const [result] = await knex(ETableNames.CIDADE)
        .select('*')
        .where('nome', 'like', `%${filter}%`)
        .offset((page -1)*limit)
        .limit(limit)   ;

        if (id > 0 && result.every((item: ICidade) => item.id !== id)){
            const resultById: ICidade = await knex(ETableNames.CIDADE)
            .select('*')
            .where('id', '=', id)
            .first();
            if (resultById) return [...result, resultById];
        } 
        return result;
        
    }
    catch (error) {
        console.error(error);
        return new Error("Erro ao consultar os registros");
    }
};
