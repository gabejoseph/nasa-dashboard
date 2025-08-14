import { FastifyInstance } from 'fastify';
import { NeoController } from '../controllers/neo';

export function setRoutes(app: FastifyInstance) {
  const neoController = new NeoController();
  app.get('/api/neo', neoController.getNearEarthObjects.bind(neoController));
}