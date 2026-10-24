import { useState, useEffect } from 'react';
import { productosService } from '../services/productosService';
import { usuariosService } from '../services/usuariosService';

export function PanelAdministrativo() {
    const [productos, setProductos] = useState([]);
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        const cargarDatos = async () => {
            try {
                const datosProductos = await productosService.obtenerProductos();
                const datosUsuarios = await usuariosService.obtenerUsuarios();
                setProductos(datosProductos);
                setUsuarios(datosUsuarios);
            } catch (error) {
                console.error("Fallo de red o seguridad:", error);
            }
        };
        cargarDatos();
    }, []);
    return (
        <div>
            <h2>Panel Central</h2>
            <p>Total Productos: {productos.length}</p>
            <p>Total Usuarios: {usuarios.length}</p>
        </div>
    );
}
