import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import FormInput from '../common/FormInput';
import { Mail, Lock, LogIn } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

const LoginForm = ({ onSwitchToRegister }) => {
  const { login } = useApp();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  // Regex patterns
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^.{6,}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const isEmailValid = emailRegex.test(formData.email);
    const isPasswordValid = passwordRegex.test(formData.password);

    if (isEmailValid && isPasswordValid) {
      const userName = formData.email.split('@')[0];
      login({
        email: formData.email,
        nombre: userName.charAt(0).toUpperCase() + userName.slice(1),
        role: 'admin'
      });
      setSuccessMessage('¡Inicio de sesión exitoso! Redirigiendo...');
      setTimeout(() => {
        navigate('/');
      }, 1200);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
        Iniciar Sesión
      </h2>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
        Ingresa con tus credenciales para administrar la plataforma
      </p>

      {successMessage && (
        <div
          style={{
            backgroundColor: 'rgba(16, 185, 129, 0.15)',
            border: '1px solid #10b981',
            color: '#10b981',
            padding: '0.75rem',
            borderRadius: '8px',
            fontSize: '0.88rem',
            marginBottom: '1rem',
            fontWeight: 600,
            textAlign: 'center'
          }}
        >
          {successMessage}
        </div>
      )}

      <FormInput
        label="Correo Electrónico"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="ejemplo@correo.com"
        regex={emailRegex}
        errorMessage="Ingresa un correo electrónico válido (ej: usuario@dominio.com)"
        required
        icon={Mail}
      />

      <FormInput
        label="Contraseña"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="••••••••"
        regex={passwordRegex}
        errorMessage="La contraseña debe tener al menos 6 caracteres"
        required
        icon={Lock}
      />

      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1.25rem' }}>
        <Link
          to="/recuperar-password"
          style={{ fontSize: '0.82rem', color: 'var(--accent)', textDecoration: 'none', fontWeight: 600 }}
        >
          ¿Olvidaste tu contraseña?
        </Link>
      </div>

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
          boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
        }}
      >
        <LogIn size={18} />
        <span>Iniciar Sesión</span>
      </button>

      <div style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
        ¿No tienes una cuenta?{' '}
        <button
          type="button"
          onClick={onSwitchToRegister}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--accent)',
            fontWeight: 700,
            cursor: 'pointer',
            padding: 0
          }}
        >
          Regístrate aquí
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
