import { Response } from 'express';
import { StatusCodes, getReasonPhrase } from 'http-status-codes';

export const sendSuccess = (
    res: Response,
    data: any,
    status = StatusCodes.OK
) => res.status(status).json({ status: 'success', data });

export const sendError = (
    res: Response,
    message = 'Unexpected error',
    status = StatusCodes.INTERNAL_SERVER_ERROR
) =>
    res
        .status(status)
        .json({ status: 'error', message, code: getReasonPhrase(status) });
