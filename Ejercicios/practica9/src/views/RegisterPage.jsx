import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './AuthPages.css'

const nameRegex = /^[A-Za-z\s]{3,60}$/
const phoneRegex = /^\+?\d{7,15}$/
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/

function RegisterPage() {
  const { register } = useAuth()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [errors, setErrors] = useState({})
  const [formError, setFormError] = useState('')

  const validate = () => {
    const nextErrors = {}

    if (!nameRegex.test(formData.name.trim())) {
      nextErrors.name = 'Nombre invalido: minimo 3 letras.'
    }

    if (!phoneRegex.test(formData.phone.trim())) {
      nextErrors.phone = 'Telefono invalido: usa de 7 a 15 digitos.'
    }

    if (!emailRegex.test(formData.email.trim())) {
      nextErrors.email = 'Correo invalido.'
    }

    if (!passwordRegex.test(formData.password)) {
      nextErrors.password =
        'Contrasena invalida: minimo 8 caracteres con mayuscula, minuscula, numero y simbolo.'
    }

    if (formData.password !== formData.confirmPassword) {
      nextErrors.confirmPassword = 'Las contrasenas no coinciden.'
    }

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setFormError('')

    if (!validate()) return

    const response = register({
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      email: formData.email.trim(),
      password: formData.password,
    })

    if (!response.ok) {
      setFormError(response.error)
      return
    }

    navigate('/catalogo', { replace: true })
  }

  return (
    <section className="auth-shell">
      <form className="auth-card" onSubmit={handleSubmit} noValidate>
        <h1>Registro</h1>
        <p className="auth-subtitle">Crea tu cuenta para iniciar tu solicitud.</p>

        <label htmlFor="register-name">Nombre completo</label>
        <input
          id="register-name"
          type="text"
          value={formData.name}
          onChange={(event) =>
            setFormData((prev) => ({ ...prev, name: event.target.value }))
          }
          placeholder="Maria Gomez"
        />
        {errors.name && <small className="error-text">{errors.name}</small>}

        <label htmlFor="register-phone">Telefono</label>
        <input
          id="register-phone"
          type="text"
          value={formData.phone}
          onChange={(event) =>
            setFormData((prev) => ({ ...prev, phone: event.target.value }))
          }
          placeholder="+573001234567"
        />
        {errors.phone && <small className="error-text">{errors.phone}</small>}

        <label htmlFor="register-email">Correo</label>
        <input
          id="register-email"
          type="email"
          value={formData.email}
          onChange={(event) =>
            setFormData((prev) => ({ ...prev, email: event.target.value }))
          }
          placeholder="correo@ejemplo.com"
        />
        {errors.email && <small className="error-text">{errors.email}</small>}

        <label htmlFor="register-password">Contrasena</label>
        <input
          id="register-password"
          type="password"
          value={formData.password}
          onChange={(event) =>
            setFormData((prev) => ({ ...prev, password: event.target.value }))
          }
          placeholder="********"
        />
        {errors.password && <small className="error-text">{errors.password}</small>}

        <label htmlFor="register-confirm-password">Confirmar contrasena</label>
        <input
          id="register-confirm-password"
          type="password"
          value={formData.confirmPassword}
          onChange={(event) =>
            setFormData((prev) => ({
              ...prev,
              confirmPassword: event.target.value,
            }))
          }
          placeholder="********"
        />
        {errors.confirmPassword && (
          <small className="error-text">{errors.confirmPassword}</small>
        )}

        {formError && <p className="error-banner">{formError}</p>}

        <button type="submit">Crear cuenta</button>
        <p className="auth-switch">
          Ya tienes cuenta? <Link to="/login">Inicia sesion</Link>
        </p>
      </form>
    </section>
  )
}

export default RegisterPage
