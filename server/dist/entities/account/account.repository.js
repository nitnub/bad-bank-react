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
const accountModel_1 = require("../../models/accountModel");
// let dal: { withdraw: (email: string, amount: number) => any };
const account_constructor_1 = __importDefault(require("./account.constructor"));
const dal = {};
dal.createAccount = function (name, email, password, balance) {
    return __awaiter(this, void 0, void 0, function* () {
        const newAccountObject = new account_constructor_1.default(name, email, password, balance);
        const modeledAccount = new accountModel_1.Account(newAccountObject.getUser());
        return new Promise((resolve, reject) => {
            accountModel_1.Account.create(modeledAccount)
                .then((createdAccount) => resolve(createdAccount))
                .catch((error) => reject(error));
        });
    });
};
dal.getBalance = function (email) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            accountModel_1.Account.findOne({ email: { $eq: email } })
                .then((returnValue) => {
                if (!returnValue) {
                    throw Error(`Unable to find account for ${email}`);
                }
                resolve(returnValue);
            })
                .catch((error) => reject(error));
        });
    });
};
dal.deposit = function (email, amount) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            // const returnValue = await Account.findOneAndUpdate(
            accountModel_1.Account.findOneAndUpdate({ email }, { $inc: { balance: amount } }, { returnOriginal: false })
                .exec()
                .then((returnValue) => resolve(returnValue))
                .catch((error) => reject(error));
        });
    });
};
dal.withdraw = function (email, amount) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            accountModel_1.Account.findOne({ email })
                .then((acct) => {
                if (!acct)
                    throw Error('Unable to find account.');
                if (!acct.balance)
                    throw Error('Unable to verify account balance. Contact admin.');
                if (amount > acct.balance)
                    throw Error('Insufficient funds to complete transaction.');
                const newBalance = acct.balance - amount;
                const filter = { email };
                const update = { balance: newBalance };
                return accountModel_1.Account.findOneAndUpdate(filter, update, {
                    returnOriginal: false,
                });
            })
                .then((returnValue) => {
                resolve(returnValue);
            })
                .catch((error) => reject(error));
        });
    });
};
dal.getAllData = function () {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            accountModel_1.Account.find()
                .then((returnValue) => resolve(returnValue))
                .catch((error) => reject(error));
        });
    });
};
exports.default = dal;
