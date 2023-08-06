import { useEffect } from "react"
import { useParams } from "react-router-dom"
import useProyectos from "../hooks/useProyectos"
import FormularioTarea from "../components/FormularioTarea"

const EditarTarea = () => {

  const {obtenerTarea} = useProyectos()

  const params = useParams()

  useEffect(()=>{
    obtenerTarea(params.id)
  },[])

  return (
    <>
    <h1 className="text-4xl">Editar Tarea</h1> 
      <div className='mt-10 flex justify-center'>
          <FormularioTarea />
      </div>
    </>
  )
}

export default EditarTarea
