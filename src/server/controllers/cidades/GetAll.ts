import { Request, Response } from "express";
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
    res.setHeader('acess-control-expose-headers', 'x-total-count');
    res.setHeader('x-total-count', 1);
    res.status(StatusCodes.OK).json([{
        id: 1,
        nome: "Sao Paulo",	
    }]);
    
    return;
};
