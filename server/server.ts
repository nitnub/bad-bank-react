import dotenv from 'dotenv';
import app from './app';
import chalk from 'chalk';
import {mongoConnect} from './config/dbconfig'


dotenv.config();

const PORT = process.env.PORT || 4001;

mongoConnect()

app.listen(PORT, () => {
  console.log(`[server] Listening at`, chalk.yellow`http://localhost:${PORT}`);
});
