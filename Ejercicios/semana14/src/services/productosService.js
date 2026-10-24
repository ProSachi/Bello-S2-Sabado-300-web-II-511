import { apiClient } from '../api/apiClient';

export const productosService = {
  obtenerProductos: async () => {
    // El token se inyecta automáticamente gracias al apiClient
    const respuesta = await apiClient.get('/productos');
    return respuesta.data;
  },
  
  crearProducto: async (nuevoProducto) => {
    const respuesta = await apiClient.post('/productos', nuevoProducto);
    return respuesta.data;
  }
};
