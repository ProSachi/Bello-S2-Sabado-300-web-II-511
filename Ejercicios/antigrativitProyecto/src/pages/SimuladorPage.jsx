import React, { useState } from 'react';
import { Cpu, Play, RefreshCw, Sliders, Activity, Info } from 'lucide-react';

const SimuladorPage = () => {
  const [params, setParams] = useState({
    frecuencia: 50,
    amplitud: 75,
    modo: 'estándar'
  });

  const [isRunning, setIsRunning] = useState(false);
  const [simResults, setSimResults] = useState(null);

  const handleSimulate = () => {
    setIsRunning(true);
    setSimResults(null);
    setTimeout(() => {
      setIsRunning(false);
      setSimResults({
        eficiencia: (Math.random() * 20 + 80).toFixed(2),
        latencia: Math.floor(Math.random() * 15 + 5),
        rendimiento: 'Óptimo'
      });
    }, 1500);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Title Header */}
      <div className="comp-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <div
            style={{
              padding: '0.6rem',
              backgroundColor: 'rgba(99, 102, 241, 0.15)',
              borderRadius: '10px',
              color: 'var(--accent)'
            }}
          >
            <Cpu size={28} />
          </div>
          <div>
            <h1 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-primary)' }}>
              Módulo Simulador Interactiva
            </h1>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
              Componente inicial preparado para la próxima fase de implementación lógica.
            </p>
          </div>
        </div>

        <span
          style={{
            backgroundColor: 'rgba(245, 158, 11, 0.15)',
            color: '#f59e0b',
            border: '1px solid #f59e0b',
            padding: '0.35rem 0.75rem',
            borderRadius: '20px',
            fontSize: '0.82rem',
            fontWeight: 700
          }}
        >
          Próxima Implementación
        </span>
      </div>

      {/* Simulator Control Board */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {/* Controls Column */}
        <div className="comp-container">
          <div className="comp-header">
            <Sliders size={18} color="var(--accent)" />
            <h2 className="comp-title">Parámetros de Simulación</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', marginBottom: '0.4rem' }}>
                <label>Frecuencia de Procesamiento ({params.frecuencia} Hz)</label>
              </div>
              <input
                type="range"
                min="10"
                max="100"
                value={params.frecuencia}
                onChange={e => setParams({ ...params, frecuencia: Number(e.target.value) })}
                style={{ width: '100%', accentColor: 'var(--accent)', cursor: 'pointer' }}
              />
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', marginBottom: '0.4rem' }}>
                <label>Amplitud de Datos ({params.amplitud} %)</label>
              </div>
              <input
                type="range"
                min="1"
                max="100"
                value={params.amplitud}
                onChange={e => setParams({ ...params, amplitud: Number(e.target.value) })}
                style={{ width: '100%', accentColor: 'var(--accent)', cursor: 'pointer' }}
              />
            </div>

            <div>
              <label style={{ fontSize: '0.88rem', display: 'block', marginBottom: '0.4rem', fontWeight: 600 }}>
                Modo de Ejecución
              </label>
              <select
                value={params.modo}
                onChange={e => setParams({ ...params, modo: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.6rem',
                  borderRadius: '8px',
                  backgroundColor: 'var(--bg-input)',
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border-color)',
                  outline: 'none'
                }}
              >
                <option value="estándar">Modo Estándar</option>
                <option value="alto-rendimiento">Alto Rendimiento</option>
                <option value="ahorro">Ahorro de Recursos</option>
              </select>
            </div>

            <button
              onClick={handleSimulate}
              disabled={isRunning}
              style={{
                marginTop: '0.5rem',
                padding: '0.75rem',
                backgroundColor: 'var(--accent)',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '0.95rem',
                cursor: isRunning ? 'wait' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem'
              }}
            >
              {isRunning ? (
                <>
                  <RefreshCw className="animate-spin" size={18} />
                  <span>Simulando...</span>
                </>
              ) : (
                <>
                  <Play size={18} />
                  <span>Ejecutar Simulación</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Results / Screen Preview Column */}
        <div className="comp-container" style={{ display: 'flex', flexDirection: 'column' }}>
          <div className="comp-header">
            <Activity size={18} color="#10b981" />
            <h2 className="comp-title">Monitor de Salida</h2>
          </div>

          <div
            style={{
              backgroundColor: 'var(--bg-input)',
              borderRadius: '8px',
              padding: '1.25rem',
              border: '1px solid var(--border-color)',
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center'
            }}
          >
            {isRunning ? (
              <div>
                <RefreshCw size={36} color="var(--accent)" style={{ margin: '0 auto 1rem auto' }} />
                <p style={{ fontWeight: 600 }}>Procesando vectores de simulación...</p>
              </div>
            ) : simResults ? (
              <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h3 style={{ color: '#10b981', fontSize: '1.2rem', fontWeight: 700 }}>
                  Simulación Finalizada
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.5rem' }}>
                  <div style={{ padding: '0.5rem', backgroundColor: 'var(--bg-card)', borderRadius: '6px' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Eficiencia</span>
                    <strong style={{ display: 'block', fontSize: '1rem', color: 'var(--text-primary)' }}>
                      {simResults.eficiencia}%
                    </strong>
                  </div>
                  <div style={{ padding: '0.5rem', backgroundColor: 'var(--bg-card)', borderRadius: '6px' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Latencia</span>
                    <strong style={{ display: 'block', fontSize: '1rem', color: 'var(--text-primary)' }}>
                      {simResults.latencia} ms
                    </strong>
                  </div>
                  <div style={{ padding: '0.5rem', backgroundColor: 'var(--bg-card)', borderRadius: '6px' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Estado</span>
                    <strong style={{ display: 'block', fontSize: '1rem', color: '#10b981' }}>
                      {simResults.rendimiento}
                    </strong>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <Info size={36} color="var(--text-secondary)" style={{ margin: '0 auto 1rem auto' }} />
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  Configura los parámetros en el panel izquierdo y haz clic en <strong>Ejecutar Simulación</strong>.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimuladorPage;
