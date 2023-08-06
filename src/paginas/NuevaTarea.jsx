import { useEffect } from "react"
import { useParams } from "react-router-dom"
import FormularioTarea from "../components/FormularioTarea"
import useProyectos from "../hooks/useProyectos"

const NuevaTarea = () => {

  const { obtenerProyecto, setTarea } = useProyectos()

  const params = useParams();

  useEffect(()=>{
    obtenerProyecto(params.id)
    setTarea({})
  }, [])
  return (
    <>
        <h1 className="text-4xl">Crear Tarea</h1>
        <div className='mt-10 flex justify-center'>
            <FormularioTarea/>
        </div>

    </>
  )
}

export default NuevaTarea
