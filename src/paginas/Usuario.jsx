import { useParams } from "react-router-dom";
import { useEffect } from "react";
import PreviewUsuario from "../components/PreviewUsuario";
import useUsuario from "../hooks/useUsuario";
import ModalEliminarUsuario from "../components/ModalEliminarUsuario";

const Usuario = () => {
    const params = useParams();
    const { obtenerUsuarioApp, usuarioApp, cargando } = useUsuario();

    useEffect(()=> {
        obtenerUsuarioApp(params.id);
    }, []);

  return (
    <>
      <PreviewUsuario key={usuarioApp._id} usuarioApp={usuarioApp}/>
      <ModalEliminarUsuario/>
    </>
  )
}

export default Usuario
