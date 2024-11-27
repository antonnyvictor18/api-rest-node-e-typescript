import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';
import { validation } from "../../shared/middlewares";


interface IParamProps {
    id?: number;
}

export const getByIdValidation = validation((getScheme) => ({
    params: getScheme<IParamProps>(yup.object().shape({
        id: yup.number().integer().required().moreThan(0),
    })),
    body: getScheme(yup.object().shape({})),
    query: getScheme(yup.object().shape({})),
    headers: getScheme(yup.object().shape({})),
}));

export const getById = async (req: Request<IParamProps>, res: Response) => {
    console.log(req.params)
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Not implemented');
    return;
};
