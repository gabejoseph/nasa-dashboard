import Fastify from 'fastify';
import fastifyCors from 'fastify-cors';
import { setRoutes } from './routes/neo';

const app = Fastify();

// Register CORS
app.register(fastifyCors, {
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],
});

setRoutes(app);

app.listen({ port: 3001 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
