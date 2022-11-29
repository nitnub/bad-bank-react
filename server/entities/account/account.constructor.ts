// External dependencies
import { ObjectId } from 'mongoose';
import crypto from 'crypto';
// Class Implementation
export default class UserAccount {
  protected hash: string;
  protected salt: string;
  constructor(
    public name: string,
    public email: string,
    public password: string,
    public balance: number,
    public _id?: ObjectId
  ) {
    // Test hash functions!
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(this.password, this.salt, 1000, 64, `sha512`).toString(`hex`);
  
  }

  setPassword = (password: string) => {};
  // Test hash functions!
  isValidPassword = (password: string) =>{
    const testHash = crypto.pbkdf2Sync(password,  
      this.salt, 1000, 64, `sha512`).toString(`hex`); 
      return this.hash === testHash; 

  }

 getUser= () => {
  return {
    name: this.name,
    email: this.email,
    password: this.password,
    balance: this.balance,
    salt: this.salt,
    hash: this.hash,
  

  }
 }
}
// Test hash functions!
// require('crypto').createHash('sha256').update('my-password').digest("hex")

// this.salt = crypto.randomBytes(16).toString('hex');
// this.hash = crypto.pbkdf2Sync('my-password', this.salt, 1000, 64, `sha512`).toString(`hex`);

// this.hash = crypto.pbkdf2Sync('my-password', '49d14d592295a6de87a27ac5798268b0', 1000, 64, `sha512`).toString(`hex`);
