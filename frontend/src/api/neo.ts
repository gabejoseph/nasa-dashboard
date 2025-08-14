import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api/neo';

export const fetchNeoData = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data; // This will already be your NEO array
  } catch (error) {
    console.error('Error fetching NEO data:', error);
    throw error;
  }
};
