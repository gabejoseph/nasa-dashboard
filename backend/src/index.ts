import Fastify from 'fastify';
import { setRoutes } from './routes/neo';

const app = Fastify();

setRoutes(app);

app.listen({ port: 3001 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});