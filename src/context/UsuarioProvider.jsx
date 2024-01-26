import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import clienteAxios from "../config/clienteAxios";
import useAuth from "../hooks/useAuth";

const UsuarioContext = createContext();

const UsuarioProvider = ({children}) => {

  const [colaboradores, setColaboradores] = useState([])
  const [lideres, setLideres] = useState([])
  const [cargando, setCargando] = useState(false)
  const [clientes, setClientes] = useState([])
  const [usuariosClientes, setUsuariosClientes] = useState([])
  const [alerta, setAlerta] = useState({})
  const [usuarioCliente, setUsuarioCLiente] = useState([])
  const [usuariosApp, setUsuarioApp] = useState([])

  const {auth} = useAuth()

  const navigate = useNavigate()

  useEffect(()=>{
    const obtenerTodos = async() => {
      setCargando(true)
      try {
        const token = localStorage.getItem('token')
                if(!token) return

                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }
                const {data} = await clienteAxios('/usuarios', config)
                setUsuarioApp(data)
                setCargando(false)
      } catch (error) {
        console.log(error);
      }
    }
    obtenerTodos()
  },[auth])

  useEffect(()=>{
    const obtenerTodosClientes = async() => {
      setCargando(true)
      try {
        const token = localStorage.getItem('token')
                if(!token) return

                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }
                const {data} = await clienteAxios('/usuarios/clientes', config)
                setUsuariosClientes(data)
                setCargando(false)
      } catch (error) {
        console.log(error);
      }
    }
    obtenerTodosClientes()
  },[auth])

  useEffect(()=>{
    const obtenerUsuariosColaborador = async () => {
      try {
        const token = localStorage.getItem('token')
                if(!token) return

                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }
                const {data} = await clienteAxios('/usuarios/colaboradores', config)
                setColaboradores(data)
      } catch (error) {
        console.log(error);
      }
    }
    obtenerUsuariosColaborador()
  },[auth])

  useEffect(()=>{
    const obtenerUsuariosLider = async () => {
      try {
        const token = localStorage.getItem('token')
                if(!token) return

                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }
                const {data} = await clienteAxios('/usuarios/lideres', config)
                setLideres(data)
      } catch (error) {
        console.log(error);
      }
    }
    obtenerUsuariosLider()
  },[auth])

  useEffect(()=>{
    const obtenerUsuariosCliente = async () => {
      try {
        const token = localStorage.getItem('token')
                if(!token) return

                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }
                const {data} = await clienteAxios('/usuarios/clientes', config)
                setClientes(data)
      } catch (error) {
        console.log(error);
      }
    }
    obtenerUsuariosCliente()
  },[auth])

  const mostrarAlerta = alerta => {
    setAlerta(alerta)

    setTimeout(()=>{
        setAlerta('')
    }, 2500)
}

const submitCliente =  async cliente => {
  await nuevoCliente(cliente)
}

const nuevoCliente = async cliente => {
  try {
    const token = localStorage.getItem('token');
    if(!token) return
    
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    }

    const { data } = await clienteAxios.post('/usuarios', cliente, config)
    setUsuariosClientes([...clientes, data])
    setAlerta({
      msg: 'Cliente creado correctamente',
      error: false
  })

    setTimeout(()=>{
      setAlerta({})
      navigate('/clientes')
    }, 2500)

} catch (error) {
    console.log(error);
}
}

const obtenerUsuarioCliente = async id => {
  setCargando(true)
  try {
      const token = localStorage.getItem('token');
      if(!token) return
      
      const config = {
          headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`
          }
      }

      const { data } = await clienteAxios(`/usuarios/clientes/${id}`, config)
      setUsuarioCLiente(data)
       setCargando(false)
  } catch (error) {
      setAlerta({
          msg: error.response.data.msg,
          error:true
      })
  }
}

  return (
    <UsuarioContext.Provider
      value={{
        colaboradores,
        lideres,
        clientes,
        usuariosClientes,
        cargando,
        mostrarAlerta,
        alerta,
        submitCliente,
        usuarioCliente,
        obtenerUsuarioCliente,
        usuariosApp
        
      }}
    >
      {children}
    </UsuarioContext.Provider>
  )
}

export {
  UsuarioProvider
}

export default UsuarioContext
