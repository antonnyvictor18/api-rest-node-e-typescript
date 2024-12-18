import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';
import { validation } from "../../shared/middlewares";
import { ICidade } from "../../database/models";


interface IParamProps {
    id?: number;
}

interface IBodyProps extends Omit<ICidade, 'id'> {}

export const updateByIdValidation = validation((getScheme) => ({
    params: getScheme<IParamProps>(yup.object().shape({
        id: yup.number().integer().required().moreThan(0),
    })),
    body: getScheme<IBodyProps>(yup.object().shape({
        nome: yup.string().required().min(3),
    })),
    query: getScheme(yup.object().shape({})),
    headers: getScheme(yup.object().shape({})),
}));

export const updateById = async (req: Request<IParamProps, {}, IBodyProps>, res: Response) => {
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
