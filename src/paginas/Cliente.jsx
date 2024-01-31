import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useUsuario from "../hooks/useUsuario";
import ModalEliminarCliente from "../components/ModalEliminarCliente";

import PreviewCliente from "../components/PreviewCliente";

const Cliente = () => {
  const params = useParams();
  const { obtenerUsuarioCliente, usuarioCliente, cargando } = useUsuario();

  useEffect(() => {
    obtenerUsuarioCliente(params.id);
  }, []);

  return (<>
      <PreviewCliente key={usuarioCliente._id} usuarioCliente={usuarioCliente} />
    <ModalEliminarCliente />
  </>

  );
};

export default Cliente;
