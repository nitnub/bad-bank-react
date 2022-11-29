"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.undeclaredRoute = exports.getAllData = exports.getAcctHistory = exports.withdraw = exports.deposit = exports.getBalance = exports.createAccount = void 0;
const utilities_1 = require("../../utils/utilities");
const account_repository_1 = __importDefault(require("./account.repository"));
function createAccount(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { name, email, password, balance } = req.body;
            const data = yield account_repository_1.default.createAccount(name, email, password, balance);
            res.status(200).json({
                status: 'success',
                data,
            });
        }
        catch (err) {
            (0, utilities_1.assertIsError)(err);
            // if (typeof err === 'object') {
            // }
            res.status(400).json({
                status: 'failed',
                message: err.message,
            });
        }
    });
}
exports.createAccount = createAccount;
function getBalance(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield account_repository_1.default.getBalance(req.body.email);
            res.status(200).json({
                status: 'success',
                data,
            });
        }
        catch (err) {
            (0, utilities_1.assertIsError)(err);
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
    });
}
exports.getBalance = getBalance;
function deposit(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (req.body.amount < 0) {
                throw Error('Transaction amount must be greater than $0.');
            }
            const data = yield account_repository_1.default.deposit(req.body.email, req.body.amount);
            res.status(200).json({
                status: 'success',
                data,
            });
        }
        catch (err) {
            (0, utilities_1.assertIsError)(err);
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
    });
}
exports.deposit = deposit;
function withdraw(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (req.body.amount < 0) {
                throw Error('Transaction amount must be greater than $0.');
            }
            const data = yield account_repository_1.default.withdraw(req.body.email, req.body.amount);
            res.status(200).json({
                status: 'success',
                data,
            });
        }
        catch (err) {
            (0, utilities_1.assertIsError)(err);
            res.status(400).json({
                status: 'failed',
                message: err.message,
            });
        }
    });
}
exports.withdraw = withdraw;
function getAcctHistory(req, res) {
    res.status(200).json({
        status: 'success',
        data: 'get account history',
    });
}
exports.getAcctHistory = getAcctHistory;
function getAllData(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield account_repository_1.default.getAllData();
            res.status(200).json({
                status: 'success',
                data,
            });
        }
        catch (err) {
            res.status(400).json({
                status: 'failure',
                messge: err,
            });
        }
    });
}
exports.getAllData = getAllData;
function undeclaredRoute(req, res) {
    res.status(200).json({
        status: 'fail',
        data: 'route not available',
    });
}
exports.undeclaredRoute = undeclaredRoute;
