import express from 'express';
import bodyParser from 'body-parser';
import photographerRoute from './routes/photographer';

export let server: any;

async function createApp() {
  const app = express();
  app.use(bodyParser.json());
  app.use('/api/v1/photographer', photographerRoute);
  app.get('/', (_req, res, _next) => {
    return res.status(200).json({
      status: 'ok',
      version: '1.0.0',
    });
  });

  server = app.listen(8080, () => {
    console.log(`*** Server listening to port: ${8080}...`);
  });
}

createApp();