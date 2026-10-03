import { useState } from 'react'
import { useAppContext } from '../hooks/useAppContext.jsx'
import { patterns, validateField } from '../utils/validation.js'

const INITIAL_IMAGE_FORM = {
  url: '',
  alt: '',
}

export function AdminCarouselPage() {
  const { carouselImages, addCarouselImage, removeCarouselImage } = useAppContext()
  const [formData, setFormData] = useState(INITIAL_IMAGE_FORM)
  const [errors, setErrors] = useState({})

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((currentData) => ({ ...currentData, [name]: value }))
    setErrors((currentErrors) => ({ ...currentErrors, [name]: '' }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = {}

    if (!validateField(formData.url, patterns.imageUrl)) {
      nextErrors.url =
        'La URL debe iniciar con http/https y terminar en png, jpg, jpeg, webp o gif.'
    }

    if (!validateField(formData.alt, patterns.newsTitle)) {
      nextErrors.alt = 'El texto alternativo debe tener entre 8 y 80 caracteres.'
    }

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length !== 0) {
      return
    }

    addCarouselImage(formData)
    setFormData(INITIAL_IMAGE_FORM)
  }

  return (
    <section className="page">
      <h1>Admin de carrusel</h1>
      <p className="page-subtitle">
        Estas imagenes alimentan el componente 1 de la homepage.
      </p>

      <div className="admin-grid">
        <article className="panel">
          <h2>Nueva imagen</h2>
          <form className="stack-form" onSubmit={handleSubmit} noValidate>
            <label>
              URL
              <input
                name="url"
                type="url"
                value={formData.url}
                onChange={handleChange}
                placeholder="https://servidor/imagen.jpg"
              />
              {errors.url && <small>{errors.url}</small>}
            </label>
            <label>
              Texto alternativo
              <input
                name="alt"
                type="text"
                value={formData.alt}
                onChange={handleChange}
                placeholder="Descripcion de la imagen"
              />
              {errors.alt && <small>{errors.alt}</small>}
            </label>
            <button className="btn primary" type="submit">
              Agregar imagen
            </button>
          </form>
        </article>

        <article className="panel">
          <h2>Imagenes actuales</h2>
          <ul className="admin-list image-list">
            {carouselImages.map((image) => (
              <li key={image.id}>
                <div>
                  <img src={image.url} alt={image.alt} />
                  <p>{image.alt}</p>
                </div>
                <button
                  type="button"
                  className="btn danger"
                  onClick={() => removeCarouselImage(image.id)}
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}
