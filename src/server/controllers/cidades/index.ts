import { create,createValidation} from './Create';
import { getAllValidation, getAll} from './GetAll';
import { getByIdValidation, getById} from './GetById';
import { updateById, updateByIdValidation } from './UpdateById';
import { deleteByIdValidation, deleteById } from './DeleteById';

export const CidadesController = {
    create,
    createValidation,
    getAllValidation,
    getAll,
    getByIdValidation,
    getById,
    updateById,
    updateByIdValidation,
    deleteByIdValidation,
    deleteById,
}
