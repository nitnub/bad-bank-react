import express from 'express';
import cors from 'cors';
import router from './routes/bankRoute';
import undeclaredRouter from './routes/undeclaredRoute';

// Configuratinon
const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use('/api', router);
app.use('*', undeclaredRouter);

// app.get('/api/all-data', );

export default app;
