import { useEffect } from "react"
import { useParams } from "react-router-dom"
import useUsuario from "../hooks/useUsuario"
import FormularioCliente from "../components/FormularioCliente"

const EditarCliente = () => {
  const params = useParams();
  const {usuarioCliente, obtenerUsuarioCliente} = useUsuario();

  useEffect(() => {
    obtenerUsuarioCliente(params.id);
  }, []);

  const { nombre } = usuarioCliente

  return (
    <>
    <h1 className="text-4xl">Editar Cliente</h1>  {nombre}
    <div className='mt-10 flex justify-center'>
        <FormularioCliente/>
    </div>
  </>
  )
}

export default EditarCliente
