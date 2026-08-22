

const Tareas = () => {
    const tareas = [
        { id: "t1", nombre: "Comprar pan" },
        { id: "t2", nombre: "Estudiar React" }
    ];

    return (
        <ul>
            {tareas.map((tarea) => (
                <div key={tarea.id}>
                    <h2 style={{ "color": "#2f058b" }}>{tarea.nombre}</h2>
                </div>
            ))}

        </ul>
    )
}

export default Tareas