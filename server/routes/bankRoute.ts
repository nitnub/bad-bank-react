import express, { Router } from 'express';
import {
  createAccount,
  getBalance,
  deposit,
  withdraw,
  getAcctHistory,
  getAllData,
  undeclaredRoute,
} from '../entities/account/account.controller';

const router: Router = Router();

router.route('/deposit').post(deposit);
router.route('/create-account').post(createAccount);
router.route('/balance').get(getBalance);
router.route('/withdraw').post(withdraw);
router.route('/history').get(getAcctHistory);
router.route('/all-data').get(getAllData);

module.exports = router;
