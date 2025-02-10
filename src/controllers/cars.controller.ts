import { Request, Response } from 'express';

const cars: any[] = [];  // Aquí puedes simular una base de datos

const getCars = (req: Request, res: Response) => {
    res.json(cars);
};

const getCarById = (req: Request, res: Response) => {
    const car = cars.find(c => c.id === req.params.id);
    if (car) {
        res.json(car);
    } else {
        res.status(404).json({ message: 'Car not found' });
    }
};

const createCar = (req: Request, res: Response) => {
    const newCar = { ...req.body, id: `${Date.now()}` };
    cars.push(newCar);
    res.status(201).json(newCar);
};

const updateCar = (req: Request, res: Response) => {
    const index = cars.findIndex(c => c.id === req.params.id);
    if (index !== -1) {
        cars[index] = { ...cars[index], ...req.body };
        res.json(cars[index]);
    } else {
        res.status(404).json({ message: 'Car not found' });
    }
};

const deleteCar = (req: Request, res: Response) => {
    const index = cars.findIndex(c => c.id === req.params.id);
    if (index !== -1) {
        cars.splice(index, 1);
        res.status(204).end();
    } else {
        res.status(404).json({ message: 'Car not found' });
    }
};

export default {
    getCars,
    getCarById,
    createCar,
    updateCar,
    deleteCar,
}
