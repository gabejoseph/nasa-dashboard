import { FastifyInstance } from 'fastify';
import { fetchNearEarthObjects } from '../services/nasaApi';

// Simple in-memory cache
const cache: Record<string, { data: any; expires: number }> = {};

export const setRoutes = (app: FastifyInstance) => {
  app.get('/api/neo', async (request, reply) => {
    const { start_date, end_date } = request.query as { start_date: string; end_date: string };

    if (!start_date || !end_date) {
      reply.status(400).send({ error: 'start_date and end_date are required' });
      return;
    }

    const cacheKey = `${start_date}-${end_date}`;

    // Check cache
    const cached = cache[cacheKey];
    if (cached && cached.expires > Date.now()) {
      console.log(`Serving NEO data from cache for ${cacheKey}`);
      return cached.data;
    }

    try {
      console.log(`Fetching NEO data for ${cacheKey} from NASA API...`);
      const rawData = await fetchNearEarthObjects(start_date, end_date);

      // Flatten the near_earth_objects by date into a single array
      const neoArray = Object.values(rawData.near_earth_objects).flat();

      // Save in cache for 1 minute
      cache[cacheKey] = { data: neoArray, expires: Date.now() + 60_000 };
      console.log(`Caching NEO data for ${cacheKey}`);

      return neoArray;
    } catch (err) {
      console.error(`Error fetching NEO data for ${cacheKey}:`, err);
      reply.status(500).send({ error: 'Failed to fetch NEOs' });
    }
  });
};
