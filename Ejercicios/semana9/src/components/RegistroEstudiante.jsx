import { useState } from 'react';

export function RegistroEstudiante() {
    // 1. Declaramos un único estado con un objeto limpio
    const [formulario, setFormulario] = useState({
        nombreEstudiante: "",
        codigoBanner: "",
        programaAcademico: "Ingeniería de Software" // Valor por defecto
    });
    // 2. Función maestra de actualización de datos
    const procesarCambioInput = (e) => {
        const { name, value } = e.target;
        // Actualización inmutable usando el operador de propagación (spread)
        setFormulario({
            ...formulario,
            [name]: value
        });
    };
    // 3. Manejador del envío del formulario completo
    const guardarDatos = (e) => {
        e.preventDefault(); // OBLIGATORIO: Detiene el parpadeo y recarga del navegador

        // Aquí el estudiante visualiza la estructura que consume el sistema
        console.log("Estructura de datos lista para envío:", formulario);
        alert(`Estudiante registrado: ${formulario.nombreEstudiante} (Código: ${formulario.codigoBanner})`);
    };
    return (
        <div style={{ maxWidth: '400px', margin: '40px auto', padding: '25px', background: '#111827', color: '#fff', borderRadius: '12px', fontFamily: 'sans-serif' }}>
            <h3 style={{ marginTop: 0, textAlign: 'center', color: '#6366f1' }}>Ficha de Matrícula</h3>

            {/* Conectamos el evento onSubmit al formulario */}
            <form onSubmit={guardarDatos} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>

                <div>
                    <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px' }}>Nombre Completo:</label>
                    <input
                        type="text"
                        name="nombreEstudiante" // Clave idéntica al estado
                        value={formulario.nombreEstudiante}
                        onChange={procesarCambioInput}
                        style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #374151', background: '#1f2937', color: '#fff' }}
                        required
                    />
                </div>
                <div>
                    <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px' }}>Código Banner / ID:</label>
                    <input
                        type="text"
                        name="codigoBanner" // Clave idéntica al estado
                        value={formulario.codigoBanner}
                        onChange={procesarCambioInput}
                        style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #374151', background: '#1f2937', color: '#fff' }}
                        required
                    />
                </div>

                <div>
                    <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px' }}>Programa Curricular:</label>
                    <select
                        name="programaAcademico"
                        value={formulario.programaAcademico}
                        onChange={procesarCambioInput}
                        style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #374151', background: '#1f2937', color: '#fff' }}
                    >
                        <option value="Ingeniería de Software">Ingeniería de Software</option>
                        <option value="Administración">Administración de Empresas</option>
                        <option value="Licenciatura">Licenciatura en Educación</option>
                    </select>
                </div>

                <button
                    type="submit"
                    style={{ width: '100%', padding: '12px', background: '#4f46e5', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px' }}
                >
                    Confirmar Inscripción
                </button>

            </form>

            {/* RECURSO DIDÁCTICO: Monitor del estado en vivo */}
            <div style={{ marginTop: '25px', padding: '12px', background: '#1f2937', borderRadius: '6px', borderLeft: '4px solid #6366f1' }}>
                <span style={{ fontSize: '11px', color: '#9ca3af', fontWeight: 'bold' }}>ESTADO DE REACT EN TIEMPO REAL:</span>
                <pre style={{ margin: '5px 0', fontSize: '13px', color: '#34d399', overflowX: 'auto' }}>
                    {JSON.stringify(formulario, null, 2)}
                </pre>
            </div>

        </div>
    );
}
