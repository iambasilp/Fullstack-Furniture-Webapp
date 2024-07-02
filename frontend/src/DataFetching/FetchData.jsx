import axios from 'axios';

export const getFetchDataFromApi = async () => {
    try {
        const response = await axios.get('http://localhost:3000/products');
        if (!response.data) {
            throw new Error('Empty response');
        }
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};
