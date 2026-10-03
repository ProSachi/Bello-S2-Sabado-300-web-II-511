import { Link, NavLink } from 'react-router-dom'
import { useAppContext } from '../hooks/useAppContext.jsx'

export function Navbar() {
  const { isAuthenticated, logout, toggleTheme, theme } = useAppContext()

  return (
    <header className="navbar">
      <Link className="brand" to="/">
        NewsLab
      </Link>

      <nav className="nav-links">
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/simulador">Simulador</NavLink>
        {isAuthenticated && <NavLink to="/admin-noticias">Noticias</NavLink>}
        {isAuthenticated && <NavLink to="/admin-carrousel">Carrusel</NavLink>}
      </nav>

      <div className="nav-actions">
        <button className="btn ghost" type="button" onClick={toggleTheme}>
          {theme === 'light' ? 'Modo oscuro' : 'Modo claro'}
        </button>
        {isAuthenticated ? (
          <button className="btn danger" type="button" onClick={logout}>
            Cerrar sesion
          </button>
        ) : (
          <Link className="btn primary" to="/auth">
            Entrar
          </Link>
        )}
      </div>
    </header>
  )
}
