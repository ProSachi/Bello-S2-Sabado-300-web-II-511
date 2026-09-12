import empleados from "../data/empleados"
import TarjetaEmpleado from "./TarjetaEmpleado"

const ListaEmpleados = () => {
    return (
        <>
            {empleados.map((empleado) => (
                <TarjetaEmpleado key={empleado.id} nombre={empleado.nombre} anio={empleado.anioIngreso} especialidad={empleado.especialidad} />
            ))}
        </>
    )
}

export default ListaEmpleados