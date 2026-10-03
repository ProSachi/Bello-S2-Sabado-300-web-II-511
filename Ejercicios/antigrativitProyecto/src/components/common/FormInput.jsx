import React, { useState } from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';

const FormInput = ({
  label,
  type = 'text',
  name,
  value,
  onChange,
  placeholder,
  regex,
  errorMessage,
  required = false,
  disabled = false,
  icon: Icon
}) => {
  const [touched, setTouched] = useState(false);

  const isValid = !regex || (value !== '' && regex.test(value));
  const showError = touched && required && (!value || (regex && !isValid));

  const handleBlur = () => {
    setTouched(true);
  };

  return (
    <div style={{ marginBottom: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
      {label && (
        <label style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)' }}>
          {label} {required && <span style={{ color: '#ef4444' }}>*</span>}
        </label>
      )}

      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        {Icon && (
          <Icon
            size={18}
            style={{
              position: 'absolute',
              left: '12px',
              color: 'var(--text-secondary)',
              pointerEvents: 'none'
            }}
          />
        )}

        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={handleBlur}
          placeholder={placeholder}
          disabled={disabled}
          style={{
            width: '100%',
            padding: Icon ? '0.65rem 0.75rem 0.65rem 2.4rem' : '0.65rem 0.75rem',
            backgroundColor: 'var(--bg-input)',
            color: 'var(--text-primary)',
            border: showError
              ? '1px solid #ef4444'
              : touched && value && isValid
              ? '1px solid #10b981'
              : '1px solid var(--border-color)',
            borderRadius: '8px',
            outline: 'none',
            fontSize: '0.95rem'
          }}
        />

        {touched && value && (
          <div style={{ position: 'absolute', right: '12px', display: 'flex', alignItems: 'center' }}>
            {isValid ? (
              <CheckCircle size={16} color="#10b981" />
            ) : (
              <AlertCircle size={16} color="#ef4444" />
            )}
          </div>
        )}
      </div>

      {showError && (
        <span style={{ fontSize: '0.8rem', color: '#ef4444', marginTop: '0.2rem' }}>
          {errorMessage || 'Campo inválido'}
        </span>
      )}
    </div>
  );
};

export default FormInput;
