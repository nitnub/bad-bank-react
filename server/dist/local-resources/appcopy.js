"use strict";
// import dotenv from 'dotenv';
// import express, { Request, Response } from 'express';
// import chalk from 'chalk';
// // import * as dal from './dal';
// // import { Account } from './models/interfaces';
// // import { collections, connectToDatabase } from './services/database.service';
// // import Account from './models/accountModel';
// dotenv.config();
// const app = express();
// app.use(express.json());
// const PORT = process.env.PORT || 4001;
// // connectToDatabase();
// // const testAcct = new Account('John Smith', 100, 'jsmith@gmail.com', 'pass1234');
// app.post('/api/create-account', (req: Request, res: Response) => {
//   // const newAccount = collections.accounts
//   //   ?.insertOne(testAcct)
//   //   .then((result) => console.log(result));
//   res.status(200).json({
//     status: 'success',
//     // data: newAccount,
//   });
// });
// app.post('/api/balance', (req: Request, res: Response) => {
//   const id = req.body.id;
//   res.status(200).json({
//     status: 'success',
//     data: 'Create a new account',
//   });
// });
// app.post('/api/withdraw', (req: Request, res: Response) => {
//   res.status(200).json({
//     status: 'success',
//     data: 'withdraw money',
//   });
// });
// app.post('/api/deposit', (req: Request, res: Response) => {
//   res.status(200).json({
//     status: 'success',
//     data: 'deposit money',
//   });
// });
// app.get('/api/history', (req: Request, res: Response) => {
//   res.status(200).json({
//     status: 'success',
//     data: 'get account history',
//   });
// });
// app.get('/api/all-data', async (req: Request, res: Response) => {
//   // const data = await collections.accounts?.find({}).toArray();
//   res.status(200).json({
//     status: 'success',
//     // data: 'Get all customer data',
//     // data,
//   });
// });
// app.all('*', (req: Request, res: Response) => {
//   res.status(200).json({
//     status: 'fail',
//     data: 'route not available',
//   });
// });
// app.listen(PORT, () => {
//   console.log(`[server] Listening at`, chalk.yellow`http://localhost:${PORT}`);
// });
