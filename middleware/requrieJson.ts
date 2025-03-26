import { NextFunction, Request, Response } from 'express';

export const requireJson = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const contentType = req.headers['content-type'];

    if (!contentType || !contentType.includes('application/json')) {
        return res
            .status(415)
            .json({ message: 'Content-Type must be application/json' });
    }

    next();
};
