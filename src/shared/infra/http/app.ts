import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import '@shared/container';
import { AppError } from '@shared/error/appError';
import { routes } from './routes';

const app = express();

app.use(express.json());
app.use(routes);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {

    if (err instanceof AppError) {
        return response.status(err.statusCode).json({ status: 'Error', message: err.message });
    }

    return response.status(500).json({ status: 'error', message: 'Internal Server Error' });
})

export { app };
