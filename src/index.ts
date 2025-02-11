import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import express, { Request, Response, NextFunction } from 'express';

dotenv.config();

import { CarRoutes } from './routes';
import { ApiError } from './utils';
import { errorHandler } from './middlewares';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/cars', CarRoutes);

// 404 Not Found handler
app.use((req, res, next) => {
    next(new ApiError(404, 'Resource not found'));
});

// Custom error handler
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT} `);
});
