import axios from 'axios';

const BASE_URL = 'http://localhost:8080/stone'; 

export const getAllStone = () => {
    return axios.get(`${BASE_URL}`);
};

export const getStone = (id) => {
    return axios.get(`${BASE_URL}/${id}`);
};

export const createStone = (StoneData) => {
    return axios.post(`${BASE_URL}, stoneData`);
};

export const updateStone = (id, StoneData) => {
    return axios.put(`${BASE_URL}/${id}, stoneData`);
};

export const deleteStone = (id) => {
    return axios.delete(`${BASE_URL}/${id}`);
};