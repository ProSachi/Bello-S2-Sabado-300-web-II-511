import vite from '../assets/vite.svg';

const PerfilUsuario = () => {
    const nombre = 'Ana Turing';
    const rol = 'Desarrolladora Frontend';

    return (
        <div className="tarjeta-perfil">
            <div className="tarjeta-perfil__avatar-wrap">
                <img className="tarjeta-perfil__avatar" src={vite} alt="Avatar del usuario" />
            </div>
            <h1>Perfil de {nombre}</h1>
            <p className="tarjeta-perfil__rol">{rol}</p>
            <p className="tarjeta-perfil__bio">Crea experiencias web modernas y accesibles.</p>
            <button onClick={() => alert('Conectando...')}>Conectar</button>
        </div>
    );
};

export default PerfilUsuario