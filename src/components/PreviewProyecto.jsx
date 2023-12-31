import { useEffect } from "react";
import useProyectos from "../hooks/useProyectos";
import { Link, useParams } from "react-router-dom";
import whatsapp from "/whatsapp.png";
import correo from "/email.png";
import Alerta from "./Alerta";

const PreviewProyecto = () => {
  const params = useParams();
  const {
    obtenerProyecto,
    proyecto,
    cargando,
    alerta,
    handleModalEliminarProyecto,
    handleModalEstadoProyecto,
  } = useProyectos();

  const {
    nombre,
    estado,
    categoria,
    cliente,
    descripcion,
    fechaInicio,
    fechaEntrega,
    carpetaProyecto,
    lider
  } = proyecto;

  const { msg } = alerta;

  if (cargando) {
    return (
      <div className="sk-chase m-auto">
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
      </div>
    );
  }

  return (
    <div className="bg-white w-full shadow mt-10 rounded-lg p-5">
      {msg && <Alerta alerta={alerta} />}
      <div className="flex justify-between mb-10">
        <h1 className="text-3xl">
          <b>Proyecto:</b> {nombre}
        </h1>
        <div className="flex items-center gap-4">
          <Link
            to={`/proyectos/editar/${params.id}`}
            className="bg-sky-500 py-2 px-4 rounded-lg text-white hover:bg-sky-700 font-bold"
          >
            Editar Proyecto
          </Link>
          <button
            onClick={() => handleModalEstadoProyecto(proyecto)}
            className="border-2 border-yellow-500 text-yellow-500  py-2 px-4 rounded-lg  hover:bg-yellow-500 hover:text-white font-bold"
          >
            Editar Estado
          </button>
          <button
            onClick={() => handleModalEliminarProyecto(proyecto)}
            className="border-2 border-red-500 text-red-500  py-2 px-4 rounded-lg  hover:bg-red-500 hover:text-white font-bold"
          >
            Eliminar
          </button>
        </div>
      </div>
      <div className="flex items-center mb-5">
        <b className="mr-5">Estado: </b>{" "}
        <p
          className={`${
            estado === "Finalizado"
              ? "bg-green-300 text-green-700 font-bold"
              : estado === "Progreso"
              ? "bg-orange-300 text-orange-700 font-bold"
              : "bg-red-300 text-red-700 font-bold"
          } rounded-lg px-4 py-1 text-xs`}
        >
          {estado}
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-5">
        <div>
          <b>Cliente: {cliente?.nombre}</b>
        </div>
        <div>
          <b>Categoría: {categoria}</b>
        </div>
      </div>
      <div className="mb-5">
        <b>Decripción:</b> {descripcion}
      </div>
      <div className="grid grid-cols-2 gap-4 mb-5">
        <div>
          <b>Lider de proyecto:</b> {lider?.nombre}
        </div>
        <div>
          <b>Responsables: </b>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-5">
        <div>
          <b>Fecha de inicio: </b>
          {fechaInicio?.split("T")[0]}
        </div>
        <div>
          <b>Fecha de finalización: </b>
          {fechaEntrega?.split("T")[0]}
        </div>
      </div>
      <div>
        <b>Carpeta del proyecto:</b> {carpetaProyecto}
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
  );
};

export default PreviewProyecto;
