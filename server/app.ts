import express from 'express';
import router from './routes/bankRoute';
import undeclaredRouter from './routes/undeclaredRoute';
import cors from 'cors'
const app = express();
app.use(express.json());
app.use(cors())
app.use('/api', router);
app.use('*', undeclaredRouter);

// app.get('/api/all-data', );

export default app;
