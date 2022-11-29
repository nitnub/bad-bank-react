import { Request, Response } from 'express';
import { assertIsError } from '../../utils/utilities';
import dal from './account.repository';

interface AccountRequest {
  name: string;
  email: string;
  password: string;
  balance: number;
}
export async function createAccount(req: Request, res: Response) {
  try {
    const { name, email, password, balance }: AccountRequest = req.body;
    const data = await dal.createAccount(name, email, password, balance);

    res.status(200).json({
      status: 'success',
      data,
    });
  } catch (err) {
    assertIsError(err);
    // if (typeof err === 'object') {

    // }
    res.status(400).json({
      status: 'failed',
      message: err.message,
    });
  }
}

export async function getBalance(req: Request, res: Response) {
  try {
    const data = await dal.getBalance(req.body.email);
    res.status(200).json({
      status: 'success',
      data,
    });
  } catch (err) {
    assertIsError(err);
    // const err = { message: '' };
    // interface Err {
    //   message: string
    // }
    // if (typeof error === 'string') {
    //   err.message = error;
    // } else err = error;
    // // if (error instanceof Err ) err.message = error.message;
    // // const message = err.message ? err.message : err;
    res.status(400).json({
      status: 'failed',
      message: err.message,
    });
  }
}

export async function deposit(req: Request, res: Response) {
  try {
    if (req.body.amount < 0) {
      throw Error('Transaction amount must be greater than $0.');
    }
    const data = await dal.deposit(req.body.email, req.body.amount);
    res.status(200).json({
      status: 'success',
      data,
    });
  } catch (err: unknown) {
    assertIsError(err);
    // // if (typeof err === 'object'){
    // // if (typeof err !== 'object'){
    //   const caughtError = {}
    // if (err instanceof Error){

    //    Object.keys(err).includes('message')
    

    // }
    res.status(400).json({
      status: 'failed',
      message: err.message,
    });
  }
}

export async function withdraw(req: Request, res: Response) {
  try {
    if (req.body.amount < 0) {
      throw Error('Transaction amount must be greater than $0.');
    }

    const data = await dal.withdraw(req.body.email, req.body.amount);
    res.status(200).json({
      status: 'success',
      data,
    });
  } catch (err) {
    assertIsError(err);
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
    const data = await dal.getAllData();
    res.status(200).json({
      status: 'success',
      data,
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
