import "./App.css"
import productos from "./data/productos"

function App() {


  const beneficios = [
    "Moldea cintura, abdomen y espalda de forma natural.",
    "Material suave, fresco y de larga duracion.",
    "Envios a toda Colombia con pago contraentrega.",
    "Asesoria por WhatsApp para elegir tu talla.",
  ]

  return (
    <main className="page">
      <header className="hero">
        <p className="tag">FAJAS BELLA FIGURA</p>
        <h1>Realza tu figura con comodidad todos los dias</h1>
        <p className="hero-text">
          Descubre nuestras fajas para uso diario, postparto y postquirurgicas.
          Calidad premium, envio rapido y asesoria personalizada.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#catalogo">Ver catalogo</a>
          <a className="btn btn-secondary" href="https://wa.me/573001112233" target="_blank" rel="noreferrer">
            Pedir por WhatsApp
          </a>
        </div>
      </header>

      <section id="catalogo" className="section">
        <h2>Catalogo de Fajas</h2>
        <div className="grid">
          {productos.map((producto) => (
            <article className="card" key={producto.nombre}>
              <h3>{producto.nombre}</h3>
              <p className="price">{producto.precio}</p>
              <p>{producto.descripcion}</p>
              <p className="size">Tallas: {producto.talla}</p>
              <button type="button" className="buy-btn">Comprar ahora</button>
            </article>
          ))}
        </div>
      </section>

      <section className="section benefits">
        <h2>Por que elegirnos</h2>
        <ul>
          {beneficios.map((beneficio) => (
            <li key={beneficio}>{beneficio}</li>
          ))}
        </ul>
      </section>

      <section className="section testimonials">
        <h2>Lo que dicen nuestras clientas</h2>
        <div className="testimonials-grid">
          <blockquote>
            "La faja clasica me encanta, la uso todo el dia y no incomoda."
            <span>- Daniela, Medellin</span>
          </blockquote>
          <blockquote>
            "Me asesoraron super bien por WhatsApp y la talla fue perfecta."
            <span>- Laura, Bogota</span>
          </blockquote>
        </div>
      </section>

      <footer className="footer">
        <p>Envios nacionales | Pago seguro | Atencion de lunes a sabado</p>
      </footer>
    </main>
  )
}

export default App
