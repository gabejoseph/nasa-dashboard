import axios from 'axios';
// import { NEOResponse } from '../types';

const NASA_API_KEY = 'nKLzcKNydwHSMQ4sIMvHQang1HKOhq3ieNqQR6y1';
const NASA_API_URL = 'https://api.nasa.gov/neo/rest/v1/feed';

export const fetchNearEarthObjects = async (start_date: string, end_date: string): Promise<any> => {
    try {
        const response = await axios.get(NASA_API_URL, {
            params: {
                start_date,
                end_date,
                api_key: NASA_API_KEY,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching NEOs:', error);
        throw new Error('Failed to fetch NEOs from NASA API');
    }
};