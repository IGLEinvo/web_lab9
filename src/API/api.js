import axios from 'axios';

const BASE_URL = 'http://localhost:8080/Stones'; 

export const getAllStones = () => {
    return axios.get(`${BASE_URL}`);
};

export const getStones = (id) => {
    return axios.get(`${BASE_URL}/${id}`);
};

export const createStones = (StonesData) => {
    return axios.post(`${BASE_URL}, StonesData`);
};

export const updateStones = (id, StonesData) => {
    return axios.put(`${BASE_URL}/${id}, StonesData`);
};

export const deleteStones = (id) => {
    return axios.delete(`${BASE_URL}/${id}`);
};