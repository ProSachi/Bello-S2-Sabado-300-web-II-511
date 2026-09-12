
const TarjetaCurso = (props) => {
const {nombre, fase} = props
    return (
        <div>
            <p>titulo: {nombre}</p>
            <p>modulo: {fase}</p>
        </div >
    )
}

export default TarjetaCurso