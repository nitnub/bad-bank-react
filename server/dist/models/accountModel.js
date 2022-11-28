"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
// Class Implementation
class UserAccount {
    constructor(name, email, password, balance, _id) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.balance = balance;
        this._id = _id;
        this.setPassword = (password) => { };
        this.isValidPassword = (password) => {
            const testHash = crypto_1.default.pbkdf2Sync(password, this.salt, 1000, 64, `sha512`).toString(`hex`);
            return this.hash === testHash;
        };
        this.getUser = () => {
            return {
                name: this.name,
                email: this.email,
                password: this.password,
                balance: this.balance,
                salt: this.salt,
                hash: this.hash,
            };
        };
        this.salt = crypto_1.default.randomBytes(16).toString('hex');
        this.hash = crypto_1.default.pbkdf2Sync(this.password, this.salt, 1000, 64, `sha512`).toString(`hex`);
    }
}
exports.default = UserAccount;
// require('crypto').createHash('sha256').update('my-password').digest("hex")
// this.salt = crypto.randomBytes(16).toString('hex');
// this.hash = crypto.pbkdf2Sync('my-password', this.salt, 1000, 64, `sha512`).toString(`hex`);
// this.hash = crypto.pbkdf2Sync('my-password', '49d14d592295a6de87a27ac5798268b0', 1000, 64, `sha512`).toString(`hex`);
