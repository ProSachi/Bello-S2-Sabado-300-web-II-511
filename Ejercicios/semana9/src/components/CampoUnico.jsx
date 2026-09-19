import { useState } from 'react';

export function CampoUnico() {
  const [texto, setTexto] = useState("");
  console.log(texto)

  return (
    <input 
      type="text" 
      value={texto} 
      onChange={(event) => setTexto(event.target.value)} 
    />
  );
}
