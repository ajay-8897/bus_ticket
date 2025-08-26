import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // Adjust the base URL as needed

export const fetchCities = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/cities`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching cities');
    }
};

export const fetchBuses = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/buses`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching buses');
    }
};

export const bookTicket = async (ticketData: any) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/tickets`, ticketData);
        return response.data;
    } catch (error) {
        throw new Error('Error booking ticket');
    }
};