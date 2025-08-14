import fastify from 'fastify';
import { setRoutes } from './routes/neo';

const server = fastify({ logger: true });

server.register(setRoutes);

const start = async () => {
  try {
    await server.listen(3000);
    console.log('Server is running at http://localhost:3000');
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();