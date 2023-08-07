import { createContext, useEffect, useState } from "react"
import clienteAxios from "../config/clienteAxios";
import useAuth from "../hooks/useAuth";

const UsuarioContext = createContext();

const UsuarioProvider = ({children}) => {

  const [colaboradores, setColaboradores] = useState([])
  const [lideres, setLideres] = useState([])
  const [clientes, setClientes] = useState([])

  const {auth} = useAuth()

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

  return (
    <UsuarioContext.Provider
      value={{
        colaboradores,
        lideres,
        clientes
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
