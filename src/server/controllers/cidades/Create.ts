import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';
import { validation } from "../../shared/middlewares";

interface ICidade {
    nome: string;
    estado: string;
}

interface IFilter {
    filter?: string;
}
export const createValidation = validation((getScheme) => ({
    body: getScheme<ICidade>(yup.object().shape({
        nome: yup.string().required().min(3),
        estado: yup.string().required().min(2),
    })),
    query: getScheme<IFilter>(yup.object().shape({
        filter: yup.string().optional().min(3),
    })),
    params: getScheme<{}>(yup.object().shape({})),
    headers: getScheme<{}>(yup.object().shape({}))
}));



export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {
    console.log(req.body);
    res.status(StatusCodes.CREATED).send('Created!');
};
