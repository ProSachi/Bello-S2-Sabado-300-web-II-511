import React from 'react';
import { Globe, GitBranch, Mail, ShieldCheck } from 'lucide-react';

const Componente6 = () => {
  return (
    <section className="comp-container area-comp6">
      <div className="comp-header">
        <span className="comp-badge">6</span>
        <h2 className="comp-title">Enlaces & Contacto</h2>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.85rem' }}>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: 'var(--text-secondary)',
            textDecoration: 'none',
            padding: '0.4rem',
            borderRadius: '6px',
            backgroundColor: 'var(--bg-input)'
          }}
        >
          <GitBranch size={16} color="var(--accent)" />
          <span>Repositorio de Código</span>
        </a>

        <a
          href="mailto:estudiante@cesde.edu.co"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: 'var(--text-secondary)',
            textDecoration: 'none',
            padding: '0.4rem',
            borderRadius: '6px',
            backgroundColor: 'var(--bg-input)'
          }}
        >
          <Mail size={16} color="#10b981" />
          <span>Soporte Académico</span>
        </a>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: 'var(--text-secondary)',
            padding: '0.4rem',
            borderRadius: '6px',
            backgroundColor: 'var(--bg-input)'
          }}
        >
          <ShieldCheck size={16} color="#f59e0b" />
          <span>Versión v1.0.0 Stable</span>
        </div>
      </div>
    </section>
  );
};

export default Componente6;
