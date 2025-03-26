import type { NextFunction, Request, Response } from 'express';
import type { ZodSchema } from 'zod';

export const validate =
    (schema: ZodSchema) =>
    (req: Request, res: Response, next: NextFunction) => {
        try {
            req.body = schema.parse(req.body); // ✅ auto-coerce if needed
            next();
        } catch (error) {
            if (error instanceof Error && 'errors' in error) {
                return res.status(400).json({
                    message: 'Validation Error',
                    errors: (error as any).errors,
                });
            }
            next(error);
        }
    };
