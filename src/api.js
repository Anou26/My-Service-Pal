import axios from 'axios';

const API_URL = 'http://localhost:5000/api/';

export const getServices = async () => {
    try {
        const response = await axios.get(`${API_URL}services/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching services:', error);
        throw error;
    }
};

export const createService = async (service) => {
    try {
        const response = await axios.post(`${API_URL}services/`, service);
        return response.data;
    } catch (error) {
        console.error('Error creating service:', error);
        throw error;
    }
};

export const updateService = async (id, service) => {
    try {
        const response = await axios.put(`${API_URL}services/${id}`, service);
        return response.data;
    } catch (error) {
        console.error('Error updating service:', error);
        throw error;
    }
};

export const deleteService = async (id) => {
    try {
        await axios.delete(`${API_URL}services/${id}`);
    } catch (error) {
        console.error('Error deleting service:', error);
        throw error;
    }
};
