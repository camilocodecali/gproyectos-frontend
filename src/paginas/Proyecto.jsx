import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import useProyectos from "../hooks/useProyectos";
import ModalEliminarProyecto from "../components/ModalEliminarProyecto";
import PreviewProyecto from "../components/PreviewProyecto";
import Tarea from "../components/Tarea";
import ModalEliminarTarea from "../components/ModalEliminarTarea";
import ModalEstadoProyecto from "../components/ModalEstadoProyecto";
import ModalEstadoTarea from "../components/ModalEstadoTarea";
import io from 'socket.io-client'

let socket;

const Proyecto = () => {
  const params = useParams();
  const { obtenerProyecto, cargando, proyecto, submitTareasProyecto, eliminarTareaProyecto } = useProyectos();

  useEffect(() => {
    obtenerProyecto(params.id);
  }, []);

  useEffect(()=>{
    socket = io(import.meta.env.VITE_BACKEND_URL)
    socket.emit('abrir proyecto', params.id)
  },[])

  useEffect(()=>{
    socket.on('tarea agregada', tareaNueva =>{
      if(tareaNueva.proyecto === proyecto._id){
        submitTareasProyecto(tareaNueva)
      }

    } )
    socket.on('tarea eliminada', tareaEliminada =>{
      if(tareaEliminada.proyecto === proyecto._id){
        eliminarTareaProyecto(tareaEliminada)
      }
    })
  })

  if (cargando) {
    return (
      <div className="sk-chase m-auto">
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
      </div>
    );
  }

  return (
    <>
      <PreviewProyecto />

      <div className="bg-gray-400 shadow mt-10 rounded-lg p-5">
        <div className="mb-5 flex gap-4 justify-between">
          <div className="flex">
            <h1 className="text-4xl mr-5 text-white">Tareas del Proyectos</h1>
            <Link
              to={`/proyectos/crear-tarea/${params.id}`}
              className="bg-principal hover:bg-principalHover text-white text-lg font-bold py-2 px-8 rounded-lg shadow-lg"
            >
              + Crear
            </Link>
          </div>
          <div>
            <button
              type="button"
              className="py-2 px-6 w-full text-left border-2 rounded-2xl text-white flex"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
              Buscar por: Título, cliente o fecha
            </button>
          </div>
        </div>
        <div className="flex justify-between mb-5">
          <div className="block md:flex  gap-4">
            <p className="text-white">Filtrar por:</p>
            <button className="bg-green-300 text-green-950 px-4 text-sm h-6 rounded-lg cursor-pointer font-bold mb-1 md:mb-0">
              Finalizado
            </button>
            <button className="bg-orange-300 text-orange-800 px-4 text-sm h-6 rounded-lg cursor-pointer font-bold mb-1 md:mb-0">
              Progreso
            </button>
            <button className="bg-red-300 text-red-800 px-4 text-sm h-6 rounded-lg cursor-pointer font-bold mb-1 md:mb-0">
              Retrasado
            </button>
          </div>
          <div className="block md:flex gap-4 align-middle text-white">
            Ordenar por:
            <form>
              <select className="border border-white px-4 py-1 rounded-lg text-white bg-transparent">
                <option>Opcion</option>
              </select>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-white shadow mt-10 rounded-lg">
        {proyecto.tareas?.length ? 
          proyecto.tareas?.map( tarea =>(
            <Tarea
              key={tarea._id}
              tarea={tarea}
            />
          )):
          <p className="text-center my-5 p-10">No hay Tareas</p>}
      </div>
      <ModalEstadoProyecto/>
      <ModalEstadoTarea/>
      <ModalEliminarProyecto />
      <ModalEliminarTarea />
    </>
  );
};

export default Proyecto;
