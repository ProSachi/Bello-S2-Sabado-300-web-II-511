import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { createAdoptionRequest, getPetById } from '../services/localDb'
import './AdoptionPage.css'

const nameRegex = /^[A-Za-z\s]{3,60}$/
const phoneRegex = /^\+?\d{7,15}$/
const addressRegex = /^.{8,140}$/
const motivationRegex = /^.{20,500}$/

function AdoptionPage() {
  const { petId } = useParams()
  const navigate = useNavigate()
  const { user } = useAuth()

  const [pet, setPet] = useState(null)
  const [formData, setFormData] = useState({
    fullName: user?.name || '',
    phone: user?.phone || '',
    address: '',
    motivation: '',
  })
  const [errors, setErrors] = useState({})
  const [resultMessage, setResultMessage] = useState('')

  useEffect(() => {
    setPet(getPetById(petId))
  }, [petId])

  const validate = () => {
    const nextErrors = {}

    if (!nameRegex.test(formData.fullName.trim())) {
      nextErrors.fullName = 'Nombre invalido: minimo 3 letras.'
    }

    if (!phoneRegex.test(formData.phone.trim())) {
      nextErrors.phone = 'Telefono invalido: usa de 7 a 15 digitos.'
    }

    if (!addressRegex.test(formData.address.trim())) {
      nextErrors.address = 'Direccion invalida: minimo 8 caracteres.'
    }

    if (!motivationRegex.test(formData.motivation.trim())) {
      nextErrors.motivation = 'Motivacion invalida: minimo 20 caracteres.'
    }

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setResultMessage('')

    if (!validate()) return

    const response = createAdoptionRequest({
      petId,
      userId: user.id,
      fullName: formData.fullName.trim(),
      phone: formData.phone.trim(),
      address: formData.address.trim(),
      motivation: formData.motivation.trim(),
    })

    if (!response.ok) {
      setResultMessage(response.error)
      return
    }

    setResultMessage(
      'Solicitud enviada correctamente. Gracias por adoptar responsablemente.',
    )
    setTimeout(() => {
      navigate('/catalogo')
    }, 1000)
  }

  if (!pet) {
    return (
      <section className="adoption-card">
        <h2>La mascota no existe.</h2>
        <button type="button" onClick={() => navigate('/catalogo')}>
          Volver al catalogo
        </button>
      </section>
    )
  }

  return (
    <section className="adoption-card">
      <h1>Formulario de adopcion</h1>
      <p>
        Mascota seleccionada: <strong>{pet.name}</strong> ({pet.species})
      </p>

      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="adopt-full-name">Nombre completo</label>
        <input
          id="adopt-full-name"
          type="text"
          value={formData.fullName}
          onChange={(event) =>
            setFormData((prev) => ({ ...prev, fullName: event.target.value }))
          }
        />
        {errors.fullName && <small className="error-text">{errors.fullName}</small>}

        <label htmlFor="adopt-phone">Telefono</label>
        <input
          id="adopt-phone"
          type="text"
          value={formData.phone}
          onChange={(event) =>
            setFormData((prev) => ({ ...prev, phone: event.target.value }))
          }
        />
        {errors.phone && <small className="error-text">{errors.phone}</small>}

        <label htmlFor="adopt-address">Direccion</label>
        <input
          id="adopt-address"
          type="text"
          value={formData.address}
          onChange={(event) =>
            setFormData((prev) => ({ ...prev, address: event.target.value }))
          }
          placeholder="Calle 123 #45-67"
        />
        {errors.address && <small className="error-text">{errors.address}</small>}

        <label htmlFor="adopt-motivation">Motivacion</label>
        <textarea
          id="adopt-motivation"
          rows="4"
          value={formData.motivation}
          onChange={(event) =>
            setFormData((prev) => ({ ...prev, motivation: event.target.value }))
          }
          placeholder="Describe por que deseas adoptar y como cuidaras la mascota."
        />
        {errors.motivation && (
          <small className="error-text">{errors.motivation}</small>
        )}

        <button type="submit">Enviar solicitud</button>
      </form>

      {resultMessage && <p className="result-message">{resultMessage}</p>}
    </section>
  )
}

export default AdoptionPage
