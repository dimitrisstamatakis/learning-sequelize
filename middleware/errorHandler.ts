import { getReasonPhrase, StatusCodes } from 'http-status-codes';
import type { ExpressErrorHandlerMiddleware } from 'types/expressHelperTypes.js';
import { ZodError } from 'zod';

export const globalErrorHandler: ExpressErrorHandlerMiddleware = (
    err,
    _,
    res,
    __
) => {
    console.log('🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨');
    console.log('=== GLOBAL ERROR HANDLER ===');
    console.log('🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨');

    console.log('');
    console.error(err); // ✅ Log it (or use winston/pino later)

    // Handle Zod validation errors
    if (err instanceof ZodError) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            message: 'Validation Error',
            errors: err.errors,
        });
    }

    // Handle custom errors (like HttpError class)
    const status = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;

    res.status(status).json({
        status: 'error',
        message: err.message || getReasonPhrase(status),
    });
};
