import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import {
  Sun,
  Moon,
  Home,
  Cpu,
  Newspaper,
  Image as ImageIcon,
  UserCheck,
  LogOut,
  LogIn
} from 'lucide-react';

const Navbar = () => {
  const { theme, toggleTheme, user, isLoggedIn, logout } = useApp();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navLinks = [
    { label: 'Inicio', path: '/', icon: Home },
    { label: 'Simulador', path: '/simulador', icon: Cpu },
    { label: 'Admin Noticias', path: '/admin/noticias', icon: Newspaper },
    { label: 'Admin Carousel', path: '/admin/carousel', icon: ImageIcon }
  ];

  return (
    <header
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderBottom: '1px solid var(--border-color)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        boxShadow: 'var(--card-shadow)'
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0.85rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem'
        }}
      >
        {/* Brand / Logo */}
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            textDecoration: 'none',
            color: 'var(--text-primary)',
            fontWeight: 700,
            fontSize: '1.25rem'
          }}
        >
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              backgroundColor: 'var(--accent)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff'
            }}
          >
            <Cpu size={22} />
          </div>
          <span>Web II Portal</span>
        </Link>

        {/* Navigation Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
          {navLinks.map(link => {
            const Icon = link.icon;
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.45rem 0.85rem',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  backgroundColor: isActive ? 'var(--accent)' : 'transparent',
                  color: isActive ? '#ffffff' : 'var(--text-secondary)'
                }}
              >
                <Icon size={16} />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* User Controls & Theme Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            title={`Cambiar a modo ${theme === 'dark' ? 'Claro' : 'Oscuro'}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.5rem',
              borderRadius: '8px',
              border: '1px solid var(--border-color)',
              backgroundColor: 'var(--bg-input)',
              color: 'var(--text-primary)',
              cursor: 'pointer'
            }}
          >
            {theme === 'dark' ? <Sun size={18} color="#f59e0b" /> : <Moon size={18} color="#6366f1" />}
          </button>

          {/* User Auth Status */}
          {isLoggedIn ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.35rem 0.75rem',
                  backgroundColor: 'var(--bg-input)',
                  borderRadius: '20px',
                  border: '1px solid var(--border-color)',
                  fontSize: '0.85rem'
                }}
              >
                <UserCheck size={15} color="#10b981" />
                <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{user?.nombre || user?.email}</span>
              </div>
              <button
                onClick={handleLogout}
                title="Cerrar Sesión"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  padding: '0.45rem 0.75rem',
                  borderRadius: '6px',
                  border: 'none',
                  backgroundColor: '#ef4444',
                  color: '#fff',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                <LogOut size={15} />
                <span>Salir</span>
              </button>
            </div>
          ) : (
            <Link
              to="/auth"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.45rem 0.9rem',
                borderRadius: '6px',
                textDecoration: 'none',
                backgroundColor: 'var(--accent)',
                color: '#fff',
                fontSize: '0.88rem',
                fontWeight: 600
              }}
            >
              <LogIn size={16} />
              <span>Ingresar / Registro</span>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
