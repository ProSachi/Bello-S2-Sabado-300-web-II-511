import React, { useState } from 'react';
import FormInput from '../common/FormInput';
import { Mail, Send, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailRegex.test(email)) {
      setSubmitted(true);
    }
  };

  return (
    <div
      style={{
        backgroundColor: 'var(--bg-card)',
        borderRadius: '16px',
        border: '1px solid var(--border-color)',
        padding: '2.5rem',
        boxShadow: 'var(--card-shadow)',
        width: '100%'
      }}
    >
      <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
        Recuperar Contraseña
      </h2>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
        Ingresa tu correo registrado y te enviaremos instrucciones de recuperación
      </p>

      {submitted ? (
        <div style={{ textAlign: 'center', padding: '1rem 0' }}>
          <div
            style={{
              backgroundColor: 'rgba(16, 185, 129, 0.15)',
              border: '1px solid #10b981',
              color: '#10b981',
              padding: '1rem',
              borderRadius: '8px',
              fontSize: '0.9rem',
              fontWeight: 600,
              marginBottom: '1.5rem'
            }}
          >
            ¡Enlace de recuperación enviado a <strong>{email}</strong>! Revisa tu bandeja de entrada.
          </div>

          <Link
            to="/auth"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: 'var(--accent)',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '0.9rem'
            }}
          >
            <ArrowLeft size={16} />
            <span>Volver a Iniciar Sesión</span>
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <FormInput
            label="Correo Electrónico"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ejemplo@correo.com"
            regex={emailRegex}
            errorMessage="Ingresa un correo válido (ej: usuario@dominio.com)"
            required
            icon={Mail}
          />

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '0.75rem',
              backgroundColor: 'var(--accent)',
              color: '#ffffff',
              border: 'none',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '0.95rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              marginTop: '0.5rem'
            }}
          >
            <Send size={18} />
            <span>Enviar Instrucciones</span>
          </button>

          <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            <Link
              to="/auth"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                fontSize: '0.88rem'
              }}
            >
              <ArrowLeft size={15} />
              <span>Volver a Iniciar Sesión</span>
            </Link>
          </div>
        </form>
      )}
    </div>
  );
};

export default ForgotPasswordForm;
