import dotenv from 'dotenv';
import app from './app';
import chalk from 'chalk';

import { Schema, model, connect } from 'mongoose';

dotenv.config();
const PORT = process.env.PORT || 4001;

connect(process.env.DB_CONN_STRING!).then((con) => {
  const host = con.connection.host;
  const port = con.connection.port;
  const database = con.connection.name;
  const version = con.version;
  console.log(
    `[mongodb] Connected at http://${host}:${port}/${database} (v${version})`
  );
});

app.listen(PORT, () => {
  console.log(`[server] Listening at`, chalk.yellow`http://localhost:${PORT}`);
});
