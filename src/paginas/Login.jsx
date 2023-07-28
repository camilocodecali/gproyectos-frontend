import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Alerta from "../components/Alerta"
import clienteAxios from "../config/clienteAxios"
import useAuth from "../hooks/useAuth"
import logo from "/logo.png"

const Login = () => {

  const [email, setEmail ] = useState('')
  const [password, setPassword ] = useState('')
  const [alerta, setAlerta ] = useState({})

  const { setAuth } = useAuth()

  const navigate = useNavigate()



  const handleSubmit = async e => {
    e.preventDefault()

    if([email, password].includes('')){
      setAlerta({
        msg: 'Todos los campos son obligatorios',
        error: true
      })
      return
    }

    try {
      const { data } = await clienteAxios.post('/usuarios/login', {email, password})
      setAlerta({})
      localStorage.setItem('token', data.token)
      setAuth(data)
      navigate('/proyectos')
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true
      })
    }
  }

  const {msg} = alerta

  return (
    <>
      <img className="h-auto max-w-xs mx-auto" src={logo}></img>
      {msg && <Alerta alerta={alerta}/>}
      <form 
        className="my-5 shadow rounded-lg p-10"
        onSubmit={handleSubmit}
      >
        <div className="my-5">
          <label 
            className="capitalize text-white block text-xl font-bold"
            htmlFor="email"
          >Email</label>
          <input 
            id="email"
            type="email"
            placeholder="Email de registro"
            className="w-full mt-3 p-3 border rounded-xl text-white border-white bg-transparent"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="my-5">
          <label 
            className="capitalize text-white block text-xl font-bold"
            htmlFor="password"
          >Password</label>
          <input 
            id="password"
            type="password"
            placeholder="Password de registro"
            className="w-full mt-3 p-3 border rounded-xl text-white border-white bg-transparent"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <input 
          type="submit"
          value="Iniciar Sesión"
          className="bg-white mb-5 w-full py-3 capitalize rounded-lg
          hover:cursor-pointer hover:bg-slate-300 transition-colors"
        />
      </form>
      <nav className="lg:flex lg:justify-between text-center my-5 text-slate-200 uppercase text-sm">
        <Link
          className="block"
          to="/registrar"
        >¿No tienes una cuenta? Regístrate</Link>
        <Link
          className="block"
          to="/olvide-password"
        >Olvide mi Password</Link>
      </nav>
    </>
  )
}

export default Login
