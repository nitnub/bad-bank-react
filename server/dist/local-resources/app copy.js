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
// import * as dal from './dal';
// import { Account } from './models/interfaces';
// import { collections, connectToDatabase } from './services/database.service';
// import Account from './models/accountModel';
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = process.env.PORT || 4001;
// connectToDatabase();
// const testAcct = new Account('John Smith', 100, 'jsmith@gmail.com', 'pass1234');
app.post('/api/create-account', (req, res) => {
    // const newAccount = collections.accounts
    //   ?.insertOne(testAcct)
    //   .then((result) => console.log(result));
    res.status(200).json({
        status: 'success',
        // data: newAccount,
    });
});
app.post('/api/balance', (req, res) => {
    const id = req.body.id;
    res.status(200).json({
        status: 'success',
        data: 'Create a new account',
    });
});
app.post('/api/withdraw', (req, res) => {
    res.status(200).json({
        status: 'success',
        data: 'withdraw money',
    });
});
app.post('/api/deposit', (req, res) => {
    res.status(200).json({
        status: 'success',
        data: 'deposit money',
    });
});
app.get('/api/history', (req, res) => {
    res.status(200).json({
        status: 'success',
        data: 'get account history',
    });
});
app.get('/api/all-data', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const data = await collections.accounts?.find({}).toArray();
    res.status(200).json({
        status: 'success',
        // data: 'Get all customer data',
        // data,
    });
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
