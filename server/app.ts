import express from 'express';
import router from './routes/bankRoute';
import undeclaredRouter from './routes/undeclaredRoute';

const app = express();
app.use(express.json());

app.use('/api', router);
app.use('*', undeclaredRouter);

// app.get('/api/all-data', );

export default app;
