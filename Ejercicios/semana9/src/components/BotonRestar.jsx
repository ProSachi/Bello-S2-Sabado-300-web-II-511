import { useState } from 'react';

const BotonRestar = () => {
    const [numero, setNumero] = useState(10); // Estado de React

    const restar = () => {
        setNumero(numero - 1);
    };

    return (
        <div>
            <h1>Valor: {numero}</h1>
            <button onClick={restar}>Restar</button>
        </div>
    )
}

export default BotonRestar