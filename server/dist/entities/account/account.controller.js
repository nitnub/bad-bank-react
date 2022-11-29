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
const account_constructor_1 = __importDefault(require("./account.constructor"));
const accountModel_1 = require("../../models/accountModel");
const account_repository_1 = __importDefault(require("./account.repository"));
function createAccount(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // const name: string = req.body.name;
            // const email: string = req.body.email;
            // const password: string = req.body.password;
            // const balance = req.body.balance * 1 || 0;
            // const userAccount = new UserAccount(name, email, password, balance);
            const userAccount = new account_constructor_1.default(...Object.values(req.body));
            const testAccount = new accountModel_1.Account(userAccount.getUser());
            const newAccount = yield accountModel_1.Account.create(testAccount);
            console.log(newAccount);
            res.status(200).json({
                status: 'success',
                data: newAccount,
            });
        }
        catch (err) {
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
            const result = yield accountModel_1.Account.findOne({ email: { $eq: req.body.email } });
            res.status(200).json({
                status: 'success',
                data: result,
            });
        }
        catch (error) {
            const err = { message: '' };
            if (typeof error === 'string')
                err.message = error;
            // const message = err.message ? err.message : err;
            res.status(400).json({
                status: 'failed',
                message: error.message,
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
            // const returnValue = await Account.findOneAndUpdate(
            //   { email: req.body.email },
            //   { $inc: { balance: req.body.amount } },
            //   { returnOriginal: false }
            // ).exec();
            const data = yield account_repository_1.default.deposit(req.body.email, req.body.amount);
            res.status(200).json({
                status: 'success',
                data,
            });
        }
        catch (err) {
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
            res.status(400).json({
                status: 'failed',
                message: err.message,
            });
        }
    });
}
exports.withdraw = withdraw;
// export async function withdraw(req: Request, res: Response) {
//   try {
//     const acct = await Account.findOne({ email: req.body.email });
//     if (req.body.amount < 0) {
//       throw Error('Transaction amount must be greater than $0.');
//     }
//     if (!acct) {
//       throw Error('Unable to find account.');
//     }
//     if (acct.balance && acct.balance > req.body.amount) {
//       const newBalance = acct.balance - req.body.amount;
//       const filter = { email: req.body.email };
//       const update = { balance: newBalance };
//       const returnValue = await Account.findOneAndUpdate(filter, update, {
//         returnOriginal: false,
//       });
//       res.status(200).json({
//         status: 'success',
//         data: returnValue,
//       });
//     } else {
//       throw new Error('Insufficient funds to complete transaction');
//     }
//   } catch (err) {
//     res.status(400).json({
//       status: 'failed',
//       message: err.message,
//     });
//   }
// }
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
            const accts = yield accountModel_1.Account.find();
            res.status(200).json({
                status: 'success',
                data: accts,
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
