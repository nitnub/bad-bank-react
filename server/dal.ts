import { Collection, Db, InsertOneResult, MongoClient, WithId } from 'mongodb';
import { Account } from './models/interfaces';
const URL: string = 'mongodb://localhost:27017';
let db: Db; // = null

// interface DataAbstractionLayer { create: (name: string, email: string, password: string) => Promise<Account> | string; all: () => Promise<Account> }
// interface DataAbstractionLayer { create?: (name: string, email: string, password: string) => InsertOneResult<Account>; all?: () => WithId<Document>[] }
// interface DataAbstractionLayer { create?: (name: string, email: string, password: string) => InsertOneResult<Account>; all?: () => WithId<Document>[] }
interface DataAbstractionLayer { create?: (name: string, email: string, password: string) => Promise<Account>; all?: () => Promise<Account>[] }

let dal: DataAbstractionLayer = {};
// connect to mongo
console.log('Mongo client file');
// MongoClient.connect(URL, { useUnifiedTopology: true }, (err, client) => {
// MongoClient.connect(URL, (err, client) => {
//   console.log('Connected successfully to db server');
//   if (!client) return console.log('No client found!');

//   // connect to myproject db
//   db = client.db('myproject');
// });

// MongoClient.connect(URL, { useUnifiedTopology: true }, (err, client) => {
MongoClient.connect(URL).then((client) => {
  console.log('Connected successfully to db server');
  if (!client) return console.log('No client found!');

  // connect to myproject db
  db = client.db('myproject');
});

dal.create = (name: string, email: string, password: string) => {
  return new Promise((resolve, reject) => {
    const collection: Collection<Account> = db.collection('users');
    const doc: Account = { name, email, password, balance: 0 };
    collection
      // .insertOne(doc, { w: 1 })
      .insertOne(doc)
      .then((doc) => {
        console.log('doc is...');
        resolve(doc);
      })
      .catch((error) => reject(error));
  });
};

// all users

dal.all = () => {
  return new Promise((resolve, reject) => {
    // const customers = db
    db.collection('users')
      .find({})
      .toArray()
      .then((results) => resolve(results))
      .catch((error) => reject(error));
  });
};

// module.exports = dal;
