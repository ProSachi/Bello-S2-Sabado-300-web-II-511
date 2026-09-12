export function TarjetaEstudiante2({ nombre, idBanner, carrera }) {
  return (
    <div className="card">
      <h3>Nombre: {nombre}</h3>
      <p>Código: {idBanner}</p>
      <p>Carrera: {carrera} </p>
    </div>
  );
}
