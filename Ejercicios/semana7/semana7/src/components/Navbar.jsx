import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className="site-header">
            <nav className="site-nav" aria-label="Navegacion principal">
                <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
                    Inicio
                </NavLink>
                <NavLink to="/landing" className={({ isActive }) => (isActive ? 'active' : '')}>
                    Landing
                </NavLink>
                <NavLink to="/invetario" className={({ isActive }) => (isActive ? 'active' : '')}>
                    Inventario
                </NavLink>
                <NavLink to="/contactenos" className={({ isActive }) => (isActive ? 'active' : '')}>
                    Contactenos
                </NavLink>
                <NavLink to="/acerca" className={({ isActive }) => (isActive ? 'active' : '')}>
                    Acerca
                </NavLink>
            </nav>
        </header>
    )
}

export default Navbar
