import { useEffect } from "react"
import { useParams } from "react-router-dom"
import useProyectos from "../hooks/useProyectos"
import FormularioProyecto from "../components/FormularioProyecto"

const EditarProyecto = () => {
  const params = useParams();
  const {obtenerProyecto, proyecto, cargando} = useProyectos();

  useEffect(()=>{
    obtenerProyecto(params.id)
  }, [])

  const { nombre } = proyecto
  
if(cargando){
  return (
      <div className="sk-chase m-auto">
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
      </div>
  )
}

  return (
      <>
        <h1 className="text-4xl">Editar Proyecto</h1> {nombre}
        <div className='mt-10 flex justify-center'>
            <FormularioProyecto/>
        </div>
      </>
  )
}

export default EditarProyecto
