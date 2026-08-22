import { userMock } from "../data/userMock"
const Tarjeta = () => {
    return (
        <div style={{
            backgroundColor: 'var(--bg)',
            fontSize: '30px'
        }}>
            <h2> {userMock.nombre}</h2>
            <p>{userMock.rol}</p>
            <button style={{ 
                backgroundColor: 'var(--bg)', 
                fontSize: '16px', color: 'white' 
                }}>
                Aceptar
            </button>

        </div>
    )
}

export default Tarjeta