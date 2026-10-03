import React from 'react';
import { useApp } from '../../context/AppContext';
import { Shield, CheckCircle2, User, Key, Cpu, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Componente3 = () => {
  const { isLoggedIn, user, noticias, carouselImages } = useApp();

  return (
    <section className="comp-container area-comp3" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div className="comp-header">
        <span className="comp-badge">3</span>
        <h2 className="comp-title">Panel de Control & Accesos</h2>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', flex: 1 }}>
        {/* User Card */}
        <div
          style={{
            backgroundColor: 'var(--bg-input)',
            borderRadius: '8px',
            padding: '1rem',
            border: '1px solid var(--border-color)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
            <User size={18} color="var(--accent)" />
            <span style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-primary)' }}>
              Estado del Usuario
            </span>
          </div>

          {isLoggedIn ? (
            <div>
              <div style={{ fontSize: '0.85rem', color: '#10b981', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <CheckCircle2 size={14} /> Sesión Activa
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.3rem' }}>
                Conectado como: <strong>{user?.nombre || user?.email}</strong>
              </p>
            </div>
          ) : (
            <div>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '0.6rem' }}>
                No has iniciado sesión. Accede para administrar noticias y carrusel.
              </p>
              <Link
                to="/auth"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  fontSize: '0.82rem',
                  backgroundColor: 'var(--accent)',
                  color: '#fff',
                  padding: '0.35rem 0.75rem',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontWeight: 600
                }}
              >
                <Key size={14} />
                <span>Ingresar Ahora</span>
              </Link>
            </div>
          )}
        </div>

        {/* System Stats */}
        <div
          style={{
            backgroundColor: 'var(--bg-input)',
            borderRadius: '8px',
            padding: '1rem',
            border: '1px solid var(--border-color)'
          }}
        >
          <span style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-primary)', display: 'block', marginBottom: '0.75rem' }}>
            Resumen del Sistema
          </span>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.85rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)' }}>
              <span>Noticias cargadas:</span>
              <strong style={{ color: 'var(--text-primary)' }}>{noticias.length}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)' }}>
              <span>Imágenes carrusel:</span>
              <strong style={{ color: 'var(--text-primary)' }}>{carouselImages.length}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)' }}>
              <span>Validaciones:</span>
              <strong style={{ color: '#10b981' }}>Regex Activo</strong>
            </div>
          </div>
        </div>

        {/* Simulator Banner Shortcut */}
        <div
          style={{
            marginTop: 'auto',
            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(168, 85, 247, 0.2) 100%)',
            borderRadius: '8px',
            padding: '1rem',
            border: '1px dashed var(--accent)',
            textAlign: 'center'
          }}
        >
          <Cpu size={28} color="var(--accent)" style={{ margin: '0 auto 0.5rem auto' }} />
          <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.3rem' }}>Módulo Simulador</h4>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
            Próxima implementación para simulaciones en tiempo real.
          </p>
          <Link
            to="/simulador"
            style={{
              display: 'inline-block',
              fontSize: '0.8rem',
              color: 'var(--accent)',
              fontWeight: 700,
              textDecoration: 'none'
            }}
          >
            Ver Prototipo &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Componente3;
