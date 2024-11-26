import { query, RequestHandler } from 'express';
import { Schema, ValidationError } from 'yup';
import { StatusCodes } from 'http-status-codes';


type TProperty = 'body' | 'query' | 'params' | 'headers';

type TGetScheme = <T>(scheme: Schema<T>) => Schema<T>;

type TAllSchemes = Record<TProperty, Schema<any>>;

type TGetAllSchemes = (getScheme: TGetScheme) => TAllSchemes;

type TValidation = (getAllSchemes: TGetAllSchemes) => RequestHandler;

export const validation: TValidation = (getAllSchemes) =>  async (req,res,next) => {
        console.log('validation middleware');
        const schemes = getAllSchemes(scheme => scheme);
        const errorsResult: Record<TProperty, Record<string, string>> = {
            body: {},
            query: {},
            params: {},
            headers: {}
        };

        Object.entries(schemes).forEach(([key, scheme]) => {
            try {
                scheme.validateSync(req[key as TProperty], {abortEarly: false});
            }
            catch(err) {
                const yupError = err as ValidationError;
                const errors: Record<string, string> = {};
                if(yupError.inner.length === 0) {
                    yupError.errors.forEach((error) => {
                        errors.general = error;
                    });
                } else {
                    yupError.inner.forEach((error) => {
                        if(error.path === undefined) return;
                        errors[error.path] = error.message;
                    });
                }
                errorsResult[key as TProperty] = errors;
            }
        }
    );
    
    if(Object.entries(errorsResult).length === 0){
        next();
        return;
    }
    else {
        res.status(StatusCodes.BAD_REQUEST).json({errors: errorsResult});
        return;
    }
}   
