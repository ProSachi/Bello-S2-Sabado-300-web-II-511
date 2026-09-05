import './App.css'
import Acerca from './components/Acerca';
import Contactenos from './components/Contactenos';
import { LayoutPrincipal } from './layouts/LayoutPrincipal';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <main className="page-content">
        <Routes>
          <Route path="/" element={<LayoutPrincipal />}></Route>
          <Route path="/acerca" element={<Acerca />} />
          <Route path="/contactenos" element={<Contactenos />} />
          <Route path="*" element={<LayoutPrincipal />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
export default App
