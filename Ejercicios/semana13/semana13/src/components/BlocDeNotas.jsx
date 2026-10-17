import { useState, useEffect } from 'react';

const BlocDeNotas = () => {
  // Inicialización perezosa (Lazy initialization): 
  // Lee el localStorage antes de poner el valor inicial.
  const [nota, setNota] = useState(() => {
    const notaGuardada = localStorage.getItem('mi_borrador');
    return notaGuardada ? notaGuardada : "";
  });

  // Cada vez que la variable 'nota' cambia, la sobreescribimos en localStorage
  useEffect(() => {
    localStorage.setItem('mi_borrador', nota);
  }, [nota]);

  return (
    <div>
      <h3>Escribe tu nota (sobrevivirá al F5):</h3>
      <textarea 
        value={nota} 
        onChange={(e) => setNota(e.target.value)} 
        rows="5"
        cols="40"
      />
    </div>
  );
};
export default BlocDeNotas;
