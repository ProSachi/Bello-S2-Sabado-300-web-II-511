import { createContext, useContext, useMemo, useState } from 'react'
import {
  getSessionUser,
  loginUser,
  logoutSession,
  registerUser,
} from '../services/localDb'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(getSessionUser())

  const authValue = useMemo(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      login: (email, password) => {
        const response = loginUser(email, password)
        if (response.ok) setUser(response.user)
        return response
      },
      register: (userData) => {
        const response = registerUser(userData)
        if (response.ok) setUser(response.user)
        return response
      },
      logout: () => {
        logoutSession()
        setUser(null)
      },
    }),
    [user],
  )

  return <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth debe usarse dentro de AuthProvider.')
  }
  return context
}
