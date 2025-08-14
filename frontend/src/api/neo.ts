import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api/neo';

export const fetchNeoData = async (date: string) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        start_date: date,
        end_date: date,
      },
    });
    return response.data; // This should now be the NEO array
  } catch (error) {
    console.error('Error fetching NEO data:', error);
    throw error;
  }
};
