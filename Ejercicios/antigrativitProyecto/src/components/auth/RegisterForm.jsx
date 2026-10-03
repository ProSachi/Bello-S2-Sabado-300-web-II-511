import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import FormInput from '../common/FormInput';
import { User, Mail, Lock, UserPlus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const RegisterForm = ({ onSwitchToLogin }) => {
  const { login } = useApp();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [passwordMismatch, setPasswordMismatch] = useState(false);

  // Regex patterns
  const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,30}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{6,}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === 'confirmPassword' || name === 'password') {
      setPasswordMismatch(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (formData.password !== formData.confirmPassword) {
      setPasswordMismatch(true);
      return;
    }

    const isNameValid = nameRegex.test(formData.nombre);
    const isEmailValid = emailRegex.test(formData.email);
    const isPasswordValid = passwordRegex.test(formData.password);

    if (isNameValid && isEmailValid && isPasswordValid) {
      login({
        email: formData.email,
        nombre: formData.nombre,
        role: 'user'
      });
      setSuccessMessage('¡Cuenta creada exitosamente! Redirigiendo...');
      setTimeout(() => {
        navigate('/');
      }, 1200);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
        Crear Cuenta
      </h2>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
        Completa el formulario para registrarte en el portal
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
        label="Nombre Completo"
        type="text"
        name="nombre"
        value={formData.nombre}
        onChange={handleChange}
        placeholder="Juan Pérez"
        regex={nameRegex}
        errorMessage="El nombre debe tener al menos 3 letras (solo letras y espacios)"
        required
        icon={User}
      />

      <FormInput
        label="Correo Electrónico"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="ejemplo@correo.com"
        regex={emailRegex}
        errorMessage="Correo inválido. Ejemplo: usuario@dominio.com"
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
        errorMessage="Mínimo 6 caracteres con al menos una letra y un número"
        required
        icon={Lock}
      />

      <FormInput
        label="Confirmar Contraseña"
        type="password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        placeholder="••••••••"
        required
        icon={Lock}
      />

      {passwordMismatch && (
        <div style={{ color: '#ef4444', fontSize: '0.8rem', marginBottom: '1rem' }}>
          Las contraseñas no coinciden.
        </div>
      )}

      <button
        type="submit"
        style={{
          width: '100%',
          padding: '0.75rem',
          backgroundColor: '#10b981',
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
          boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)'
        }}
      >
        <UserPlus size={18} />
        <span>Registrarse</span>
      </button>

      <div style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
        ¿Ya tienes una cuenta?{' '}
        <button
          type="button"
          onClick={onSwitchToLogin}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--accent)',
            fontWeight: 700,
            cursor: 'pointer',
            padding: 0
          }}
        >
          Inicia sesión aquí
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
