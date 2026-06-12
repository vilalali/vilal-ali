import axios from 'axios';

const isProd = import.meta.env.VITE_NODE_ENV === 'prod';

export const BACKEND_URL = isProd 
  ? import.meta.env.VITE_PROD_BACKEND_URL 
  : import.meta.env.VITE_LOCAL_BACKEND_URL || 'http://localhost:3001';

// Create an Axios instance
const api = axios.create({
  baseURL: `${BACKEND_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor to add JWT token if it exists
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default api;
