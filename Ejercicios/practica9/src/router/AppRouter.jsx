import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import RequireAuth from '../router/RequireAuth'
import AdoptionPage from '../views/AdoptionPage'
import CatalogPage from '../views/CatalogPage'
import ContactPage from '../views/ContactPage'
import LoginPage from '../views/LoginPage'
import PetDetailPage from '../views/PetDetailPage'
import RegisterPage from '../views/RegisterPage'

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Navigate to="/catalogo" replace />} />
          <Route path="/catalogo" element={<CatalogPage />} />
          <Route path="/mascotas/:petId" element={<PetDetailPage />} />
          <Route
            path="/adopcion/:petId"
            element={
              <RequireAuth>
                <AdoptionPage />
              </RequireAuth>
            }
          />
        </Route>

        <Route path="/login" element={<LoginPage />} />
        <Route path="/registro" element={<RegisterPage />} />
        <Route path="/contactenos" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/catalogo" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
