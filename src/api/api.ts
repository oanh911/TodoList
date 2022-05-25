import configs from './config';

const axios = require('axios');

export const todoAPI = axios.create({
    baseURL: configs.TODO_URL,
    headers: { "Content-Type": "application/json" },
});

export const userAPI = axios.create({
    baseURL: configs.AUTH_URL,
    headers: { "Content-Type": "application/json" },
});