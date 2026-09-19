import { useMemo, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './AuthPages.css'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/

function LoginPage() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const [formData, setFormData] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({})
  const [authError, setAuthError] = useState('')

  const redirectPath = useMemo(
    () => location.state?.from?.pathname || '/catalogo',
    [location.state],
  )

  const validate = () => {
    const nextErrors = {}

    if (!emailRegex.test(formData.email)) {
      nextErrors.email = 'Ingresa un correo valido.'
    }

    if (!passwordRegex.test(formData.password)) {
      nextErrors.password =
        'Contrasena invalida: minimo 8 caracteres con mayuscula, minuscula, numero y simbolo.'
    }

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setAuthError('')

    if (!validate()) return

    const response = login(formData.email, formData.password)
    if (!response.ok) {
      setAuthError(response.error)
      return
    }

    navigate(redirectPath, { replace: true })
  }

  return (
    <section className="auth-shell">
      <form className="auth-card" onSubmit={handleSubmit} noValidate>
        <h1>Login</h1>
        <p className="auth-subtitle">Ingresa para realizar una adopcion responsable.</p>

        <label htmlFor="login-email">Correo</label>
        <input
          id="login-email"
          type="email"
          value={formData.email}
          onChange={(event) =>
            setFormData((prev) => ({ ...prev, email: event.target.value }))
          }
          placeholder="correo@ejemplo.com"
        />
        {errors.email && <small className="error-text">{errors.email}</small>}

        <label htmlFor="login-password">Contrasena</label>
        <input
          id="login-password"
          type="password"
          value={formData.password}
          onChange={(event) =>
            setFormData((prev) => ({ ...prev, password: event.target.value }))
          }
          placeholder="********"
        />
        {errors.password && <small className="error-text">{errors.password}</small>}

        {authError && <p className="error-banner">{authError}</p>}

        <button type="submit">Iniciar sesion</button>
        <p className="auth-switch">
          No tienes cuenta? <Link to="/registro">Registrate aqui</Link>
        </p>
        <Link className="auth-link" to="/contactenos">
          Contactenos
        </Link>
      </form>
    </section>
  )
}

export default LoginPage
