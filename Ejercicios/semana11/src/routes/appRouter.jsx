import { Navigate, createBrowserRouter } from 'react-router-dom'
import { AuthLayout } from '../layouts/AuthLayout.jsx'
import { MainLayout } from '../layouts/MainLayout.jsx'
import { AdminCarouselPage } from '../pages/AdminCarouselPage.jsx'
import { AdminNewsPage } from '../pages/AdminNewsPage.jsx'
import { AuthPage } from '../pages/AuthPage.jsx'
import { ForgotPasswordPage } from '../pages/ForgotPasswordPage.jsx'
import { HomePage } from '../pages/HomePage.jsx'
import { NotFoundPage } from '../pages/NotFoundPage.jsx'
import { SimulatorPage } from '../pages/SimulatorPage.jsx'
import { ProtectedRoute } from './ProtectedRoute.jsx'

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'admin-noticias',
        element: (
          <ProtectedRoute>
            <AdminNewsPage />
          </ProtectedRoute>
        ),
      },
      {
        path: 'admin-carrousel',
        element: (
          <ProtectedRoute>
            <AdminCarouselPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { path: 'auth', element: <AuthPage /> },
      { path: 'recuperar-contrasena', element: <ForgotPasswordPage /> },
      {
        path: 'simulador',
        element: (
          <ProtectedRoute>
            <SimulatorPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
  { path: '/404', element: <NotFoundPage /> },
  { path: '*', element: <Navigate to="/404" replace /> },
])
