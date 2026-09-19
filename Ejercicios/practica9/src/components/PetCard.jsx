import { useNavigate } from 'react-router-dom'
import './PetCard.css'

function PetCard({ pet }) {
  const navigate = useNavigate()

  return (
    <article className="pet-card">
      <img src={pet.image} alt={`Foto de ${pet.name}`} className="pet-card__image" />
      <div className="pet-card__body">
        <h3>{pet.name}</h3>
        <p>
          {pet.species} - {pet.age} - {pet.size}
        </p>
        <p className="pet-card__description">{pet.description}</p>

        <div className="pet-card__metrics">
          <span>Visitas: {pet.visits}</span>
          <span>Solicitudes: {pet.adoptionRequests}</span>
        </div>

        <div className="pet-card__actions">
          <button type="button" onClick={() => navigate(`/mascotas/${pet.id}`)}>
            Ver detalle
          </button>
          <button type="button" onClick={() => navigate(`/adopcion/${pet.id}`)}>
            Adoptar
          </button>
        </div>
      </div>
    </article>
  )
}

export default PetCard
