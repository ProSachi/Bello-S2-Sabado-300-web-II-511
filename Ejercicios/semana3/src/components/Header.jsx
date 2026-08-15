export function Header() {
  const titulo = "Sistema de Gestión";
  const fecha = new Date().toLocaleDateString();

  return (
    // Se requiere un fragmento o contenedor principal
    <header>
      <nav>
        <h1>{titulo}</h1>
        <p>Fecha actual: {fecha}</p>
        <ul>
          <li>Inicio</li>
          <li>Reportes</li>
          <li>Configuración</li>
        </ul>
      </nav>
    </header>
  );
}
