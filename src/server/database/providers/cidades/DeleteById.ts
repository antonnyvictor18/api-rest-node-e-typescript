import { knex } from "../../knex";
import { ETableNames } from "../../ETableNames";

export const deletById = async (id:number):Promise<void|Error> => {
    
    try {
        const result = await knex(ETableNames.CIDADE).where('id', '=', id).del();
        
        if (result > 0) return;

        
        return new Error("Erro ao deletar cidade");
    }
    catch (error) {
        console.error(error);
        return new Error("Erro ao deletar cidade");
    }
};
