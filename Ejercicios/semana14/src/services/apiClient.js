import axios from 'axios';

// Se crea la instancia única
export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
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
