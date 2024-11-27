import { get } from 'http';
import { create,createValidation} from './Create';
import { getAllValidation, getAll} from './GetAll';

export const CidadesController = {
    create,
    createValidation,
    getAllValidation,
    getAll,
}
