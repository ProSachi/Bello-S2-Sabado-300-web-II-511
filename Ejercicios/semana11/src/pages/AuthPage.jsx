import { useMemo, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAppContext } from '../hooks/useAppContext.jsx'
import { patterns, validateField } from '../utils/validation.js'

const LOGIN_INITIAL_STATE = {
  email: '',
  password: '',
}

const REGISTER_INITIAL_STATE = {
  fullName: '',
  email: '',
  password: '',
}

export function AuthPage() {
  const [mode, setMode] = useState('login')
  const [loginData, setLoginData] = useState(LOGIN_INITIAL_STATE)
  const [registerData, setRegisterData] = useState(REGISTER_INITIAL_STATE)
  const [errors, setErrors] = useState({})
  const { login } = useAppContext()
  const navigate = useNavigate()
  const location = useLocation()

  const redirectPath = useMemo(
    () => location.state?.from?.pathname || '/',
    [location.state],
  )

  const updateField = (setState, state) => (event) => {
    const { name, value } = event.target
    setState({ ...state, [name]: value })
    setErrors((currentErrors) => ({ ...currentErrors, [name]: '' }))
  }

  const validateLogin = () => {
    const nextErrors = {}

    if (!validateField(loginData.email, patterns.email)) {
      nextErrors.email = 'Correo invalido.'
    }

    if (!validateField(loginData.password, patterns.password)) {
      nextErrors.password = 'Clave invalida.'
    }

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const validateRegister = () => {
    const nextErrors = {}

    if (!validateField(registerData.fullName, patterns.fullName)) {
      nextErrors.fullName = 'Ingresa nombre y apellido.'
    }

    if (!validateField(registerData.email, patterns.email)) {
      nextErrors.email = 'Correo invalido.'
    }

    if (!validateField(registerData.password, patterns.password)) {
      nextErrors.password =
        'Clave de 8-20 con mayuscula, minuscula, numero y simbolo.'
    }

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleLoginSubmit = (event) => {
    event.preventDefault()

    if (!validateLogin()) {
      return
    }

    login()
    navigate(redirectPath, { replace: true })
  }

  const handleRegisterSubmit = (event) => {
    event.preventDefault()

    if (!validateRegister()) {
      return
    }

    login()
    navigate('/', { replace: true })
  }

  return (
    <section className="auth-page">
      <article className="auth-card">
        <header className="auth-header">
          <button
            className={mode === 'login' ? 'active' : ''}
            type="button"
            onClick={() => setMode('login')}
          >
            Login
          </button>
          <button
            className={mode === 'register' ? 'active' : ''}
            type="button"
            onClick={() => setMode('register')}
          >
            Registrarse
          </button>
        </header>

        <div className={`auth-slider ${mode === 'register' ? 'register' : ''}`}>
          <form className="auth-form" onSubmit={handleLoginSubmit} noValidate>
            <h1>Iniciar sesion</h1>
            <label>
              Correo
              <input
                name="email"
                type="email"
                value={loginData.email}
                onChange={updateField(setLoginData, loginData)}
                placeholder="correo@dominio.com"
                autoComplete="email"
              />
              {errors.email && <small>{errors.email}</small>}
            </label>
            <label>
              Clave
              <input
                name="password"
                type="password"
                value={loginData.password}
                onChange={updateField(setLoginData, loginData)}
                placeholder="********"
                autoComplete="current-password"
              />
              {errors.password && <small>{errors.password}</small>}
            </label>
            <button className="btn primary" type="submit">
              Entrar
            </button>
          </form>

          <form className="auth-form" onSubmit={handleRegisterSubmit} noValidate>
            <h1>Crear cuenta</h1>
            <label>
              Nombre completo
              <input
                name="fullName"
                type="text"
                value={registerData.fullName}
                onChange={updateField(setRegisterData, registerData)}
                placeholder="Nombre Apellido"
                autoComplete="name"
              />
              {errors.fullName && <small>{errors.fullName}</small>}
            </label>
            <label>
              Correo
              <input
                name="email"
                type="email"
                value={registerData.email}
                onChange={updateField(setRegisterData, registerData)}
                placeholder="correo@dominio.com"
                autoComplete="email"
              />
              {errors.email && <small>{errors.email}</small>}
            </label>
            <label>
              Clave
              <input
                name="password"
                type="password"
                value={registerData.password}
                onChange={updateField(setRegisterData, registerData)}
                placeholder="********"
                autoComplete="new-password"
              />
              {errors.password && <small>{errors.password}</small>}
            </label>
            <button className="btn primary" type="submit">
              Registrarme
            </button>
          </form>
        </div>

        <p className="auth-actions">
          <Link to="/recuperar-contrasena">Recuperar contrasena</Link>
        </p>
      </article>
    </section>
  )
}
