import mongoose, { ConnectOptions } from 'mongoose';

interface CustomConnectOptions extends ConnectOptions {
  useUnifiedTopology: boolean;
  useNewUrlParser: boolean;
}

const DB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/daily-trends';

export function connection(){
  mongoose.connect(DB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  } as CustomConnectOptions);

  const db = mongoose.connection;

  db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
  db.once('open', () => {
    console.log('Conexión exitosa a MongoDB');
  });

  // Manejar un evento de cierre de conexión
  db.on('close', () => {
    console.log('Conexión cerrada a MongoDB');
  });
}


