import { useState } from "react";
import { Link } from "react-router-dom";
import Alerta from "../components/Alerta";
import axios from "axios"

const CARGO = ["Lider", "Colaborador", "Admin", "Cliente"]

const Registrar = () => {

  const [ nombre, setNombre ] = useState("")
  const [ email, setEmail ] = useState("")
  const [ telefono, setTelefono ] = useState("")
  const [ cargo, setCargo ] = useState("")
  const [ fechaIngreso, setFechaIngreso ] = useState("")
  const [ identificacion, setIdentificacion ] = useState("")
  const [ password, setPassword ] = useState("")
  const [ repetirPassword, setRepetirPassword ] = useState("")
  const [alerta, setAlerta] = useState({})

  const handleSubmit = async e => {
    e.preventDefault();
    
    if([nombre, email, telefono, cargo, fechaIngreso, identificacion, password, repetirPassword].includes('')){
      setAlerta({
        msg: "Todos los campos son obligatorios",
        error: true
      })

      return
    }

    if(password !== repetirPassword){
      setAlerta({
        msg: "Las password no son iguales",
        error: true
      })

      return
    }

    if(password.length < 6){
      setAlerta({
        msg: "Las password es muy carto, debe ser superior a 6 caracteres",
        error: true
      })

      return
    }

    setAlerta({})
    //Crear un usuario nuevo
    try {
      const { data } = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/usuarios`, {nombre, email, telefono, cargo, fechaIngreso, identificacion, password});
      setAlerta({
        msg:data.msg,
        error: false
      })
      
      setNombre('');
      setEmail("");
      setTelefono("");
      setCargo("");
      setFechaIngreso("");
      setIdentificacion("");
      setPassword("");
      setRepetirPassword("");

    } catch (error) {
      setAlerta({
        msg:error.response.data.msg,
        error: true
      })
    }

  }

  const {msg} = alerta;

  return (
    <>
      <h1 className="text-slate-200 font-black text-4xl capitalize text-center">
        Registrate en la App
      </h1>
      {msg && <Alerta alerta={alerta}/>}
      <form 
          className="my-5 shadow rounded-lg p-10"
          onSubmit={handleSubmit}
      >
        <div className="my-5">
          <label
            className="capitalize text-white block text-xl font-bold"
            htmlFor="nombre"
          >
            Nombre
          </label>
          <input
            id="nombre"
            type="text"
            placeholder="Tu Nombre"
            className="w-full mt-3 p-3 border text-white rounded-xl border-white bg-transparent"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
          />
        </div>
        <div className="my-5">
          <label
            className="capitalize text-white block text-xl font-bold"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email de registro"
            className="w-full mt-3 p-3 border text-white rounded-xl border-white bg-transparent"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="my-5">
          <label
            className="capitalize text-white block text-xl font-bold"
            htmlFor="telefono"
          >
            Teléfono
          </label>
          <input
            id="telefono"
            type="number"
            placeholder="Email de registro"
            className="w-full mt-3 p-3 border text-white rounded-xl border-white bg-transparent"
            value={telefono}
            onChange={e => setTelefono(e.target.value)}
          />
        </div>
        <div className="my-5">
          <label
            className="capitalize text-white block text-xl font-bold"
            htmlFor="cargo"
          >
            Cargo
          </label>
          <select
            id="cargo"
            className="border w-full p-2
            placeholder-white text-white rounded-lg border-white bg-transparent"
            value={cargo}
            onChange={e => setCargo(e.target.value)}
          >
            <option className="text-gray-800" value="">--Seleccionar--</option>
            {CARGO.map( opcion => (
              <option className="text-gray-800" key={opcion} value={opcion}>{opcion}</option>
            ))}
          </select>
        </div>
        <div className="my-5">
            <label
              className="capitalize text-white block text-xl font-bold"
              htmlFor="fechaIngreso"
            >
              Fecha de Ingreso
            </label>
            <input
              id="fechaIngreso"
              type="date"
              className="w-full mt-3 p-3 text-white border rounded-xl border-white bg-transparent caret-white"
              value={fechaIngreso}
              onChange={e => setFechaIngreso(e.target.value)}
            />
        </div>
        <div className="my-5">
          <label
            className="capitalize text-white block text-xl font-bold"
            htmlFor="identificacion"
          >
            Identificación
          </label>
          <input
            id="identificacion"
            type="number"
            placeholder="Identificación de registro"
            className="w-full mt-3 p-3 border text-white rounded-xl border-white bg-transparent"
            value={identificacion}
            onChange={e => setIdentificacion(e.target.value)}
          />
        </div>
        <div className="my-5">
          <label
            className="capitalize text-white block text-xl font-bold"
            htmlFor="password"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Password de registro"
            className="w-full mt-3 p-3 border text-white rounded-xl border-white bg-transparent"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className="my-5">
          <label
            className="capitalize text-white block text-xl font-bold"
            htmlFor="password2"
          >
            Repetir Password
          </label>
          <input
            id="password2"
            type="password"
            placeholder="Repite la Password"
            className="w-full mt-3 p-3 border text-white rounded-xl border-white bg-transparent"
            value={repetirPassword}
            onChange={e => setRepetirPassword(e.target.value)}
          />
        </div>
        <input
          type="submit"
          value="Registro de usuario"
          className="bg-white mb-5 w-full py-3 capitalize rounded-lg
          hover:cursor-pointer hover:bg-slate-300 transition-colors"
        />
      </form>
      <nav className="lg:flex lg:justify-between text-center my-5 text-slate-200 uppercase text-sm">
        <Link className="block" to="/">
          ¿Ya tienes una cuenta? Inicia Sesión
        </Link>
        <Link className="block" to="/olvide-password">
          Olvide mi Password
        </Link>
      </nav>
    </>
  );
};

export default Registrar;
