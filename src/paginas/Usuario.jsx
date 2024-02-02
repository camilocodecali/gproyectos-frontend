import { useParams } from "react-router-dom";
import { useEffect } from "react";
import PreviewUsuario from "../components/PreviewUsuario";
import useUsuario from "../hooks/useUsuario";

const Usuario = () => {
    const params = useParams();
    const { obtenerUsuarioApp, usuarioApp, cargando } = useUsuario();

    useEffect(()=> {
        obtenerUsuarioApp(params.id);
    }, []);

  return (
    <>
      <PreviewUsuario key={usuarioApp._id} usuarioApp={usuarioApp}/>
    </>
  )
}

export default Usuario
