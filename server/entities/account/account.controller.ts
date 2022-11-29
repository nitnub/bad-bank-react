import express, { Request, Response } from 'express';
import  UserAccount  from './account.constructor';
import { Account } from '../../models/accountModel';

export async function createAccount(req: Request, res: Response) {
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
}

export async function getBalance(req: Request, res: Response) {
  try {
    const result = await Account.findOne({ email: { $eq: req.body.email } });
    res.status(200).json({
      status: 'success',
      data: result,
    });
  } catch (error) {
    const err = { message: '' };
    if (typeof err === 'string') error.message = err;
    // const message = err.message ? err.message : err;
    res.status(400).json({
      status: 'failed',
      message: error.message,
    });
  }
}

export async function deposit(req: Request, res: Response) {
  try {

    if (req.body.amount < 0) {
      throw Error('Transaction amount must be greater than $0.')
    }
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
}

export async function withdraw(req: Request, res: Response) {
  try {
    const acct = await Account.findOne({ email: req.body.email });
    if (req.body.amount < 0) {
      throw Error('Transaction amount must be greater than $0.')
    }
    if (!acct) {
      throw Error('Unable to find account.');
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
}

export function getAcctHistory(req: Request, res: Response) {
  res.status(200).json({
    status: 'success',
    data: 'get account history',
  });
}

export async function getAllData(req: Request, res: Response) {
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
}

export function undeclaredRoute(req: Request, res: Response) {
  res.status(200).json({
    status: 'fail',
    data: 'route not available',
  });
}
