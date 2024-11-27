import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';
import { validation } from "../../shared/middlewares";


interface IQueryProps {
    page?: number;
    limit?: number;
    filter?: string;
}

export const getAllValidation = validation((getScheme) => ({
    query: getScheme<IQueryProps>(yup.object().shape({
        page: yup.number().optional().moreThan(0),
        limit: yup.number().optional().moreThan(0),
        filter: yup.string().optional(),
    })),
    body: getScheme(yup.object().shape({})),
    params: getScheme(yup.object().shape({})),
    headers: getScheme(yup.object().shape({})),
}));

export const getAll = async (req: Request<{}, {}, {}, IQueryProps>, res: Response) => {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Not implemented');
    return;
};
