import { useEffect, useState } from 'react'
import PetCard from '../components/PetCard'
import { getPetsSorted } from '../services/localDb'
import './CatalogPage.css'

function CatalogPage() {
  const [pets, setPets] = useState([])

  useEffect(() => {
    setPets(getPetsSorted())
  }, [])

  return (
    <section>
      <div className="catalog-header">
        <h1>Catalogo de Adopcion - Amor y Amistad</h1>
        <p>
          Orden inteligente: primero veras las mascotas con menos visitas y menos
          solicitudes de adopcion.
        </p>
      </div>

      <div className="catalog-grid">
        {pets.map((pet) => (
          <PetCard key={pet.id} pet={pet} />
        ))}
      </div>
    </section>
  )
}

export default CatalogPage
