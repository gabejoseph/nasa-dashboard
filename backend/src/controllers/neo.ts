import { FastifyRequest, FastifyReply } from 'fastify';
import { NEOService } from '../services/nasaApi';

export class NeoController {
    private neoService: NEOService;

    constructor() {
        this.neoService = new NEOService();
    }

    public async getNEOs(req: FastifyRequest, reply: FastifyReply): Promise<void> {
        const { start_date, end_date } = req.query;

        try {
            const data = await this.neoService.fetchNEOs(start_date as string, end_date as string);
            reply.send(data);
        } catch (error) {
            reply.status(500).send({ error: 'Failed to fetch NEOs' });
        }
    }
}