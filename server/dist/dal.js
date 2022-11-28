"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const URL = 'mongodb://localhost:27017';
let db; // = null
let dal = {};
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
mongodb_1.MongoClient.connect(URL).then((client) => {
    console.log('Connected successfully to db server');
    if (!client)
        return console.log('No client found!');
    // connect to myproject db
    db = client.db('myproject');
});
dal.create = (name, email, password) => {
    return new Promise((resolve, reject) => {
        const collection = db.collection('users');
        const doc = { name, email, password, balance: 0 };
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
