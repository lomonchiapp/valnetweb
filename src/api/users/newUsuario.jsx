import axios from 'axios';

export const newUsuario = async (data) => {
    const API_URL = '/api'; // Use the proxy path

const API_TOKEN = import.meta.env.VITE_API_TOKEN;
const API_DIR = '/v1/NewUser';

    try {
        const response = await axios.post(`${API_URL}${API_DIR}`, data, {
        headers: {
            Authorization: `Bearer ${API_TOKEN}`,
        },
        });
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}
