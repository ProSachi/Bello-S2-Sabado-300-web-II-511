import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import { LogIn, UserPlus } from 'lucide-react';

const AuthCard = () => {
  const [activeTab, setActiveTab] = useState('login'); // 'login' | 'register'

  return (
    <div
      style={{
        backgroundColor: 'var(--bg-card)',
        borderRadius: '16px',
        border: '1px solid var(--border-color)',
        padding: '2rem',
        boxShadow: 'var(--card-shadow)',
        width: '100%',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Animated Navigation Tabs */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          backgroundColor: 'var(--bg-input)',
          padding: '4px',
          borderRadius: '10px',
          marginBottom: '1.75rem',
          border: '1px solid var(--border-color)',
          position: 'relative'
        }}
      >
        <button
          onClick={() => setActiveTab('login')}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.4rem',
            padding: '0.6rem',
            borderRadius: '7px',
            border: 'none',
            fontSize: '0.9rem',
            fontWeight: 600,
            cursor: 'pointer',
            backgroundColor: activeTab === 'login' ? 'var(--accent)' : 'transparent',
            color: activeTab === 'login' ? '#ffffff' : 'var(--text-secondary)',
            transition: 'all 0.3s ease',
            zIndex: 2
          }}
        >
          <LogIn size={16} />
          <span>Iniciar Sesión</span>
        </button>

        <button
          onClick={() => setActiveTab('register')}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.4rem',
            padding: '0.6rem',
            borderRadius: '7px',
            border: 'none',
            fontSize: '0.9rem',
            fontWeight: 600,
            cursor: 'pointer',
            backgroundColor: activeTab === 'register' ? 'var(--accent)' : 'transparent',
            color: activeTab === 'register' ? '#ffffff' : 'var(--text-secondary)',
            transition: 'all 0.3s ease',
            zIndex: 2
          }}
        >
          <UserPlus size={16} />
          <span>Registrarse</span>
        </button>
      </div>

      {/* Dynamic Animated Content Container */}
      <div
        style={{
          transition: 'all 0.4s ease-in-out',
          opacity: 1,
          transform: 'translateY(0)'
        }}
        key={activeTab}
      >
        {activeTab === 'login' ? (
          <LoginForm onSwitchToRegister={() => setActiveTab('register')} />
        ) : (
          <RegisterForm onSwitchToLogin={() => setActiveTab('login')} />
        )}
      </div>
    </div>
  );
};

export default AuthCard;
