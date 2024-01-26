import { useState, useEffect } from "react"
import useUsuario from "../hooks/useUsuario"
import Alerta from "./Alerta"


const CARGO = ["Lider", "Colaborador", "Admin", "Cliente"]

const FormularioUsuario = () => {

    const [nombre, setNombre] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [telefono, setTelefono] = useState('')
    const [cargo, setCargo] = useState('')
    const [identificacion, setIdentificacion] = useState('')
    const [personaContacto, setPersonaContacto] = useState('')
    const [notaCliente, setNotaCliente] = useState('')
    const [fechaIngreso, setFechaIngreso] = useState('')
    const [repetirPassword, setRepetirPassword] = useState('')

    const {mostrarAlerta, alerta, submitCliente}= useUsuario()

    useEffect(()=>{

    })

    const handleSubmit = async e => {
        e.preventDefault();
     
        if([nombre, email, telefono, identificacion, personaContacto, notaCliente].includes('')){
            mostrarAlerta({
                msg: ' Todos los campos son Obligatorios',
                error: true
            });
            return
        }

    // Pasar datos al provider
    await submitCliente({nombre, password, email, telefono, cargo, identificacion, personaContacto, notaCliente})
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
                >Nombre Completo</label>
                <input
                    id="nombre"
                    type="text"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg"
                    placeholder="Nombre Completo del Usuario"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                />
            </div>
            <div>
                <label
                    className="text-gray-700 capitalize font-bold text-sm"
                    htmlFor="identificacion"
                >Identificación</label>
                <input
                    id="identificacion"
                    type="number"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg"
                    placeholder="Nit de la empresa"
                    value={identificacion}
                    onChange={e => {
                        setIdentificacion(e.target.value)
                        setPassword(e.target.value)
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
        <div className="mb-5 grid grid-cols-2 gap-4">
        <div>
          <label
            className="text-gray-700 capitalize font-bold text-sm"
            htmlFor="cargo"
          >
            Cargo
          </label>
          <select
            id="cargo"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg"
            value={cargo}
            onChange={e => setCargo(e.target.value)}
          >
            <option className="text-gray-800" value="">--Seleccionar--</option>
            {CARGO.map( opcion => (
              <option className="text-gray-800" key={opcion} value={opcion}>{opcion}</option>
            ))}
          </select>
        </div>
        <div>
            <label
              className="text-gray-700 capitalize font-bold text-sm"
              htmlFor="fechaIngreso"
            >
              Fecha de Ingreso
            </label>
            <input
              id="fechaIngreso"
              type="date"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg"
              value={fechaIngreso}
              onChange={e => setFechaIngreso(e.target.value)}
            />
        </div>
        </div>
        <div className="mb-5 grid grid-cols-2 gap-4">
        <div>
          <label
            className="text-gray-700 capitalize font-bold text-sm"
            htmlFor="password"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Password de registro"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label
            className="text-gray-700 capitalize font-bold text-sm"
            htmlFor="password2"
          >
            Repetir Password
          </label>
          <input
            id="password2"
            type="password"
            placeholder="Repite la Password"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg"
            value={repetirPassword}
            onChange={e => setRepetirPassword(e.target.value)}
          />
        </div>
        </div>

        <div className="flex justify-end gap-4">
            <button className="border-gray-300 border-2 rounded-lg px-10 py-2">Cancelar</button>
            <input 
            type="submit"

            className="bg-principal hover:bg-principalHover px-10 py-2 capitalize font-bold text-white rounded-lg cursor-pointer transition-colors"
            />
        </div>


    </form>
  )
}

export default FormularioUsuario
