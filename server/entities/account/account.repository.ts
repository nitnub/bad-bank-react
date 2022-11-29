import { Account } from '../../models/accountModel';
// let dal: { withdraw: (email: string, amount: number) => any };
import UserAccount from './account.constructor';
const dal: any = {};

dal.createAccount = async function (
  name: string,
  email: string,
  password: string,
  balance: number
) {
  const newAccountObject = new UserAccount(name, email, password, balance);

  const modeledAccount = new Account(newAccountObject.getUser());
  return new Promise((resolve, reject) => {
    Account.create(modeledAccount)
      .then((createdAccount) => resolve(createdAccount))
      .catch((error) => reject(error));
  });
};

dal.getBalance = async function (email: string) {
  return new Promise((resolve, reject) => {
    Account.findOne({ email: { $eq: email } })
      .then((returnValue) => {
        if (!returnValue) {
          throw Error(`Unable to find account for ${email}`);
        }
        resolve(returnValue);
      })
      .catch((error) => reject(error));
  });
};

dal.deposit = async function (email: string, amount: number) {
  return new Promise((resolve, reject) => {
    // const returnValue = await Account.findOneAndUpdate(
    Account.findOneAndUpdate(
      { email },
      { $inc: { balance: amount } },
      { returnOriginal: false }
    )
      .exec()
      .then((returnValue) => resolve(returnValue))
      .catch((error) => reject(error));
  });
};

dal.withdraw = async function (email: string, amount: number) {
  return new Promise((resolve, reject) => {
    Account.findOne({ email })
      .then((acct) => {
        if (!acct) throw Error('Unable to find account.');
        if (!acct.balance)
          throw Error('Unable to verify account balance. Contact admin.');
        if (amount > acct.balance)
          throw Error('Insufficient funds to complete transaction.');

        const newBalance = acct.balance - amount;
        const filter = { email };
        const update = { balance: newBalance };
        return Account.findOneAndUpdate(filter, update, {
          returnOriginal: false,
        });
      })
      .then((returnValue) => {
        resolve(returnValue);
      })
      .catch((error) => reject(error));
  });
};

dal.getAllData = async function () {
  return new Promise((resolve, reject) => {
    Account.find()
      .then((returnValue) => resolve(returnValue))
      .catch((error) => reject(error));
  });
};

export default dal;
