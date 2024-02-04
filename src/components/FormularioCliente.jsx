import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import useUsuario from "../hooks/useUsuario"
import Alerta from "./Alerta"

const FormularioCliente = () => {

    const [id, setId] = useState(null)
    const [nombre, setNombre] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [telefono, setTelefono] = useState('')
    const [cargo, setCargo] = useState('Cliente')
    const [identificacion, setIdentificacion] = useState('')
    const [personaContacto, setPersonaContacto] = useState('')
    const [notaCliente, setNotaCliente] = useState('')

    const params = useParams()

    const {mostrarAlerta, alerta, submitCliente, usuarioCliente}= useUsuario()

    const {auth} = useAuth()


    useEffect(()=>{
        if(params.id && usuarioCliente.nombre){
            setId(usuarioCliente._id)
            setNombre(usuarioCliente.nombre)
            setEmail(usuarioCliente.email)
            setPassword(usuarioCliente.password)
            setTelefono(usuarioCliente.telefono)
            setCargo(usuarioCliente.cargo)
            setIdentificacion(usuarioCliente.identificacion)
            setPersonaContacto(usuarioCliente.personaContacto)
            setNotaCliente(usuarioCliente.notaCliente)
        }else{
            console.log("nuevo");
        }

    },[usuarioCliente])

    const handleSubmit = async e => {
        e.preventDefault();
     
        if([nombre, email, telefono, identificacion, personaContacto, notaCliente, id].includes('')){
            mostrarAlerta({
                msg: ' Todos los campos son Obligatorios',
                error: true
            });
            return
        }

    // Pasar datos al provider
    await submitCliente({nombre, password, email, telefono, cargo, identificacion, personaContacto, notaCliente, id})
    setId(null);
    setNombre('');
    setPassword('');
    setEmail('');
    setTelefono('');
    setCargo('');
    setIdentificacion('');
    setPersonaContacto('');
    setNotaCliente('');
    }



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
                >Razón social</label>
                <input
                    id="nombre"
                    type="text"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg"
                    placeholder="Razón social de la empresa"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                />
            </div>
            <div>
                <label
                    className="text-gray-700 capitalize font-bold text-sm"
                    htmlFor="identificacion"
                >Nit</label>
                <input
                    id="identificacion"
                    type="number"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg"
                    placeholder="Nit de la empresa"
                    value={identificacion}
                    onChange={e => {
                        setIdentificacion(e.target.value)
                    } }
                    
                />
            </div>
        </div>
        <div className="mb-5 grid grid-cols-2 gap-4">
            <div>
                <label
                    className="text-gray-700 capitalize font-bold text-sm"
                    htmlFor="email"
                >Correo</label>
                <input
                    id="email"
                    type="email"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg"
                    placeholder="Ingrese el Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label
                    className="text-gray-700 capitalize font-bold text-sm"
                    htmlFor="telefono"
                >Teléfono</label>
                <input
                    id="telefono"
                    type="number"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg"
                    placeholder="Teléfono de la empresa"
                    value={telefono}
                    onChange={e => setTelefono(e.target.value)}
                />
            </div>
        </div>
        <div className="mb-5 grid grid-cols-1 gap-4">
            <div>
                <label
                    className="text-gray-700 capitalize font-bold text-sm"
                    htmlFor="personaContacto"
                >Persona de contacto</label>
                <input
                    id="personaContacto"
                    type="text"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg"
                    placeholder="Ingrese el nombre de la persona de contacto"
                    value={personaContacto}
                    onChange={e => setPersonaContacto(e.target.value)}
                />
            </div>
        </div>

        <div className="mb-5">
            <label
                className="text-gray-700  font-bold text-sm"
                htmlFor="notaCliente"
            >Nota de cliente</label>
            <textarea
                id="notaCliente"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                placeholder="Escribe una nota para el cliente"
                value={notaCliente}
                onChange={e => setNotaCliente(e.target.value)}

            />
        </div>
        <div className="flex justify-end gap-4">
            <button className="border-gray-300 border-2 rounded-lg px-10 py-2">Cancelar</button>
            <input 
            type="submit"
            value={id ? 'Editar' : 'Crear Cliente'}
            className="bg-principal hover:bg-principalHover px-10 py-2 capitalize font-bold text-white rounded-lg cursor-pointer transition-colors"
            />
        </div>


    </form>
  )
}

export default FormularioCliente
