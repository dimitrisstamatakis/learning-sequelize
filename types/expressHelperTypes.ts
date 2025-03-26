import { HttpError } from 'errors/HttpError.js';
import { NextFunction, Request, Response } from 'express';

export type ExpressMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => void;

export type ExpressErrorHandlerMiddleware = (
    err: HttpError,
    req: Request,
    res: Response,
    next: NextFunction
) => void;
