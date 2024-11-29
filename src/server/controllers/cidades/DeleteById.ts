import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';
import { validation } from "../../shared/middlewares";


interface IParamProps {
    id?: number;
}


export const deleteByIdValidation = validation((getScheme) => ({
    params: getScheme<IParamProps>(yup.object().shape({
        id: yup.number().integer().required().moreThan(0),
    })),
    body: getScheme(yup.object().shape({})),
    query: getScheme(yup.object().shape({})),
    headers: getScheme(yup.object().shape({})),
}));

export const deleteById = async (req: Request<IParamProps>, res: Response) => {
    
    if(Number(req.params.id) === 99999) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: 'Registro não encontrado',
            }
        });
        return;
    }

    res.status(StatusCodes.NO_CONTENT).send();
    return;
};
