import { useEffect } from "react"
import { useParams } from "react-router-dom"
import useUsuario from "../hooks/useUsuario"
import FormularioUsuario from "../components/FormularioUsuario"



const EditarUsuario = () => {
    const params =  useParams();
    const { obtenerUsuarioApp, usuarioApp, cargando } = useUsuario();

    useEffect(() => {
        obtenerUsuarioApp(params.id);
    },[])

    const {nombre} = usuarioApp
  return (
    <>
     <h1 className="text-4xl">Editar Usuario </h1>  {nombre}
    <div className='mt-10 flex justify-center'>
        <FormularioUsuario/>
    </div>
    </>
  )
}

export default EditarUsuario
