import { Request, Response, NextFunction } from 'express';
import { ApiError } from '../utils';

const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    let statusCode = 500;
    let message = 'Internal Server Error';

    if (err instanceof ApiError) {
        statusCode = err.statusCode;
        message = err.message;
    }

    console.error(`[Error] ${statusCode} - ${message}`);

    res.status(statusCode).json({
        error: true,
        message,
    });
};


export default errorHandler;
