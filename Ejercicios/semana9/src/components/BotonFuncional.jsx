import { useState } from 'react';

export function BotonFuncional() {
    const [numero, setNumero] = useState(0); // Estado de React

    const sumar = () => {
        setNumero(numero + 1);
    };

    return (
        <div>
            <h1>Valor: {numero}</h1>
            <button onClick={sumar}>Sumar (Sí funciona)</button>
        </div>
    );
}
