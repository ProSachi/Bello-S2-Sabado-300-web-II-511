
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import AuthLayout from '../layouts/AuthLayout';

import Home from '../pages/Home';
import SimuladorPage from '../pages/SimuladorPage';
import AdminNoticiasPage from '../pages/AdminNoticiasPage';
import AdminCarouselPage from '../pages/AdminCarouselPage';

import AuthPage from '../pages/AuthPage';
import ForgotPasswordPage from '../pages/ForgotPasswordPage';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Main Layout Routes: Persistent Navbar & Footer */}
      <Route element={<MainLayout />}>
        <Route path="/simulador" element={<SimuladorPage />} />
        <Route path="/admin/noticias" element={<AdminNoticiasPage />} />
        <Route path="/admin/carousel" element={<AdminCarouselPage />} />
        <Route path="/" element={<Home />} />
      </Route>

      {/* Auth Layout Routes: Minimal Layout (NO Navbar, NO Footer) */}
      <Route element={<AuthLayout />}>

        <Route path="/auth" element={<AuthPage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/register" element={<AuthPage />} />
        <Route path="/recuperar-password" element={<ForgotPasswordPage />} />
      </Route>

      {/* Fallback Route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
