export function FormularioLogin() {
    const procesarFormulario = (e) => {
        e.preventDefault();
        console.log("Enviando datos al servidor de forma silenciosa...");
    };
    return (
        <form onSubmit={procesarFormulario}>
            <input
                type="email"
                name="correo"
                placeholder="Correo"
                required
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                title="Ingresa un correo válido, por ejemplo: usuario@dominio.com"
            />
            <input
                type="password"
                name="contrasena"
                placeholder="Contraseña"
                required
                minLength="8"
                pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d]).{8,}"
                title="Usa mínimo 8 caracteres, una mayúscula, una minúscula, un número y un símbolo"
            />
            <button type="submit">Ingresar</button>
        </form>
    );
}
