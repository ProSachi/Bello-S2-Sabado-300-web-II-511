const TarjetaPerfil = () => {
    return (
        <section className="tarjeta-docente">
            <div className="tarjeta-docente__header">
                <img
                    className="tarjeta-docente__foto"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80"
                    alt="Profesor Santiago"
                />
                <div className="tarjeta-docente__badge">Docente</div>
            </div>

            <div className="tarjeta-docente__content">
                <p className="tarjeta-docente__categoria">Desarrollo Web</p>
                <h2 className="tarjeta-docente__nombre">Santiago Gómez</h2>
                <p className="tarjeta-docente__titulo">Profesor de Frontend y UX</p>

                <p className="tarjeta-docente__descripcion">
                    Especialista en React, diseño web y metodologías de aprendizaje práctico,
                    ayudando a estudiantes a crear proyectos reales y funcionales.
                </p>

                <div className="tarjeta-docente__info">
                    <span>React</span>
                    <span>UI/UX</span>
                    <span>Proyectos</span>
                </div>

                <button className="tarjeta-docente__boton">Contactar</button>
            </div>
        </section>
    )
}

export default TarjetaPerfil