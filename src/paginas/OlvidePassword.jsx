import { useState } from "react";
import { Link } from "react-router-dom";
import Alerta from "../components/Alerta";
import clienteAxios from "../config/clienteAxios";


const OlvidePassword = () => {
  
  const [ email, setEmail ] = useState("")
  const [ alerta, setAlerta ] = useState({})

  const handleSubmit = async e => {
    e.preventDefault()

    if(email == "" || email.length < 6){
      setAlerta({
        msg: "El email es obligatorio",
        error: true
      });
      return
    }

    try {
      const { data } = await clienteAxios.post(`/usuarios/olvide-password`, { email })
      setAlerta({
        msg: data.msg,
        error: false
      })
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true
      })
    }
  }

  const { msg } = alerta;

  return (
    <>
      <h1 className="text-slate-200 font-black text-4xl capitalize text-center">
      Recupera tu acceso
      </h1>
      { msg && <Alerta alerta={alerta}/>}
      <form 
          className=" shadow rounded-lg p-10"
          onSubmit={handleSubmit}
      >

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
            className="w-full mt-3 p-3 border rounded-xl text-white border-white bg-transparent"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <input
          type="submit"
          value="Enviar Instrucciones"
          className="bg-white mb-5 w-full py-3 capitalize rounded-lg
          hover:cursor-pointer hover:bg-slate-300 transition-colors"
        />
      </form>
      <nav className="lg:flex lg:justify-between text-center my-5 text-slate-200 uppercase text-sm">
        <Link className="block" to="/">
          ¿Ya tienes una cuenta? Inicia Sesión
        </Link>
        <Link
          className="block"
          to="/registrar"
        >¿No tienes una cuenta? Regístrate</Link>
      </nav>
    </>
  )
}

export default OlvidePassword
