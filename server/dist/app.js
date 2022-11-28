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
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const chalk_1 = __importDefault(require("chalk"));
const accountModel_1 = __importDefault(require("./models/accountModel"));
// import * as mongoose from 'mongoose';
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = process.env.PORT || 4001;
const mongoose_1 = require("mongoose");
// Create Schema
const accountSchema = new mongoose_1.Schema({
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
const Account = (0, mongoose_1.model)('AccountTest', accountSchema);
// Connect to MongoDB
(0, mongoose_1.connect)(process.env.DB_CONN_STRING);
app.post('/api/create-account', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const name: string = req.body.name;
        // const email: string = req.body.email;
        // const password: string = req.body.password;
        // const balance = req.body.balance * 1 || 0;
        // const userAccount = new UserAccount(name, email, password, balance);
        const userAccount = new accountModel_1.default(...Object.values(req.body));
        const testAccount = new Account(userAccount.getUser());
        const newAccount = yield Account.create(testAccount);
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
}));
app.get('/api/balance', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield Account.findOne({ email: { $eq: req.body.email } });
        res.status(200).json({
            status: 'success',
            data: result,
        });
    }
    catch (error) {
        const err = { message: '' };
        if (typeof err === 'string')
            error.message = err;
        // const message = err.message ? err.message : err;
        res.status(400).json({
            status: 'failed',
            message: error.message,
        });
    }
}));
app.post('/api/withdraw', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const acct = yield Account.findOne({ email: req.body.email });
        if (!acct) {
            throw Error;
        }
        if (acct.balance && acct.balance > req.body.amount) {
            const newBalance = acct.balance - req.body.amount;
            const filter = { email: req.body.email };
            const update = { balance: newBalance };
            const returnValue = yield Account.findOneAndUpdate(filter, update, {
                returnOriginal: false,
            });
            res.status(200).json({
                status: 'success',
                data: returnValue,
            });
        }
        else {
            throw new Error('Insufficient funds to complete transaction');
        }
    }
    catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
}));
app.post('/api/deposit', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const returnValue = yield Account.findOneAndUpdate({ email: req.body.email }, { $inc: { balance: req.body.amount } }, { returnOriginal: false }).exec();
        res.status(200).json({
            status: 'success',
            data: returnValue,
        });
    }
    catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
}));
app.get('/api/history', (req, res) => {
    res.status(200).json({
        status: 'success',
        data: 'get account history',
    });
});
app.get('/api/all-data', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const accts = yield Account.find();
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
}));
app.all('*', (req, res) => {
    res.status(200).json({
        status: 'fail',
        data: 'route not available',
    });
});
app.listen(PORT, () => {
    console.log(`[server] Listening at`, chalk_1.default.yellow `http://localhost:${PORT}`);
});
