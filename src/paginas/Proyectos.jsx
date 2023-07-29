import useProyectos from "../hooks/useProyectos"
import { Link } from "react-router-dom";
import TableProyectos from "../components/TableProyectos";

const Proyectos = () => {

  const { proyectos } = useProyectos()

  return (
    <>
      <h1 className="text-4xl">Proyectos</h1>
      <div className="bg-white shadow mt-10 rounded-lg p-5">
        <table className="table-auto w-full border-collapse text-left">
            <thead>
                <tr>
                <th>Título</th>
                <th>Fecha de Inicio</th>
                <th>Cliente</th>
                <th>Líder de proyecto</th>
                <th>Estado</th>
                <th>Fecha de finalización</th>
                <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
              {proyectos.length ? 
                proyectos.map(proyecto =>(
                  <TableProyectos key={proyecto._id} proyecto={proyecto} />
                ))
              : <p className="mt-5 text-center text-gray-600 uppercase p-5">No hay proyectos aún</p>}
            </tbody>
        </table>
      </div>
      <div className="fixed bottom-10 right-10">
        <Link to='/proyectos/crear-proyecto' className="bg-principal hover:bg-principalHover text-white text-lg font-bold py-8 px-4 rounded-full shadow-lg">+ Crear</Link>
      </div>
    </>
  )
}

export default Proyectos
