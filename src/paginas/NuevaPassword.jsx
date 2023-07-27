import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import clienteAxios from "../config/clienteAxios";
import Alerta from "../components/Alerta";


const NuevaPassword = () => {

  const [ tokenValido, setTokenValido ] = useState(false)
  const [ alerta, setAlerta] = useState({})
  const [password, setPassword] = useState('')
  const [passwordModificado, setPasswordModificado] = useState(false)

  const params = useParams()
  const { token } = params


  useEffect(()=>{
    const comprobarToken = async () => {
      try {
        await clienteAxios(`/usuarios/olvide-password/${token}`)
        setTokenValido(true)
      } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
          error: true
        })
      }
    }
    comprobarToken()
  }, [])

  const handleSubmit = async e =>{
    e.preventDefault();

    if(password.length < 6){
      setAlerta({
        msg:'El password debe de ser minimo de 6 caracteres',
        error: true
      })
      return
    }

    try {
      const url = `/usuarios/olvide-password/${token}`
      const {data} = await clienteAxios.post(url, {password})
      setAlerta({
        msg:data.msg,
        error: false
      })

      setPasswordModificado(true)
    } catch (error) {
      setAlerta({
        msg:error.response.data.msg,
        error: true
      })
    }

  }

  const { msg } = alerta


  return (
    <>
      <h1 className="text-slate-200 font-black text-4xl capitalize text-center">
      Reestablece tu password
      </h1>
      {msg && <Alerta alerta={alerta}/>}
      {tokenValido && (
        <>
          <form 
            className=" shadow rounded-lg p-32"
            onSubmit={handleSubmit}
          >
          <div className="my-5">
              <label
                className="capitalize text-white block text-xl font-bold"
                htmlFor="password"
              >
                Nueva Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Escribe la nueva Password"
                className="w-full mt-3 p-3 border rounded-xl text-white border-white bg-transparent"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <input
              type="submit"
              value="Guardar Nuevo Password"
              className="bg-white mb-5 w-full py-3 capitalize rounded-lg
              hover:cursor-pointer hover:bg-slate-300 transition-colors"
            />
          </form>
        </>
      )}
            {passwordModificado && (
              <Link className="block text-center my-5 text-slate-200 uppercase text-sm" to="/">
              Inicia Sesión
            </Link>
            )}


    </>
  )
}

export default NuevaPassword
