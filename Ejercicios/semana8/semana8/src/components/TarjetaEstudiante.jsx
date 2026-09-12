export function TarjetaEstudiante(props) {
    const {nombre, idBanner, carrera} = props
  return (
    <div className="tarjeta-estudiante">
      <div className="tarjeta-header">
        <div className="avatar">{nombre.charAt(0).toUpperCase()}</div>
      </div>
      <div className="tarjeta-body">
        <h3 className="nombre">{nombre}</h3>
        <div className="info-row">
          <span className="label">Código:</span>
          <span className="valor">{idBanner}</span>
        </div>
        <div className="info-row">
          <span className="label">Carrera:</span>
          <span className="valor">{carrera}</span>
        </div>
      </div>
      <div className="tarjeta-footer">
        <button className="btn-ver">Ver Perfil</button>
      </div>
    </div>
  );
}
