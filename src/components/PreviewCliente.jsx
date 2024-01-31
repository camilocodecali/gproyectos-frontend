import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import whatsapp from "/whatsapp.png";
import correo from "/email.png";
import useUsuario from "../hooks/useUsuario";

const PreviewCliente = ({ usuarioCliente }) => {
  const params = useParams();
  const { cargando, handleModalEliminarCliente } = useUsuario();

  const { cargo, email, nombre, personaContacto, telefono, notaCliente, identificacion } = usuarioCliente
  return (
    <>
      <div className="bg-white w-full shadow mt-10 rounded-lg p-5">
        <div className="flex justify-between mb-10">
          <h1 className="text-3xl">
            <b>Cliente:</b> {nombre}
          </h1>
          <div className="flex items-center gap-4">
            <Link
              to={`/clientes/editar/${params.id}`}
              className="bg-sky-500 py-2 px-4 rounded-lg text-white hover:bg-sky-700 font-bold"
            >
              Editar Cliente
            </Link>
            <button 
              onClick={() => handleModalEliminarCliente(usuarioCliente)}
              className="border-2 border-red-500 text-red-500  py-2 px-4 rounded-lg  hover:bg-red-500 hover:text-white font-bold">
              Eliminar
            </button>
          </div>
        </div>
        <div className="flex items-center mb-5">
          <b className="mr-5">Nit: </b> {identificacion}
        </div>
        <div className="mb-5">
          <div>
            <b>Correo: </b> {correo}
          </div>
        </div>
        <div className="mb-5">
          <b>Teléfono:</b> {telefono}
        </div>
        <div className="mb-5">
          <div>
            <b>Persona de contacto: </b> {personaContacto}
          </div>
        </div>
        <div>
          <b>Nota de cliente:</b>
          <p>{notaCliente}</p>
        </div>
        <div className="flex justify-end mb-5">
          <div className="flex items-center gap-2 text-gray-500 hover:text-black">
            <b>Compartir:</b>
            <Link>
              <img src={whatsapp} />
            </Link>
            <Link>
              <img src={correo} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PreviewCliente;
