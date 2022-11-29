"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = exports.accountSchema = void 0;
const mongoose_1 = require("mongoose");
// Create Schema
exports.accountSchema = new mongoose_1.Schema({
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
exports.Account = (0, mongoose_1.model)('AccountTest', exports.accountSchema);
