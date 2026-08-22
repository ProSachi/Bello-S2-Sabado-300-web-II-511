
function Perfil() {
    const userMock = { nombre: "Santiago", rol: "user", activo: false };
    return (
        // 1. Inyección de clase estática y dinámica
        <div className={`contenedor ${userMock.activo ? 'bg-gris' : 'bg-verde'}`}>

            {/* 2. Inyección de variables en texto */}
            <h1>Perfil de {userMock.nombre}</h1>

            {/* 3. Renderizado condicional de nodos DOM */}
            {userMock.rol === "admin" ? (
                <button>Panel de Control</button>
            ) : (
                <p>Usuario estándar sin permisos avanzados.</p>
            )}
        </div>
    );
}

export default Perfil
