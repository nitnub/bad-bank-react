import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import chalk from 'chalk';
import UserAccount from './models/accountModel';
// import * as mongoose from 'mongoose';

dotenv.config();
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 4001;

import { Schema, model, connect } from 'mongoose';

// Create Account Interface.
interface IAccount {
  name?: string;
  email: string;
  password?: string;
  balance?: number;
  salt?: string;
  hash?: string;
}

// Create Schema
const accountSchema = new Schema<IAccount>({
  name: {
    type: String,
    required: [true, '"Account" must contain field "name" (type: string).'],
  },
  email: {
    type: String,
    required: [true, '"Account" must contain field "email" (type: string).'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, '"Account" must contain field "password" (type: string).'],
  },
  balance: {
    type: Number,
    required: [true, '"Account" must contain field "balance" (type: number).'],
    min: [0, 'Balance cannot be negative.'],
  },
  salt: {
    type: String,
    required: [true, '"Account" must contain field "salt" (type: string).'],
  },
  hash: {
    type: String,
    required: [true, '"Account" must contain field "hash" (type: string).'],
  },
});

// Create  Model.
const Account = model<IAccount>('AccountTest', accountSchema);

// Connect to MongoDB

connect(process.env.DB_CONN_STRING!);

app.post('/api/create-account', async (req: Request, res: Response) => {
  try {
    // const name: string = req.body.name;
    // const email: string = req.body.email;
    // const password: string = req.body.password;
    // const balance = req.body.balance * 1 || 0;
    // const userAccount = new UserAccount(name, email, password, balance);
    const userAccount = new UserAccount(...Object.values(req.body));

    const testAccount = new Account(userAccount.getUser());

    const newAccount = await Account.create(testAccount);

    console.log(newAccount);

    res.status(200).json({
      status: 'success',
      data: newAccount,
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err.message,
    });
  }
});

app.get('/api/balance', async (req: Request, res: Response) => {
  try {
    const result = await Account.findOne({ email: { $eq: req.body.email } });
    res.status(200).json({
      status: 'success',
      data: result,
    });
  } catch (error) {
    const err = {message: ''};
    if (typeof err === 'string') error.message = err
    // const message = err.message ? err.message : err;
    res.status(400).json({
      status: 'failed',
      message: error.message,
    });
  }
});

app.post('/api/withdraw', async (req: Request, res: Response) => {
  try {
    const acct = await Account.findOne({ email: req.body.email });

    if (!acct) {
      throw Error;
    }
    if (acct.balance && acct.balance > req.body.amount) {
      const newBalance = acct.balance - req.body.amount;
      const filter = { email: req.body.email };
      const update = { balance: newBalance };
      const returnValue = await Account.findOneAndUpdate(filter, update, {
        returnOriginal: false,
      });

      res.status(200).json({
        status: 'success',
        data: returnValue,
      });
    } else {
      throw new Error('Insufficient funds to complete transaction');
    }
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err.message,
    });
  }
});

app.post('/api/deposit', async (req: Request, res: Response) => {
  try {
    const returnValue = await Account.findOneAndUpdate(
      { email: req.body.email },
      { $inc: { balance: req.body.amount } },
      { returnOriginal: false }
    ).exec();

    res.status(200).json({
      status: 'success',
      data: returnValue,
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err.message,
    });
  }
});

app.get('/api/history', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'success',
    data: 'get account history',
  });
});

app.get('/api/all-data', async (req: Request, res: Response) => {
  try {
    const accts = await Account.find();
    res.status(200).json({
      status: 'success',
      data: accts,
    });
  } catch (err) {
    res.status(400).json({
      status: 'failure',
      messge: err,
    });
  }
});

app.all('*', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'fail',
    data: 'route not available',
  });
});

app.listen(PORT, () => {
  console.log(`[server] Listening at`, chalk.yellow`http://localhost:${PORT}`);
});
