import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';
import { validation } from "../../shared/middlewares";
import { ICidade } from "../../database/models";
import { CidadesProvider } from "../../database/providers/cidades";
import { idText } from 'typescript';

interface IBodyProps extends Omit<ICidade, 'id'> {}

export const createValidation = validation((getScheme) => ({
    body: getScheme<IBodyProps>(yup.object().shape({
        nome: yup.string().required().min(3).max(150),
    })),
    query: getScheme<{}>(yup.object().shape({})),
    params: getScheme<{}>(yup.object().shape({})),
    headers: getScheme<{}>(yup.object().shape({}))
}));

export const create = async (req: Request<{}, {}, ICidade>, res: Response): Promise<void> => {
    try {
        const result = await CidadesProvider.create(req.body);
        if (result instanceof Error) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                errors: {
                    default: result.message,
                }
            });
            return;
        }
        res.status(StatusCodes.CREATED).json(result);;
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: (error as Error).message,
            }
        });
    }
};