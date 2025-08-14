import { FastifyRequest, FastifyReply } from 'fastify';
import { fetchNearEarthObjects } from '../services/nasaApi';

export class NeoController {
  async getNearEarthObjects(request: FastifyRequest, reply: FastifyReply) {
    const { start_date, end_date } = request.query as { start_date: string; end_date: string };
    try {
      const data = await fetchNearEarthObjects(start_date, end_date);
      // Transform NASA API response for frontend
      const objects = Object.values(data.near_earth_objects)
        .flat()
        .map((obj: any) => ({
          name: obj.name,
          size: obj.estimated_diameter.meters.estimated_diameter_max,
          closeness: obj.close_approach_data[0]?.miss_distance.kilometers,
          velocity: obj.close_approach_data[0]?.relative_velocity.kilometers_per_hour,
        }));
      reply.send(objects);
    } catch (error) {
      reply.status(500).send({ error: 'Failed to fetch NEO data' });
    }
  }
}