
const TarjetaEmpleado = (empleado) => {
    const {nombre, anioIngreso, especialidad} = empleado
  return (
    <div className="tarjeta-empleado">
      <div className="tarjeta-header-emp">
        <div className="avatar-emp">{nombre.charAt(0).toUpperCase()}</div>
      </div>
      <div className="tarjeta-body-emp">
        <h3 className="nombre-emp">{nombre}</h3>
        <div className="info-row-emp">
          <span className="label-emp">Año de Ingreso:</span>
          <span className="valor-emp">{anioIngreso}</span>
        </div>
        <div className="info-row-emp">
          <span className="label-emp">Especialidad:</span>
          <span className="valor-emp">{especialidad}</span>
        </div>
      </div>
      <div className="tarjeta-footer-emp">
        <button className="btn-contacto">Contactar</button>
      </div>
    </div>
  )
}

export default TarjetaEmpleado