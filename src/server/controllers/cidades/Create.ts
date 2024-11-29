import e, { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';
import { validation } from "../../shared/middlewares";
import { ICidade } from "../../database/models";

interface IBodyProps extends Omit<ICidade, 'id'> {}

export const createValidation = validation((getScheme) => ({
    body: getScheme<IBodyProps>(yup.object().shape({
        nome: yup.string().required().min(3),
    })),
    query: getScheme<{}>(yup.object().shape({})),
    params: getScheme<{}>(yup.object().shape({})),
    headers: getScheme<{}>(yup.object().shape({}))
}));

export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {
    console.log(req.body);
    res.status(StatusCodes.CREATED).json(1);
};
