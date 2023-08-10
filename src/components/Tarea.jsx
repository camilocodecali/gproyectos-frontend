import { Link, useParams } from "react-router-dom";
import { formatearFecha } from "../helpers/formatearFecha"
import useProyectos from "../hooks/useProyectos";

const Tarea = ({tarea}) => {
    const params = useParams()
    const {colaborador, estado, fechaEntrega, fechaInicio, linkRecursos, nombre } = tarea


    const {handleModalEliminarTarea, handleModalEstadoTarea, proyecto} = useProyectos()
    console.log(tarea);
    return (
    <div className="border-b p-5 flex justify-between items-center">
      <div className="flex flex-col items-start">
        <div className="flex items-center gap-10 mb-5">
            <p className="mb-1 text-4xl text-bold">{nombre}</p>
            <p className={`${estado === "Finalizado" ? 'bg-green-300 text-green-700 text-bold' : estado === "Progreso" ? 'bg-orange-300 text-orange-700 text-bold' : 'bg-red-300 text-red-700 text-bold' } rounded-lg px-4 py-1 text-xs`}>{estado}</p>
        </div>
        <div className="flex mb-5">
            <b>Responsables:</b><p>{colaborador.nombre}</p>
        </div>
        <div className="flex items-center gap-10 mb-5">
            <b>Fecha de inicio:</b><p className="mb-1 text-sm">{formatearFecha(fechaInicio)}</p>
            <b>Fecha de finalización:</b><p className="mb-1 text-sm">{formatearFecha(fechaEntrega)}</p>
        </div>
        <div className="flex">
        <b>Link recursos de la tarea: </b><p>{linkRecursos}</p>
        </div>
        

      </div>
      <div className="flex flex-col gap-4">
          <Link
            to={`/proyectos/tarea/${tarea._id}`}
            className="bg-green-500 py-2 px-4 rounded-lg text-white hover:bg-green-700 font-bold text-center"
          >
            Ver Tarea
          </Link>
          <button
            onClick={()=> handleModalEstadoTarea(tarea)}
            className="border-2 border-yellow-500 text-yellow-500  py-2 px-4 rounded-lg  hover:bg-yellow-500 hover:text-white font-bold"
          >
            Editar Estado
          </button>
          <button
            onClick={() => handleModalEliminarTarea(tarea)}
            className="border-2 border-red-500 text-red-500  py-2 px-4 rounded-lg  hover:bg-red-500 hover:text-white font-bold"
          >
            Eliminar
          </button>
        </div>
    </div>
  )
}

export default Tarea
