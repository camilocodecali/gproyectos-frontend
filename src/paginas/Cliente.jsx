import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useUsuario from "../hooks/useUsuario";

import PreviewCliente from "../components/PreviewCliente";

const Cliente = () => {
  const params = useParams();
  const { obtenerUsuarioCliente, usuariosCliente, cargando } = useUsuario()
  
  useEffect(()=>{
    const userObtenido = obtenerUsuarioCliente(params.id)
  },[])


  return (
    <PreviewCliente />
  )
}

export default Cliente
