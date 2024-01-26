import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import whatsapp from "/whatsapp.png";
import correo from "/email.png";
import useUsuario from "../hooks/useUsuario";

const PreviewCliente = () => {
    const params = useParams();
    const { cargando } = useUsuario()

   
  return (
    <>
      <div className="bg-white w-full shadow mt-10 rounded-lg p-5">
        <div className="flex justify-between mb-10">
          <h1 className="text-3xl">
            <b>Cliente:</b>
          </h1>
          <div className="flex items-center gap-4">
            <Link
              to={``}
              className="bg-sky-500 py-2 px-4 rounded-lg text-white hover:bg-sky-700 font-bold"
            >
              Editar Cliente
            </Link>
            <button className="border-2 border-red-500 text-red-500  py-2 px-4 rounded-lg  hover:bg-red-500 hover:text-white font-bold">
              Eliminar
            </button>
          </div>
        </div>
        <div className="flex items-center mb-5">
          <b className="mr-5">Nit: </b>
        </div>
        <div className="mb-5">
          <div>
            <b>Correo: </b>
          </div>
        </div>
        <div className="mb-5">
          <b>Teléfono:</b>
        </div>
        <div className="mb-5">
          <div>
            <b>Persona de contacto: </b>
          </div>
        </div>
        <div>
          <b>Nota de cliente:</b>
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
