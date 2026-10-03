import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <section className="page not-found">
      <h1>404</h1>
      <p>La ruta solicitada no existe.</p>
      <Link className="btn primary" to="/">
        Volver al inicio
      </Link>
    </section>
  )
}
