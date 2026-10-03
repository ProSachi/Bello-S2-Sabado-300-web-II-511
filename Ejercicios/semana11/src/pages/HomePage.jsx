import { HomeShowcase } from '../sections/HomeShowcase.jsx'

export function HomePage() {
  return (
    <section className="page">
      <h1>Homepage</h1>
      <p className="page-subtitle">
        Vista inicial por componentes con seis bloques numerados.
      </p>
      <HomeShowcase />
    </section>
  )
}
