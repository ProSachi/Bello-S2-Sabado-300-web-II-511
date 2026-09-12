import TarjetaCurso from "./TarjetaCurso";
import baseDatosCursos from "../data/baseDatosCursos";

export function ListaCursos() {
    return (
        <div>
            {baseDatosCursos.map((curso) => (
                // El atributo 'key' es un requisito técnico obligatorio para el motor de reconciliación de React
                <TarjetaCurso key={curso.id} nombre={curso.titulo} fase={curso.modulo} />))}
        </div>
    );
}
