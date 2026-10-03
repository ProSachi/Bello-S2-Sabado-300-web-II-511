import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Newspaper, Calendar, ArrowRight, Settings, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Componente4 = () => {
  const { noticias } = useApp();
  const [selectedNoticia, setSelectedNoticia] = useState(null);

  return (
    <section className="comp-container area-comp4">
      <div className="comp-header" style={{ justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span className="comp-badge">4</span>
          <h2 className="comp-title">Sección de Noticias y Actualidad</h2>
        </div>
        <Link
          to="/admin/noticias"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.3rem',
            fontSize: '0.8rem',
            color: 'var(--accent)',
            textDecoration: 'none',
            fontWeight: 600
          }}
        >
          <Settings size={14} />
          <span>Gestionar Noticias</span>
        </Link>
      </div>

      {noticias.length === 0 ? (
        <p style={{ color: 'var(--text-secondary)' }}>No hay noticias disponibles en este momento.</p>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: '1rem'
          }}
        >
          {noticias.map(item => (
            <div
              key={item.id}
              style={{
                backgroundColor: 'var(--bg-input)',
                borderRadius: '8px',
                border: '1px solid var(--border-color)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
              }}
            >
              {item.image && (
                <div style={{ height: '130px', overflow: 'hidden' }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              )}

              <div style={{ padding: '0.9rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '0.4rem',
                    fontSize: '0.75rem',
                    color: 'var(--text-secondary)'
                  }}
                >
                  <span
                    style={{
                      backgroundColor: 'rgba(59, 130, 246, 0.15)',
                      color: 'var(--accent)',
                      padding: '0.15rem 0.5rem',
                      borderRadius: '4px',
                      fontWeight: 600
                    }}
                  >
                    {item.category}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                    <Calendar size={12} />
                    {item.date}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '0.4rem',
                    lineHeight: '1.3'
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.82rem',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.4',
                    marginBottom: '0.8rem',
                    flex: 1
                  }}
                >
                  {item.snippet}
                </p>

                <button
                  onClick={() => setSelectedNoticia(item)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    background: 'none',
                    border: 'none',
                    color: 'var(--accent)',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    padding: 0,
                    marginTop: 'auto'
                  }}
                >
                  <span>Leer más</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Detail Modal */}
      {selectedNoticia && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.7)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem'
          }}
          onClick={() => setSelectedNoticia(null)}
        >
          <div
            style={{
              backgroundColor: 'var(--bg-card)',
              borderRadius: '12px',
              border: '1px solid var(--border-color)',
              maxWidth: '550px',
              width: '100%',
              padding: '1.5rem',
              boxShadow: 'var(--card-shadow)',
              position: 'relative'
            }}
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedNoticia(null)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'none',
                border: 'none',
                color: 'var(--text-secondary)',
                cursor: 'pointer'
              }}
            >
              <X size={20} />
            </button>

            {selectedNoticia.image && (
              <img
                src={selectedNoticia.image}
                alt={selectedNoticia.title}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  marginBottom: '1rem'
                }}
              />
            )}

            <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.5rem', fontSize: '0.8rem' }}>
              <span
                style={{
                  backgroundColor: 'var(--accent)',
                  color: '#fff',
                  padding: '0.15rem 0.5rem',
                  borderRadius: '4px',
                  fontWeight: 600
                }}
              >
                {selectedNoticia.category}
              </span>
              <span style={{ color: 'var(--text-secondary)' }}>{selectedNoticia.date}</span>
            </div>

            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
              {selectedNoticia.title}
            </h2>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6' }}>
              {selectedNoticia.content || selectedNoticia.snippet}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Componente4;
