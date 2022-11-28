"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express, {Request, Response} = require('express');
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
// import jwt,  {VerifyErrors} from 'jsonwebtoken';
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const app = (0, express_1.default)();
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET;
const users = [
    {
        username: 'john',
        password: 'password123admin',
        role: 'admin',
    },
    {
        username: 'anna',
        password: 'password123member',
        role: 'member',
    },
    {
        username: 'bob',
        password: '123',
        role: 'member',
    },
];
let refreshTokens = [];
app.use(bodyParser.json());
// interface AccountRequest extends Request {
//   username: string;
//   password: string;
// }
app.post('/login', (req, res) => {
    // read username and password from request body
    // if (!req?.body.username || !req.body.password) {
    //   res.status(400).json({
    //     status: 'failure',
    //     data: 'must include username and login'
    //   })
    // }
    const { username, password } = req.body;
    // filter user from the users array by username and password
    const user = users.find((u) => {
        return u.username === username && u.password === password;
    });
    if (user) {
        // generate an access token
        const accessToken = jwt.sign({ username: user.username, role: user.role }, accessTokenSecret, { expiresIn: '20m' });
        const refreshToken = jwt.sign({ username: user.username, role: user.role }, refreshTokenSecret);
        refreshTokens.push(refreshToken);
        res.json({
            accessToken,
            refreshToken,
        });
    }
    else {
        res.send('Username or password incorrect');
    }
});
app.post('/token', (req, res) => {
    const { token } = req.body;
    if (!token) {
        return res.sendStatus(401);
    }
    if (!refreshTokens.includes(token)) {
        return res.sendStatus(403);
    }
    jwt.verify(token, refreshTokenSecret, (err, user) => {
        if (err) {
            return res.sendStatus(403);
        }
        const accessToken = jwt.sign({ username: user.username, role: user.role }, accessTokenSecret, { expiresIn: '20m' });
        res.json({
            accessToken,
        });
    });
});
app.post('/logout', (req, res) => {
    const { token } = req.body;
    refreshTokens = refreshTokens.filter((t) => t !== token);
    res.send('Logout successful');
});
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Authentication service started on port ${PORT}`);
});
