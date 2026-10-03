import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { Sun, Moon, ArrowLeft } from 'lucide-react';

const AuthLayout = () => {
  const { theme, toggleTheme } = useApp();

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--bg-primary)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem 1rem',
        position: 'relative'
      }}
    >
      {/* AuthLayout Bar controls (Theme toggle & Return Home link - strictly NO Navbar / Footer) */}
      <div
        style={{
          position: 'absolute',
          top: '1.5rem',
          left: '1.5rem',
          right: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '0 auto',
          width: 'calc(100% - 3rem)'
        }}
      >
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            color: 'var(--text-secondary)',
            textDecoration: 'none',
            fontSize: '0.9rem',
            fontWeight: 500,
            padding: '0.4rem 0.8rem',
            borderRadius: '6px',
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-color)'
          }}
        >
          <ArrowLeft size={16} />
          <span>Volver al Inicio</span>
        </Link>

        <button
          onClick={toggleTheme}
          title={`Cambiar a modo ${theme === 'dark' ? 'Claro' : 'Oscuro'}`}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0.55rem',
            borderRadius: '8px',
            border: '1px solid var(--border-color)',
            backgroundColor: 'var(--bg-card)',
            color: 'var(--text-primary)',
            cursor: 'pointer'
          }}
        >
          {theme === 'dark' ? <Sun size={18} color="#f59e0b" /> : <Moon size={18} color="#6366f1" />}
        </button>
      </div>

      <div style={{ width: '100%', maxWidth: '460px', margin: 'auto' }}>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
