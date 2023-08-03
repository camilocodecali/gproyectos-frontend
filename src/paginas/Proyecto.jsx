import { useParams, Link } from 'react-router-dom'
import { useEffect } from "react"
import useProyectos from '../hooks/useProyectos'
import { formatearFecha } from '../helpers/formatearFecha'
import whatsapp from '/whatsapp.png'
import correo from '/email.png'
import Alerta from '../components/Alerta'
import  ModalEliminarProyecto  from '../components/ModalEliminarProyecto'

const Proyecto = () => {
  const params = useParams();
  const {obtenerProyecto, proyecto, cargando, alerta, handleModalEliminarProyecto} = useProyectos();

  console.log(proyecto);

  useEffect(()=>{
    obtenerProyecto(params.id)
  }, [])

  const { nombre, estado, cliente, categoria, descripcion, fechaInicio, 
          fechaEntrega, carpetaProyecto } = proyecto


const {msg} = alerta;

if(cargando){
    return (
        <div className="sk-chase m-auto">
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
        </div>
    )
}

  return (
    <>
      <div className='bg-white w-full shadow mt-10 rounded-lg p-5'>
      {msg && <Alerta alerta={alerta}/> }
        <div className='flex justify-between mb-10'>
          <h1 className='text-3xl'><b>Proyecto:</b> {nombre}</h1>
          <div className='flex items-center gap-4'>
            <Link
              to={`/proyectos/editar/${params.id}`}
              className='bg-sky-500 py-2 px-4 rounded-lg text-white hover:bg-sky-700 font-bold'
            >Editar Proyecto</Link>
            <Link
              to={`/proyectos/editar/${params.id}`}
              className='border-2 border-yellow-500 text-yellow-500  py-2 px-4 rounded-lg  hover:bg-yellow-500 hover:text-white font-bold'
            >Editar Estado</Link>
            <button
              onClick={()=>handleModalEliminarProyecto(proyecto)}
              className='border-2 border-red-500 text-red-500  py-2 px-4 rounded-lg  hover:bg-red-500 hover:text-white font-bold'
            >Eliminar</button>
          </div>
        </div>
        <div className='flex items-center mb-5'>
          <b className='mr-5'>Estado: </b> <p className={`${estado === "Finalizado" ? 'bg-green-300 text-green-700 font-bold' : estado === "Progreso" ? 'bg-orange-300 text-orange-700 font-bold' : 'bg-red-300 text-red-700 font-bold' } rounded-lg px-4 py-1 text-xs`}>{estado}</p>
        </div>
        <div className='grid grid-cols-2 gap-4 mb-5'>
          <div>
            <b>Cliente: {cliente}</b>
          </div>
          <div>
            <b>Categoría: {categoria}</b>
          </div>
        </div>
        <div className='mb-5'>
          <b>Decripción:</b> {descripcion}
        </div>
        <div className='grid grid-cols-2 gap-4 mb-5'>
          <div>
            <b>Lider de proyecto:</b>
          </div>
          <div>
            <b>Responsables: </b>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-4 mb-5'>
          <div>
            <b>Fecha de inicio: </b>{fechaInicio?.split('T')[0]}
          </div>
          <div>
            <b>Fecha de finalización: </b>{fechaEntrega?.split('T')[0]}
          </div>
        </div>
        <div>
          <b>Carpeta del proyecto:</b> {carpetaProyecto}
        </div>
        <div className='flex justify-end mb-5'>
          <div className='flex items-center gap-2 text-gray-500 hover:text-black'>
          <b>Compartir:</b>
          <Link><img src={whatsapp} /></Link>
          <Link><img src={correo} /></Link>
          </div>
        </div>
      </div>

      
      <div className="bg-gray-400 shadow mt-10 rounded-lg p-5">
        <div className="mb-5 flex gap-4 justify-between">
          <div className='flex'>
            <h1 className="text-4xl mr-5 text-white">Tareas del Proyectos</h1>
            <Link to={`/proyectos/crear-tarea/${params.id}`} className="bg-principal hover:bg-principalHover text-white text-lg font-bold py-2 px-8 rounded-lg shadow-lg">+ Crear</Link>
          </div>
          <div>
            <button
              type="button"
              className="py-2 px-6 w-full text-left border-2 rounded-2xl text-white flex"
            >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>

            Buscar por: Título, cliente o fecha</button>
          </div>
        </div>
        <div className="flex justify-between mb-5">
          <div className="block md:flex  gap-4">
            <p className='text-white'>Filtrar por:</p>
            <button className="bg-green-300 text-green-950 px-4 text-sm h-6 rounded-lg cursor-pointer font-bold mb-1 md:mb-0">Finalizado</button>
            <button className="bg-orange-300 text-orange-800 px-4 text-sm h-6 rounded-lg cursor-pointer font-bold mb-1 md:mb-0">Progreso</button>
            <button className="bg-red-300 text-red-800 px-4 text-sm h-6 rounded-lg cursor-pointer font-bold mb-1 md:mb-0">Retrasado</button>
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
      <ModalEliminarProyecto/>
    </>
  )
}

export default Proyecto

