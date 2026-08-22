import { usuarioData } from '../mocks/usuarioMock';
import estilos from './PanelUsuario.module.css';

export function PanelUsuario() {
    // Desestructuración para código más limpio
    const { perfil, suscripcion, tieneNotificaciones } = usuarioData;

    return (
        <article className={estilos.panel}>
            <h2>{perfil.nombre} {perfil.apellido}</h2>
            
            {/* Inyección de variable en atributo HTML (src, alt) */}
            <img 
              src={perfil.avatar} 
              alt={`Foto de ${perfil.nombre}`} 
              width="50" 
            />
            <div>
                <p>Nivel de cuenta:</p>
                <span className={estilos.etiquetaPlan}>{suscripcion.plan}</span>
            </div>

            {/* Condicional 1: Cortocircuito (AND). Solo mostrar si hay notificaciones */}
            {tieneNotificaciones && (
                <p style={{ color: 'orange' }}>🔔 Tienes mensajes sin leer.</p>
            )}

            {/* Condicional 2: Ternario. Cambiar estructura basada en diasRestantes */}
            {suscripcion.activa ? (
                suscripcion.diasRestantes <= 5 ? (
                    <div className={estilos.alertaPeligro}>
                        ¡Atención! Tu suscripción expira en {suscripcion.diasRestantes} días.
                    </div>
                ) : (
                    <p>Suscripción al día.</p>
                )
            ) : (
                <button>Renovar Suscripción</button>
            )}
        </article>
    );
}
