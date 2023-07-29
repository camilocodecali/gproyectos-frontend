import { useState, useEffect, createContext } from "react"
import { useNavigate } from "react-router-dom"
import clienteAxios from "../config/clienteAxios"
import useAuth from "../hooks/useAuth";


const ProyectosContext = createContext();

const ProyectosProvider = ({children}) => {

    const [proyectos, setProyectos] = useState([])
    const [proyectosAsignados, setProyectosAsignados]  = useState([])
    const [alerta, setAlerta] = useState([])

    const { auth } = useAuth();

    const navigate = useNavigate()

    useEffect(()=>{
        const obtenerProyectos = async () => {
            try {
                const token = localStorage.getItem('token')
                if(!token) return

                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }

                const { data } = await clienteAxios('/proyectos', config)
                setProyectos(data)

            } catch (error) {
                console.log(error);
            }
        }
        obtenerProyectos()
    },[auth])

    useEffect(()=>{
        const obtenerProyectosAsignados = async () => {
            try {
                const token = localStorage.getItem('token')
                if(!token) return

                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }

                const { data } = await clienteAxios('/proyectos/asignados', config)
                setProyectosAsignados(data)

            } catch (error) {
                console.log(error);
            }
        }
        obtenerProyectosAsignados()
    }, [auth])

    const mostrarAlerta = alerta => {
        setAlerta(alerta)

        setTimeout(()=>{
            setAlerta('')
        }, 2500)
    }

    const submitProyecto = async proyecto => {
        try {
            const token = localStorage.getItem('token');
            if(!token) return
            
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            const { data } = await clienteAxios.post('/proyectos', proyecto, config)
            console.log(data);
            setAlerta({
                msg: ' Proyecto creado correctamente',
                error: false
            })
            setTimeout(()=>{
                setAlerta({})
                navigate('/proyectos');
            }, 2500)

        } catch (error) {
            console.log(error);
        }
    }

  return (
    <ProyectosContext.Provider
        value={{
            proyectos,
            mostrarAlerta,
            alerta,
            submitProyecto,
            proyectosAsignados
        }}
    >
        {children}
    </ProyectosContext.Provider>
  )
}

export {
    ProyectosProvider
}

export default ProyectosContext
