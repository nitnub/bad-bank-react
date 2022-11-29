"use strict";
// // External Dependencies
// import * as mongoDB from 'mongodb';
// import * as dotenv from 'dotenv';
// // Global Variables
// export const collections: { accounts?: mongoDB.Collection } = {};
// // Initialize Connection
// export async function connectToDatabase() {
//   dotenv.config();
//   // const USER_NAME = process.env.DATABASE_USER_NAME;
//   // const PASSWORD = process.env.DATABASE_PASSWORD;
//   // const URL = process.env.DB_CONN_STRING.replace("<PASSWORD>", PASSWORD).replace("<USER_NAME>", USER_NAME);
//   const URL = process.env.DB_CONN_STRING!;
//   const client: mongoDB.MongoClient = new mongoDB.MongoClient(URL);
//   await client.connect();
//   const db: mongoDB.Db = client.db(process.env.DB_NAME);
//   await db.command({
//     collMod: process.env.COLLECTION_NAME,
//     validator: {
//       $jsonSchema: {
//         bsonType: 'object',
//         required: ['name', 'balance', 'email', 'password', 'salt', 'hash'],
//         additionalProperties: false,
//         properties: {
//           _id: {},
//           name: {
//             bsonType: 'string',
//             description: 'Must include a name (type: string).',
//           },
//           balance: {
//             bsonType: 'number',
//             description: 'Must include a balance (type: number).',
//           },
//           email: {
//             bsonType: 'string',
//             description: 'Must include an email (type: string).',
//           },
//           password: {
//             bsonType: 'string',
//             description: 'Must include a password (type: string).',
//           },
//           salt: {
//             bsonType: 'string',
//             description: 'Must include a salt (type: string).',
//           },
//           hash: {
//             bsonType: 'string',
//             description: 'Must include a hash (type: string).',
//           },
//         },
//       },
//     },
//   });
//   const accountsCollection: mongoDB.Collection = db.collection(
//     process.env.COLLECTION_NAME!
//   );
//   collections.accounts = accountsCollection;
//   console.log(
//     `Successfully connected to database: ${db.databaseName} and collection: ${accountsCollection.collectionName}`
//   );
// }
