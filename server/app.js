import dotenv from 'dotenv';
import express from 'express';
import chalk from 'chalk';

dotenv.config();
const app = express();

const PORT = process.env.PORT || 4001;

app.get('/', (req, res)=>{
  res.json({
    status: 'success',
    data: 123
  })
})

app.listen(PORT, () => {
  console.log(`[server] Listening at http://localhost:${PORT}`);
});
