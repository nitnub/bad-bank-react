import mongoose from 'mongoose';

export const mongoConnect = () => {
  const URL = process.env.DB_CONN_STRING!;
  
  mongoose.connect(URL);

  mongoose.connection.on('open', async () => {
    const host = mongoose.connection.host;
    const port = mongoose.connection.port;
    const database = mongoose.connection.name;
    const version = mongoose.version;
    console.log(
      `[mongodb] Connected to http://${host}:${port}/${database} (v${version})`
    );
  });

  mongoose.connection.on('error', (err) => {
    console.log('[mongodb] Unable to connect to database. Error', err);
  });
};

export const mongoDisconnect = () => {
  if (!mongoose.connection) return;

  mongoose.disconnect();

  mongoose.connection.on('close', async () => {
    console.log('[mongodb] Disconnected from database');
  });
};
