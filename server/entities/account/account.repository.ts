import { Account } from '../../models/accountModel';
// let dal: { withdraw: (email: string, amount: number) => any };

const dal: any = {};

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

export default dal;
