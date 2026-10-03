import React from 'react';
import { Info, CheckCircle, Code, Cpu } from 'lucide-react';

const Componente5 = () => {
  return (
    <section className="comp-container area-comp5">
      <div className="comp-header">
        <span className="comp-badge">5</span>
        <h2 className="comp-title">Información General y Especificaciones</h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
        <div
          style={{
            backgroundColor: 'var(--bg-input)',
            padding: '0.85rem',
            borderRadius: '8px',
            border: '1px solid var(--border-color)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.3rem', color: 'var(--accent)' }}>
            <Code size={16} />
            <strong style={{ fontSize: '0.88rem' }}>Arquitectura Modular</strong>
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
            Componentes 1 al 6 desacoplados e integrados en una única vista mediante React Grid.
          </p>
        </div>

        <div
          style={{
            backgroundColor: 'var(--bg-input)',
            padding: '0.85rem',
            borderRadius: '8px',
            border: '1px solid var(--border-color)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.3rem', color: '#10b981' }}>
            <CheckCircle size={16} />
            <strong style={{ fontSize: '0.88rem' }}>Validaciones Regex</strong>
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
            Inputs controlados en login, registro y formularios de administración con retroalimentación instantánea.
          </p>
        </div>

        <div
          style={{
            backgroundColor: 'var(--bg-input)',
            padding: '0.85rem',
            borderRadius: '8px',
            border: '1px solid var(--border-color)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.3rem', color: '#f59e0b' }}>
            <Cpu size={16} />
            <strong style={{ fontSize: '0.88rem' }}>Context Provider</strong>
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
            Gestión sincronizada de estado para sesión de usuario, tema claro/oscuro y datos en tiempo real.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Componente5;
