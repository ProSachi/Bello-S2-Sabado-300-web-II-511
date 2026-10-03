import { useState } from 'react'
import { Link } from 'react-router-dom'
import { patterns, validateField } from '../utils/validation.js'

export function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(false)

    if (!validateField(email, patterns.email)) {
      setError('Ingresa un correo valido.')
      return
    }

    setError('')
    setSubmitted(true)
  }

  return (
    <section className="auth-page">
      <article className="auth-card auth-single">
        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          <h1>Recuperar contrasena</h1>
          <label>
            Correo
            <input
              name="email"
              type="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value)
                setError('')
              }}
              placeholder="correo@dominio.com"
              autoComplete="email"
            />
            {error && <small>{error}</small>}
          </label>

          <button className="btn primary" type="submit">
            Enviar enlace
          </button>

          {submitted && (
            <p className="success-message">
              Solicitud recibida. Revisa tu bandeja de entrada.
            </p>
          )}
        </form>

        <p className="auth-actions">
          <Link to="/auth">Volver al login</Link>
        </p>
      </article>
    </section>
  )
}
