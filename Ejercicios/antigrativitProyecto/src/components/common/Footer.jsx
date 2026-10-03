import React from 'react';
import { Heart, Code2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-color)',
        marginTop: '3rem',
        padding: '2rem 1.5rem',
        color: 'var(--text-secondary)',
        fontSize: '0.9rem'
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.8rem',
          textAlign: 'center'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, color: 'var(--text-primary)' }}>
          <Code2 size={20} color="var(--accent)" />
          <span>Proyecto Web II - React + Vite & Context Provider</span>
        </div>
        <p>
          Arquitectura por componentes con layouts reutilizables, animación de autenticación y formulaciones controladas con Regex.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.85rem' }}>
          <span>Desarrollado con</span>
          <Heart size={14} color="#ef4444" fill="#ef4444" />
          <span>para Cesde 2026 - Sabados 300</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
