export function Notificacion({ hayError, mensajeError }) {
  const estaCargando = true;
  hayError = true

  return (
    <div className="contenedor">
      {/* Ternario: Dos caminos posibles */}
      { estaCargando ? <p>Cargando datos...</p> : <p>Datos listos.</p> }
      
      {/* Cortocircuito (AND lógico): Un solo camino, muestra si se cumple la condición solo un camino */}
      { hayError && <div className="caja-roja">Error: {mensajeError}</div> }
    </div>
  );
}
