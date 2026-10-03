import { Navigate, useLocation } from 'react-router-dom'
import { useAppContext } from '../hooks/useAppContext.jsx'

export function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAppContext()
  const location = useLocation()

  if (!isAuthenticated) {
    return <Navigate to="/auth" state={{ from: location }} replace />
  }

  return children
}
