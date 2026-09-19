import { initialPets } from '../data/mockPets'

const DB_KEY = 'petShelterDb'
const SESSION_KEY = 'petShelterSession'

function createInitialDb() {
  return {
    pets: initialPets,
    users: [],
    adoptionRequests: [],
  }
}

function saveDb(db) {
  localStorage.setItem(DB_KEY, JSON.stringify(db))
}

function readDb() {
  const rawDb = localStorage.getItem(DB_KEY)
  if (!rawDb) {
    const seed = createInitialDb()
    saveDb(seed)
    return seed
  }

  try {
    const parsedDb = JSON.parse(rawDb)
    if (!parsedDb.pets || !parsedDb.users || !parsedDb.adoptionRequests) {
      const seed = createInitialDb()
      saveDb(seed)
      return seed
    }
    return parsedDb
  } catch {
    const seed = createInitialDb()
    saveDb(seed)
    return seed
  }
}

function sortPetsByMetrics(pets) {
  return [...pets].sort((a, b) => {
    if (a.visits !== b.visits) return a.visits - b.visits
    if (a.adoptionRequests !== b.adoptionRequests) {
      return a.adoptionRequests - b.adoptionRequests
    }
    return a.name.localeCompare(b.name)
  })
}

export function getPetsSorted() {
  const db = readDb()
  return sortPetsByMetrics(db.pets)
}

export function getPetById(petId) {
  const db = readDb()
  return db.pets.find((pet) => pet.id === petId) || null
}

export function incrementPetVisit(petId) {
  const db = readDb()
  db.pets = db.pets.map((pet) =>
    pet.id === petId ? { ...pet, visits: pet.visits + 1 } : pet,
  )
  saveDb(db)
  return db.pets.find((pet) => pet.id === petId) || null
}

export function registerUser(userData) {
  const db = readDb()
  const alreadyExists = db.users.some(
    (user) => user.email.toLowerCase() === userData.email.toLowerCase(),
  )

  if (alreadyExists) {
    return { ok: false, error: 'El correo ya se encuentra registrado.' }
  }

  const newUser = {
    id: `u_${Date.now()}`,
    name: userData.name,
    email: userData.email.toLowerCase(),
    phone: userData.phone,
    password: userData.password,
  }

  db.users.push(newUser)
  saveDb(db)
  setSessionUser(newUser)
  return { ok: true, user: newUser }
}

export function loginUser(email, password) {
  const db = readDb()
  const user = db.users.find(
    (storedUser) =>
      storedUser.email.toLowerCase() === email.toLowerCase() &&
      storedUser.password === password,
  )

  if (!user) {
    return { ok: false, error: 'Credenciales invalidas.' }
  }

  setSessionUser(user)
  return { ok: true, user }
}

export function setSessionUser(user) {
  localStorage.setItem(SESSION_KEY, JSON.stringify(user))
}

export function getSessionUser() {
  const rawSession = localStorage.getItem(SESSION_KEY)
  if (!rawSession) return null

  try {
    return JSON.parse(rawSession)
  } catch {
    localStorage.removeItem(SESSION_KEY)
    return null
  }
}

export function logoutSession() {
  localStorage.removeItem(SESSION_KEY)
}

export function createAdoptionRequest(requestData) {
  const db = readDb()
  const selectedPet = db.pets.find((pet) => pet.id === requestData.petId)
  if (!selectedPet) {
    return { ok: false, error: 'La mascota seleccionada no existe.' }
  }

  const newRequest = {
    id: `r_${Date.now()}`,
    petId: requestData.petId,
    userId: requestData.userId,
    fullName: requestData.fullName,
    phone: requestData.phone,
    address: requestData.address,
    motivation: requestData.motivation,
    createdAt: new Date().toISOString(),
  }

  db.adoptionRequests.push(newRequest)
  db.pets = db.pets.map((pet) =>
    pet.id === requestData.petId
      ? { ...pet, adoptionRequests: pet.adoptionRequests + 1 }
      : pet,
  )

  saveDb(db)
  return { ok: true, request: newRequest }
}
