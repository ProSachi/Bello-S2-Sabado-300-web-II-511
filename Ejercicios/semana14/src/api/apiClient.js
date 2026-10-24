import axios from 'axios';

// Se crea la instancia única
export const apiClient = axios.create({
  baseURL: 'https://6ada65787512f497b3ffe957.mockapi.io/api/v1',
  timeout: 8000
});

// Se configura el interceptor único para esta instancia
apiClient.interceptors.request.use((config) => {
  const token = sessionStorage.getItem('token_acceso');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});
