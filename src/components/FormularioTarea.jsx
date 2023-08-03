import { useState } from "react"
import useProyectos from "../hooks/useProyectos";
import { useParams } from "react-router-dom";
import Alerta from "./Alerta";

const ESTADO = [ "Finalizado", "Progreso", "Retrasado"]


const FormularioTarea = () => {

    const { proyecto, submitTarea, mostrarAlerta, alerta } = useProyectos();

    const params = useParams()

    console.log(proyecto);

    const [nombre, setNombre ] = useState('');
    const [colaboradores, setColaboradores ] = useState('');
    const [fechaInicio, setFechaInicio ] = useState('');
    const [fechaEntrega, setFechaEntrega ] = useState('');
    const [estado, setEstado ] = useState('');
    const [linkRecursos, setLinkRecursos ] = useState('');
    const [descripcion, setDescripcion ] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault()
        if([nombre,
            colaboradores,
            fechaInicio,
            fechaEntrega,
            estado,
            linkRecursos,
            descripcion].includes('')){
                mostrarAlerta({
                    msg: ' Todos los Campos son oblogatorios',
                    error: true
                })
                return
            }

            submitTarea({nombre,
                fechaInicio,
                fechaEntrega,
                estado,
                linkRecursos,
                descripcion,
                proyecto: params.id})
            
    }

    const {msg} = alerta

  return (
    <form 
        className="bg-white shadow py-10 px-5 w-full h-full rounded-lg"
        onSubmit={handleSubmit}
    >
    {msg && <Alerta alerta={alerta}/>}
    <h1 className="text-2xl mb-5">Registra una nueva tarea</h1>
        <div className="mb-5 grid grid-cols-2 gap-4">
            <div>
                <label
                    className="text-gray-700 capitalize font-bold text-sm"
                    htmlFor="nombre"
                >Título</label>
                <input
                    id="nombre"
                    type="text"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg"
                    placeholder="Título de la tarea"
                    value={nombre}
                    onChange={e=>setNombre(e.target.value)}
                />
            </div>
            <div>

            </div>
        </div>
        <div className="mb-5 grid grid-cols-2 gap-4">
            <div>
                <label
                    className="text-gray-700 capitalize font-bold text-sm"
                    htmlFor="proyecto"
                >Proyecto</label>
                <input
                    id="proyecto"
                    type="text"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg"
                    placeholder="Seleccione el Proyecto"
                    defaultValue={proyecto.nombre}
                />
            </div>
            <div>
                <label
                    className="text-gray-700 capitalize font-bold text-sm"
                    htmlFor="colaboradores"
                >Responsable</label>
                <input
                    id="colaboradores"
                    type="text"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg"
                    placeholder="Seleccione los responsables"
                    value={colaboradores}
                    onChange={e=>setColaboradores(e.target.value)}
                />
            </div>
        </div>
        <div className="mb-5 grid grid-cols-2 gap-4">
            <div>
                <label
                    className="text-gray-700 capitalize font-bold text-sm"
                    htmlFor="fechaInicio"
                >Fecha de inicio</label>
                <input
                    id="fechaInicio"
                    type="date"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg"
                    value={fechaInicio}
                    onChange={e=>setFechaInicio(e.target.value)}
                />
            </div>
            <div>
                <label
                    className="text-gray-700 capitalize font-bold text-sm"
                    htmlFor="fechaEntrega"
                >Fecha Entrega</label>
                <input
                    id="fechaEntrega"
                    type="date"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg"
                    value={fechaEntrega}
                    onChange={e=>setFechaEntrega(e.target.value)}
                />
            </div>
        </div>
        <div className="mb-5 grid grid-cols-2 gap-4">
            <div>
                <label
                    className="text-gray-700 capitalize font-bold text-sm"
                    htmlFor="estado"
                >Estado</label>
                <select
                    id="estado"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg"
                    value={estado}
                    onChange={(e)=>setEstado(e.target.value)}
                >
                <option value="">--Seleccionar--</option>
                {ESTADO.map(opcion =>(
                    <option key={opcion} value={opcion}>{opcion}</option>
                ))}
                </select>
            </div>
            <div>
                <label
                    className="text-gray-700 capitalize font-bold text-sm"
                    htmlFor="linkRecursos"
                >Link recursos de la tarea</label>
                <input
                    id="linkRecursos"
                    type="text"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg"
                    placeholder="Pegue aquí el de recursos"
                    value={linkRecursos}
                    onChange={(e)=>setLinkRecursos(e.target.value)}
                />
            </div>
        </div>

        <div className="mb-5">
            <label
                className="text-gray-700 uppercase font-bold text-sm"
                htmlFor="descripcion"
            >Descripción</label>
            <textarea
                id="descripcion"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                placeholder="Descripción del Proyecto"
                value={descripcion}
                onChange={(e)=>setDescripcion(e.target.value)}
            />
        </div>
        <div className="flex justify-end gap-4">
            <button className="border-gray-300 border-2 rounded-lg px-10 py-2">Cancelar</button>
            <input 
            type="submit"
            value='Crear Tarea'
            className="bg-principal hover:bg-principalHover px-10 py-2 capitalize font-bold text-white rounded-lg cursor-pointer transition-colors"
            />
        </div>


    </form>
  )
}

export default FormularioTarea