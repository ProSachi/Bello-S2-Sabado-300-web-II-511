import { useAppContext } from '../hooks/useAppContext.jsx'

function Block({ number, title, children, className = '' }) {
  return (
    <article className={`home-block ${className}`}>
      <header>
        <strong>{number}</strong>
        <span>{title}</span>
      </header>
      <div>{children}</div>
    </article>
  )
}

export function HomeShowcase() {
  const { carouselImages, news } = useAppContext()

  return (
    <section className="showcase-wrapper">
      <div className="home-grid">
        <Block className="block-1" number="1" title="Carrusel">
          <div className="carousel-preview">
            {carouselImages.slice(0, 3).map((image) => (
              <img key={image.id} src={image.url} alt={image.alt} />
            ))}
          </div>
        </Block>

        <Block className="block-2" number="2" title="Resumen rapido">
          <p>Resumen del sistema para el usuario final.</p>
        </Block>

        <Block className="block-3" number="3" title="Destacado lateral">
          <p>Panel lateral para mensajes o accesos rapidos.</p>
        </Block>

        <Block className="block-4" number="4" title="Noticias">
          <ul className="news-list">
            {news.slice(0, 3).map((item) => (
              <li key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
              </li>
            ))}
          </ul>
        </Block>
      </div>

      <a
        className="whatsapp-float"
        href="https://wa.me/573000000000?text=Hola,%20quiero%20mas%20informacion"
        target="_blank"
        rel="noreferrer"
        aria-label="Contactar por WhatsApp"
      >
        <span className="whatsapp-label">Contactanos</span>
        <span className="whatsapp-icon" aria-hidden="true">
          WA
        </span>
      </a>
    </section>
  )
}
