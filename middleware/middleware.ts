import { limiter } from '@config/rateLimiter.config.js';
import compression from 'compression';
import cors from 'cors';
import express, { Application } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

export const setupMiddleware = (app: Application) => {
    app.use(helmet());
    app.use(cors());
    app.use(morgan('dev'));
    app.use(compression());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(limiter);
};
