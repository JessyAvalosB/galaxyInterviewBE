import { ApiError } from '../utils';
import { COLLECTIONS } from '../constants/db.constants';
import { NextFunction, Request, Response } from 'express';
import {
    createDocument,
    deleteDocument,
    getAllDocuments,
    getDocumentById,
    updateDocument
} from '../db/queries';

const { CARS } = COLLECTIONS

const getCars = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const cars = await getAllDocuments(CARS)
        if (cars.length === 0) throw new ApiError(404, 'No cars found');
        res.status(200).json(cars);
    } catch (error) {
        next(error);
    }
};

const getCarById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const car = await getDocumentById(CARS, id);
        if (!car) throw new ApiError(404, 'Car not found');
        res.status(200).json(car);
    } catch (error) {
        next(error);
    }
};

const createCar = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const newCar = await createDocument(CARS, req.body);
        if (!newCar) throw new ApiError(500, 'Error creating car');
        res.status(201).json(newCar);
    } catch (error) {
        next(error);
    }
};

const updateCar = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { params: { id }, body } = req;
        const updatedCar = await updateDocument(CARS, id, body);
        res.status(200).json(updatedCar);
    } catch (error) {
        next(error);
    }
};

const deleteCar = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        await deleteDocument(CARS, id);
        res.status(200).json({ message: `Car with id: ${id}, deleted successfully` });
    } catch (error) {
        next(error);
    }
};

export default {
    getCars,
    getCarById,
    createCar,
    updateCar,
    deleteCar,
}
