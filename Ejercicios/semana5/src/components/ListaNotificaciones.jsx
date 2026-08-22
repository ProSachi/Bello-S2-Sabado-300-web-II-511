// 1. Arreglo local simulando una base de datos (Data Mocking)
import { notificaciones } from '../data/usuario'
export function ListaNotificaciones() {
    return (
        <section>
            <h2 className="tarjeta" >Alertas del Sistema</h2>
            {/* 2. Inyección de JS con {} y uso de .map() */}
            {notificaciones.map((notificacion) => (

                // 3. El contenedor PARENTE retornado por el map OBLIGATORIAMENTE lleva el 'key'
                <div key={notificacion.id} className="tarjeta-alerta">

                    {/* 4. Inyección de propiedades del objeto */}
                    <h4>{notificacion.titulo}</h4>

                    {/* Integración del tema anterior: Ternario dentro de la lista iterada */}
                    <span>Estado: {notificacion.leida ? 'Leída' : 'Pendiente'}</span>

                </div>
            ))}
        </section>
    );
}
