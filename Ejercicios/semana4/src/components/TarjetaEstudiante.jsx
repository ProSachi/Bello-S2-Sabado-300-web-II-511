const TarjetaEstudiante = () => {
    // 1. Definimos variables lógicas
    const nombre = "Carlos";
    const edad = 25;
    const esMayorDeEdad = true;

    // 2. Construimos la interfaz inyectando las variables
    return (
        <div className="tarjeta">
            {/* Inyección directa de texto */}
            <h2>Nombre: {nombre}</h2>

            {/* Operaciones matemáticas dentro de JSX */}
            <p>Edad en 5 años: {edad + 5}</p>

            {/* Evaluaciones lógicas simples */}
            <p>Estado legal: {esMayorDeEdad ? 'Adulto' : 'Menor'}</p>
        </div>
    );
};

export default TarjetaEstudiante;
