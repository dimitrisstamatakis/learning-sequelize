import { getReasonPhrase } from 'http-status-codes';

export class HttpError extends Error {
    statusCode: number;

    constructor(statusCode: number, message?: string) {
        super(message || getReasonPhrase(statusCode));
        this.name = 'HttpError';
        this.statusCode = statusCode;
    }
}
