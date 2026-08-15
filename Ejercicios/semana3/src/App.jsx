import './App.css'
import { Alert } from './components/Alert'
import ButtonUsage from './components/ButtonUsage'
import GlowCard from './components/GlowCard'
import { Header } from './components/Header'
import PerfilUsuario from './components/PerfilUsuario'

function App() {
  return (
    < >
      <Header />
      <GlowCard>
        <PerfilUsuario />
      </GlowCard>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <ButtonUsage />
      <br />
      <br />
      <br />
      <Alert />

    </ >
  )
}

export default App
