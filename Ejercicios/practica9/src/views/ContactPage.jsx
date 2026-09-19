import { Link } from 'react-router-dom'
import './ContactPage.css'

function ContactPage() {
  return (
    <section className="contact-shell">
      <div className="contact-card">
        <h1>Contactenos</h1>
        <p>
          Estamos disponibles para resolver dudas del proceso de adopcion y cuidado
          responsable.
        </p>

        <div className="contact-info">
          <p>
            <strong>Direccion:</strong> Carrera 52 #45-18, Bello
          </p>
          <p>
            <strong>Telefono:</strong> +57 300 123 4567
          </p>
          <p>
            <strong>Email:</strong> adopciones@hogarpatitas.org
          </p>
          <p>
            <strong>Horario:</strong> Lunes a Sabado, 8:00 am - 5:00 pm
          </p>
        </div>

        <div className="contact-actions">
          <Link to="/catalogo">Volver al catalogo</Link>
          <Link to="/login">Iniciar sesion</Link>
        </div>
      </div>
    </section>
  )
}

export default ContactPage
