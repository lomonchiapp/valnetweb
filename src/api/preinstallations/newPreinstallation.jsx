import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;
const API_TOKEN = import.meta.env.VITE_API_TOKEN;
const API_DIR = '/api/v1/NewPreRegistro';

export const newPreinstallation = async (data) => {
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
