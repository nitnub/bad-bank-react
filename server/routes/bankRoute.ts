import { Router } from 'express';
import {
  createAccount,
  getBalance,
  deposit,
  withdraw,
  getAcctHistory,
  getAllData,
} from '../entities/account/account.controller';

const router: Router = Router();

router.route('/deposit').post(deposit);
router.route('/create-account').post(createAccount);
router.route('/balance').get(getBalance);
router.route('/withdraw').post(withdraw);
router.route('/history').get(getAcctHistory);
router.route('/all-data').get(getAllData);

export default router;
