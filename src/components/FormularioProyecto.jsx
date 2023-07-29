import { useState } from "react"
import useProyectos from "../hooks/useProyectos"
import Alerta from "./Alerta"

const ESTADO = [ "Finalizado", "Progreso", "Retrasado"]

const FormularioProyecto = () => {

    const [nombre, setNombre ] = useState('')
    const [descripcion, setDescripcion ] = useState('')
    const [fechaInicio, setFechaInicio ] = useState('')
    const [fechaEntrega, setFechaEntrega ] = useState('')
    const [cliente, setCliente ] = useState('')
    const [lider, setLider ] = useState('')
    const [estado, setEstado ] = useState('')
    const [carpetaProyecto, setCarpetaProyecto ] = useState('')

    const { mostrarAlerta, alerta, submitProyecto } = useProyectos();

    const handleSubmit = async e => {
        e.preventDefault();

        if([nombre, descripcion, fechaInicio ,fechaEntrega, cliente, lider, estado, carpetaProyecto].includes('')){
            mostrarAlerta({
                msg: 'Todos los campos son Obligatorios',
                error: true
            });
            return
        }

        // Pasar datos al provider
        //TODO:falta agregar el cliente y tareas
        await submitProyecto({ nombre, descripcion, fechaInicio ,fechaEntrega, lider, estado, carpetaProyecto })
        setNombre('');
        setDescripcion('');
        setFechaInicio('');
        setFechaEntrega('');
        setCliente('');
        setLider('');
        setEstado('');
        setCarpetaProyecto('');
    };

    const {msg} = alerta;

  return (
    <form 
        className="bg-white shadow py-10 px-5 w-full h-full rounded-lg"
        onSubmit={handleSubmit}
    >
    {msg && <Alerta alerta={alerta}/>}
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
                    placeholder="Título del Proyecto"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                />
            </div>
            <div>
                <label
                    className="text-gray-700 capitalize font-bold text-sm"
                    htmlFor="lider"
                >Lider del Proyecto</label>
                <input
                    id="lider"
                    type="text"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg"
                    placeholder="Seleccione un Lider"
                    value={lider}
                    onChange={e => setLider(e.target.value)}
                />
            </div>
        </div>
        <div className="mb-5 grid grid-cols-2 gap-4">
            <div>
                <label
                    className="text-gray-700 capitalize font-bold text-sm"
                    htmlFor="cliente"
                >Cliente</label>
                <input
                    id="cliente"
                    type="text"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg"
                    placeholder="Seleccione un Cliente"
                    value={cliente}
                    onChange={e => setCliente(e.target.value)}
                />
            </div>
            <div>
                <label
                    className="text-gray-700 capitalize font-bold text-sm"
                    htmlFor="estado"
                >Estado</label>
                <select
                    id="estado"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg"
                    value={estado}
                    onChange={e => setEstado(e.target.value)}
                >
                <option value="">--Seleccionar--</option>
                {ESTADO.map(opcion =>(
                    <option key={opcion} value={opcion}>{opcion}</option>
                ))}
                </select>
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
                    onChange={e => setFechaInicio(e.target.value)}
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
                    onChange={e => setFechaEntrega(e.target.value)}
                />
            </div>
        </div>
        <div className="mb-5">
            <div>
                <label
                    className="text-gray-700 capitalize font-bold text-sm"
                    htmlFor="carpetaProyecto"
                >Carpeta del proyecto</label>
                <input
                    id="carpetaProyecto"
                    type="text"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg"
                    placeholder="Seleccione un Responsable"
                    value={carpetaProyecto}
                    onChange={e => setCarpetaProyecto(e.target.value)}
                />
            </div>
        </div>

        <div className="mb-5">
            <label
                className="text-gray-700 uppercase font-bold text-sm"
                htmlFor="descripcion"
            >Descripción del Proyecto</label>
            <textarea
                id="descripcion"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                placeholder="Descripción del Proyecto"
                value={descripcion}
                onChange={e => setDescripcion(e.target.value)}
            />
        </div>
        <div className="flex justify-end gap-4">
            <button className="border-gray-300 border-2 rounded-lg px-10 py-2">Cancelar</button>
            <input 
            type="submit"
            value="+ Crear"
            className="bg-principal hover:bg-principalHover px-10 py-2 capitalize font-bold text-white rounded-lg cursor-pointer transition-colors"
            />
        </div>


    </form>
  )
}

export default FormularioProyecto
