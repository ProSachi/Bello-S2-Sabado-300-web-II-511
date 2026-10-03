import { useState } from 'react'
import { useAppContext } from '../hooks/useAppContext.jsx'
import { patterns, validateField } from '../utils/validation.js'

const INITIAL_NEWS_FORM = {
  title: '',
  summary: '',
}

export function AdminNewsPage() {
  const { news, addNews, removeNews } = useAppContext()
  const [formData, setFormData] = useState(INITIAL_NEWS_FORM)
  const [errors, setErrors] = useState({})

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((currentData) => ({ ...currentData, [name]: value }))
    setErrors((currentErrors) => ({ ...currentErrors, [name]: '' }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = {}

    if (!validateField(formData.title, patterns.newsTitle)) {
      nextErrors.title = 'El titulo debe tener entre 8 y 80 caracteres.'
    }

    if (!validateField(formData.summary, patterns.newsSummary)) {
      nextErrors.summary = 'El resumen debe tener entre 20 y 280 caracteres.'
    }

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length !== 0) {
      return
    }

    addNews(formData)
    setFormData(INITIAL_NEWS_FORM)
  }

  return (
    <section className="page">
      <h1>Admin de noticias</h1>
      <p className="page-subtitle">
        Estas noticias se muestran en el componente 4 de la homepage.
      </p>

      <div className="admin-grid">
        <article className="panel">
          <h2>Nueva noticia</h2>
          <form className="stack-form" onSubmit={handleSubmit} noValidate>
            <label>
              Titulo
              <input
                name="title"
                type="text"
                value={formData.title}
                onChange={handleChange}
              />
              {errors.title && <small>{errors.title}</small>}
            </label>
            <label>
              Resumen
              <textarea
                name="summary"
                rows="4"
                value={formData.summary}
                onChange={handleChange}
              />
              {errors.summary && <small>{errors.summary}</small>}
            </label>
            <button className="btn primary" type="submit">
              Guardar noticia
            </button>
          </form>
        </article>

        <article className="panel">
          <h2>Noticias actuales</h2>
          <ul className="admin-list">
            {news.map((item) => (
              <li key={item.id}>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.summary}</p>
                </div>
                <button
                  type="button"
                  className="btn danger"
                  onClick={() => removeNews(item.id)}
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
