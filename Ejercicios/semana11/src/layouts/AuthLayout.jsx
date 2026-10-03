import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <div className="layout layout-auth">
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  )
}
