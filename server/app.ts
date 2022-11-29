import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import chalk from 'chalk';
import UserAccount from './entities/account/account.constructor';
import router from './routes/bankRoute'
import undeclaredRouter from './routes/undeclaredRoute'
import {Account, accountSchema, IAccount} from './models/accountModel'

dotenv.config();
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 4001;

import { Schema, model, connect } from 'mongoose';



connect(process.env.DB_CONN_STRING!);
app.use('/api', router)
app.use('*', undeclaredRouter )

// app.get('/api/all-data', );


app.listen(PORT, () => {
  console.log(`[server] Listening at`, chalk.yellow`http://localhost:${PORT}`);
});
