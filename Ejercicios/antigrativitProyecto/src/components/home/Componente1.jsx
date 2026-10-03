import React from 'react';
import { Sparkles, Layers, ShieldCheck } from 'lucide-react';

const Componente1 = () => {
  return (
    <section className="comp-container area-comp1">
      <div className="comp-header">
        <span className="comp-badge">1</span>
        <h2 className="comp-title">Banner de Bienvenida y Encabezado Principal</h2>
      </div>
      <div
        style={{
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(99, 102, 241, 0.15) 100%)',
          borderRadius: '10px',
          padding: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          border: '1px stroke rgba(59, 130, 246, 0.2)'
        }}
      >
        <div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
            Portal Web II - Desarrollo con React & Vite
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: '650px' }}>
            Plataforma modular con navegación centralizada en React Router, arquitectura de componentes dinámicos, gestión global de estado y diseño adaptable.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              backgroundColor: 'var(--bg-secondary)',
              padding: '0.5rem 0.8rem',
              borderRadius: '8px',
              fontSize: '0.85rem',
              fontWeight: 600,
              border: '1px solid var(--border-color)'
            }}
          >
            <Sparkles size={16} color="var(--accent)" />
            <span>React 19 + Vite</span>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              backgroundColor: 'var(--bg-secondary)',
              padding: '0.5rem 0.8rem',
              borderRadius: '8px',
              fontSize: '0.85rem',
              fontWeight: 600,
              border: '1px solid var(--border-color)'
            }}
          >
            <ShieldCheck size={16} color="#10b981" />
            <span>Regex Safe</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Componente1;
