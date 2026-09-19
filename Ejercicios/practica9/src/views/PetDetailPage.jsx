import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getPetById, incrementPetVisit } from '../services/localDb'
import './PetDetailPage.css'

function PetDetailPage() {
  const { petId } = useParams()
  const navigate = useNavigate()
  const [pet, setPet] = useState(null)

  useEffect(() => {
    const exists = getPetById(petId)
    if (!exists) return
    const updated = incrementPetVisit(petId)
    setPet(updated)
  }, [petId])

  if (!pet) {
    return (
      <section className="detail-card">
        <h2>Mascota no encontrada</h2>
        <button type="button" onClick={() => navigate('/catalogo')}>
          Volver al catalogo
        </button>
      </section>
    )
  }

  return (
    <section className="detail-card">
      <img src={pet.image} alt={`Foto de ${pet.name}`} />
      <div className="detail-content">
        <h1>{pet.name}</h1>
        <p>
          <strong>Tipo:</strong> {pet.species}
        </p>
        <p>
          <strong>Edad:</strong> {pet.age}
        </p>
        <p>
          <strong>Tamanio:</strong> {pet.size}
        </p>
        <p>{pet.description}</p>
        <p>
          <strong>Visitas:</strong> {pet.visits}
        </p>
        <p>
          <strong>Solicitudes:</strong> {pet.adoptionRequests}
        </p>

        <div className="detail-actions">
          <button type="button" onClick={() => navigate(`/adopcion/${pet.id}`)}>
            Iniciar adopcion
          </button>
          <button type="button" onClick={() => navigate('/catalogo')}>
            Volver
          </button>
        </div>
      </div>
    </section>
  )
}

export default PetDetailPage
