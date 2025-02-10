import express from 'express';
import cors from 'cors';
import { CarRoutes } from './routes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/cars', CarRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT} `);
});
