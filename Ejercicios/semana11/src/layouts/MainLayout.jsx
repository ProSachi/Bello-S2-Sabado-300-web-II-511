import { Outlet } from 'react-router-dom'
import { Footer } from '../shared/Footer.jsx'
import { Navbar } from '../shared/Navbar.jsx'

export function MainLayout() {
  return (
    <div className="layout layout-main">
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
