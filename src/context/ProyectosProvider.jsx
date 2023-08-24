import { useState, useEffect, createContext } from "react"
import { useNavigate } from "react-router-dom"
import clienteAxios from "../config/clienteAxios"
import useAuth from "../hooks/useAuth";
import io from "socket.io-client";

let socket;


const ProyectosContext = createContext();

const ProyectosProvider = ({children}) => {

    const [proyectos, setProyectos] = useState([])
    const [proyectosAsignados, setProyectosAsignados]  = useState([])
    const [proyecto, setProyecto ] = useState({})
    const [alerta, setAlerta] = useState({})
    const [cargando, setCargando] = useState(false)
    const [modalEliminarProyecto, setModalEliminarProyecto] = useState(false)
    const [tarea, setTarea] = useState({})
    const [modalEliminarTarea, setModalEliminarTarea] = useState(false)
    const [modalEstadoProyecto, setModalEstadoProyecto] = useState(false)
    const [modalEstadoTarea, setModalEstadoTarea] = useState(false)

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

    },[])

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
    }, [])

    useEffect(()=>{
        socket = io(import.meta.env.VITE_BACKEND_URL)
    },[])

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
             setCargando(false)
        } catch (error) {
            setAlerta({
                msg: error.response.data.msg,
                error:true
            })
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

            setModalEstadoProyecto(false)

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

    const obtenerTarea = async id =>{
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
    
            const { data } = await clienteAxios(`/tareas/${id}`, config)
            setTarea(data)
        } catch (error) {
            setAlerta({
                msg: error.response.data.msg,
                error: true
            })
        } finally {
            setCargando(false)

        }
    }

    const submitTarea = async tarea => {
        if (tarea.id) {
            editarTarea(tarea)
        }else{
            nuevaTarea(tarea)
        }
        
    } 
    const nuevaTarea = async tarea => {
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

            //Socket io
            socket.emit('nueva tarea', data)

            setTimeout(() => {
                setAlerta({})
                navigate(`/proyectos/${proyecto._id}`)
            }, 2000);

        } catch (error) {
            console.log(error);
        }
    }

    const editarTarea = async tarea => {
        console.log(tarea);
        try {
            const token = localStorage.getItem('token');
            if(!token) return
            
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            
            const { data } = await clienteAxios.put(`/tareas/${tarea.id}`, tarea, config)
            //Sincronizar el state
            setModalEstadoTarea(false)
            setAlerta({
                msg:'Tarea Actualizada correctamente',
                error: false
            })

            //Socket io
            socket.emit('actualizar tarea', data)


            setTimeout(()=>{
                setAlerta({})
                navigate(`/proyectos/${proyecto._id}`)
            }, 2500)
        } catch (error) {
            console.log(error);
        }
    }

    const handleModalEliminarTarea = tarea => {
        setTarea(tarea)
        setModalEliminarTarea(!modalEliminarTarea)
        console.log(tarea);

    }

    const eliminarTarea = async tarea => {
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

            const { data } = await clienteAxios.delete(`/tareas/${tarea._id}`, config)
            console.log(data);
            setAlerta({
                msg: 'Tarea Eliminada correctamente',
                error:false
            })

             //Socket
            socket.emit('eliminar tarea', tarea)

            setModalEliminarTarea(false)
            setTimeout(() => {
                setAlerta({})
                navigate(`/proyectos/${proyecto._id}`)
            }, 2500);


        } catch (error) {
            console.log(error);
        }finally{
            setCargando(false)
        }
    }

    const handleModalEstadoProyecto = proyecto => {
        setProyecto(proyecto)
        setModalEstadoProyecto(!modalEstadoProyecto)

    }

    const handleModalEstadoTarea = tarea => {
        setTarea(tarea)
        setModalEstadoTarea(!modalEstadoTarea)

    }

    //Socket io
    const submitTareasProyecto = (tarea) => {
            //Agregar tarea al state
            const proyectoActualizado = {...proyecto}
            proyectoActualizado.tareas = [...proyectoActualizado.tareas, tarea]
            setProyecto(proyectoActualizado)
    }

    const eliminarTareaProyecto = (tarea) => {
        const proyectoActualizado = {...proyecto}
        proyectoActualizado.tareas = proyectoActualizado.tareas.filter(tareaState =>
            tareaState._id !== tarea._id)
        setProyecto(proyectoActualizado)
    }

    const actualizarTareaProyecto = tarea => {
            //Agregar tarea al state
            const proyectoActualizado = {...proyecto}
            proyectoActualizado.tareas = proyectoActualizado.tareas.map( tareaState =>
                tareaState._id === tarea._id ? tarea : tareaState)
            setProyecto(proyectoActualizado)
    }


  return (
    <ProyectosContext.Provider
        value={{
            proyectos,
            mostrarAlerta,
            alerta,
            cargando,
            submitProyecto,
            proyectosAsignados,
            obtenerProyecto,
            proyecto,
            handleModalEliminarProyecto,
            eliminarProyecto,
            modalEliminarProyecto,
            obtenerTarea,
            tarea,
            setTarea,
            submitTarea,
            modalEliminarTarea,
            handleModalEliminarTarea,
            eliminarTarea,
            modalEstadoProyecto,
            handleModalEstadoProyecto,
            modalEstadoTarea,
            handleModalEstadoTarea,
            submitTareasProyecto,
            eliminarTareaProyecto,
            actualizarTareaProyecto
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
