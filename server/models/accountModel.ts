
import { Schema, model, connect } from 'mongoose';

// Create Account Interface.
export interface IAccount {
  name?: string;
  email: string;
  password?: string;
  balance?: number;
  salt?: string;
  hash?: string;
}

// Create Schema
export const accountSchema = new Schema<IAccount>({
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
export const Account = model<IAccount>('AccountTest', accountSchema);
