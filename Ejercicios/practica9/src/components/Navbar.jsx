import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './Navbar.css'

function Navbar() {
  const { user, isAuthenticated, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/catalogo')
  }

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <Link className="navbar__brand" to="/catalogo">
          Hogar Patitas
        </Link>

        <nav className="navbar__links">
          <NavLink
            to="/catalogo"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            Catalogo
          </NavLink>
          <NavLink
            to="/contactenos"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            Contactenos
          </NavLink>
        </nav>

        <div className="navbar__session">
          {isAuthenticated ? (
            <>
              <span className="navbar__user">Hola, {user.name}</span>
              <button type="button" onClick={handleLogout}>
                Cerrar sesion
              </button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/registro">Registro</Link>
            </>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar
