import axios from 'axios';
import { NEOResponse } from '../types';

const NASA_API_KEY = 'DEMO_KEY'; // Replace with your actual API key
const NASA_API_URL = 'https://api.nasa.gov/neo/rest/v1/feed';

export const fetchNEOs = async (startDate: string, endDate: string): Promise<NEOResponse> => {
    try {
        const response = await axios.get(NASA_API_URL, {
            params: {
                start_date: startDate,
                end_date: endDate,
                api_key: NASA_API_KEY,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching NEOs:', error);
        throw new Error('Failed to fetch NEOs from NASA API');
    }
};