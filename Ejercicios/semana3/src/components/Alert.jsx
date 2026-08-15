export function Alert() {
    const tipo = "Alerta Crítica";
    const mensaje = "El servidor de base de datos no responde.";
    return (
        <div className="alerta-error">
            <strong>{tipo}: </strong> {mensaje}
        </div>
    );
}
