import { apiClient } from '../api/apiClient';

export const usuariosService = {
    obtenerUsuarios: async () => {
        const respuesta = await apiClient.get('/users');
        return respuesta.data;
    }
};
