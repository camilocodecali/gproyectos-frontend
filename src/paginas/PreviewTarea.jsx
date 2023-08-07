import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import useProyectos from "../hooks/useProyectos"
import ModalEliminarTarea from "../components/ModalEliminarTarea";
import ModalEstadoTarea from "../components/ModalEstadoTarea";
import whatsapp from '/whatsapp.png';
import correo from '/email.png';

const PreviewTarea = () => {

    const { obtenerTarea, tarea, handleModalEliminarTarea, handleModalEstadoTarea } = useProyectos()

    const params = useParams()
    const {nombre, descripcion, estado, proyecto, fechaEntrega, fechaInicio, linkRecursos} = tarea

    useEffect(()=>{
        obtenerTarea(params.id)
    },[tarea])

  return (
    <>
      <div className="bg-white w-full shadow mt-10 rounded-lg p-5">
      
      <div className="flex justify-between mb-10">
        <h1 className="text-3xl">
          <b>Tarea:</b> {nombre}
        </h1>
        <div className="flex items-center gap-4">
          <Link
            to={`/proyectos/editar-tarea/${params.id}`}
            className="bg-sky-500 py-2 px-4 rounded-lg text-white hover:bg-sky-700 font-bold"
          >
            Editar Tarea
          </Link>
          <button
            onClick={()=>handleModalEstadoTarea(tarea)}
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
      <div className="flex items-center mb-5">
        <b className="mr-5">Estado: </b>
        <p
          className={`${
            estado === "Finalizado"
              ? "bg-green-300 text-green-700 font-bold"
              : estado === "Progreso"
              ? "bg-orange-300 text-orange-700 font-bold"
              : "bg-red-300 text-red-700 font-bold"
          } rounded-lg px-4 py-1 text-xs`}
        >
          {estado}
        </p>
      </div>
      <div className="mb-5">
        <div>
          <b>Proyecto: {proyecto?.nombre}</b>
        </div>
      </div>
      <div className="mb-5">
        <b>Decripción:</b> {descripcion}
      </div>
      <div className="mb-5">
        <div>
          <b>Responsables: </b>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-5">
        <div>
          <b>Fecha de inicio: </b> {fechaInicio?.split('T')[0]}
          {}
        </div>
        <div>
          <b>Fecha de finalización: </b> {fechaEntrega?.split('T')[0]}
          {}
        </div>
      </div>
      <div>
        <b>Link recursos de la tarea:</b> {linkRecursos}
      </div>
      <div className="flex justify-end mb-5">
        <div className="flex items-center gap-2 text-gray-500 hover:text-black">
          <b>Compartir:</b>
          <Link>
            <img src={whatsapp} />
          </Link>
          <Link>
            <img src={correo} />
          </Link>
        </div>
      </div>
    </div>
    <ModalEstadoTarea/>
    <ModalEliminarTarea/>
    </>

  )
}

export default PreviewTarea
