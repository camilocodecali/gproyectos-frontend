import { useState, useEffect, createContext } from "react"
import { useNavigate } from "react-router-dom"
import clienteAxios from "../config/clienteAxios"
import useAuth from "../hooks/useAuth";


const ProyectosContext = createContext();

const ProyectosProvider = ({children}) => {

    const [proyectos, setProyectos] = useState([])
    const [proyectosAsignados, setProyectosAsignados]  = useState([])
    const [proyecto, setProyecto ] = useState({})
    const [alerta, setAlerta] = useState({})
    const [cargando, setCargando] = useState(false)
    const [modalEliminarProyecto, setModalEliminarProyecto] = useState(false)

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
        if(proyecto.id){
            
            await editarProyecto(proyecto)
            
        }else{
            await nuevoProyecto(proyecto)
            
        }
    }

    const obtenerProyecto = async id => {
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
    
            const { data } = await clienteAxios(`/proyectos/${id}`, config)
            setProyecto(data)
        } catch (error) {
            setAlerta({
                msg: error.response.data.msg,
                error:true
            })
        } finally {
                setCargando(false)
        }

    }

    const nuevoProyecto = async proyecto => {
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
            setProyectos([...proyectos, data])
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

    const editarProyecto = async proyecto => {
        try {
            const token = localStorage.getItem('token');
            if(!token) return
            
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            const { data } = await clienteAxios.put(`/proyectos/${proyecto.id}`, proyecto, config)
            //Sincronizar el state
            const proyectosActualizados = proyectos.map(proyectoState => proyectoState._id === data._id ? data : proyectoState )
            setProyectos(proyectosActualizados)
            setAlerta({
                msg: ' Proyecto Actualizado correctamente',
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

    const handleModalEliminarProyecto = proyecto => {
        setProyecto(proyecto)
        setModalEliminarProyecto(!modalEliminarProyecto)

    }

    const eliminarProyecto = async () => {
        try {
            const token = localStorage.getItem('token');
            if(!token) return
            
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            const { data } = await clienteAxios.delete(`/proyectos/${proyecto._id}`, config)

            //Sincronizar el state
            const proyectosActualizados = proyectos.filter(proyectoState => proyectoState._id !== proyecto._id)
            setProyectos(proyectosActualizados)

            setAlerta({
                msg: data.msg,
                error:false
            })

            setModalEliminarProyecto(false)

            setTimeout(() => {
                setAlerta({})
                navigate('/proyectos')
            }, 2000);
        } catch (error) {
            console.log(error);
        }
    }

    const submitTarea = async tarea => {
        try {
            const token = localStorage.getItem('token');
            if(!token) return
            
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            const { data } = await clienteAxios.post('/tareas', tarea, config)
            setAlerta({
                msg: 'Tarea creada correctamente',
                error: false
            })
            setTimeout(() => {
                setAlerta({})
                navigate(`/proyectos/${proyecto._id}`)
            }, 2000);

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
            proyectosAsignados,
            obtenerProyecto,
            proyecto,
            handleModalEliminarProyecto,
            eliminarProyecto,
            modalEliminarProyecto,
            submitTarea
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
