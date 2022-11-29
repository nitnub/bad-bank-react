"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const account_controller_1 = require("../entities/account/account.controller");
const router = (0, express_1.Router)();
router.route('/deposit').post(account_controller_1.deposit);
router.route('/create-account').post(account_controller_1.createAccount);
router.route('/balance').get(account_controller_1.getBalance);
router.route('/withdraw').post(account_controller_1.withdraw);
router.route('/history').get(account_controller_1.getAcctHistory);
router.route('/all-data').get(account_controller_1.getAllData);
exports.default = router;