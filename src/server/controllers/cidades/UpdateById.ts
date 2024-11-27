import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';
import { validation } from "../../shared/middlewares";


interface IParamProps {
    id?: number;
}

interface IBodyProps {
    nome: string;
}

export const updateByIdValidation = validation((getScheme) => ({
    params: getScheme<IParamProps>(yup.object().shape({
        id: yup.number().integer().required().moreThan(0),
    })),
    body: getScheme(yup.object().shape({
        nome: yup.string().required().min(3),
    })),
    query: getScheme(yup.object().shape({})),
    headers: getScheme(yup.object().shape({})),
}));

export const updateById = async (req: Request<IParamProps, {}, IBodyProps>, res: Response) => {
    console.log(req.params)
    console.log(req.body)
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Not implemented');
    return;
};
