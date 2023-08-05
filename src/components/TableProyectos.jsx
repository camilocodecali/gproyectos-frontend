import { Link } from "react-router-dom";
import { formatearFecha } from "../helpers/formatearFecha";

const TableProyectos = ({ proyecto }) => {
  const { _id, nombre, fechaInicio, cliente, estado, fechaEntrega } =
    proyecto;

  return (
    <>
        <tr>
          <td className="border-b border-slate-300 p-3">{nombre}</td>
          <td className="border-b border-slate-300 p-3">{formatearFecha(fechaInicio)}</td>
          <td className="border-b border-slate-300 p-3">{cliente}</td>
          <td className="border-b border-slate-300 p-3">{proyecto.lider.nombre}</td>
          <td className="rounded-lg px-4 border-b border-slate-300 p-3"><span className={`${estado === "Finalizado" ? 'bg-green-300 text-green-700 text-bold' : 
          estado === "Progreso" ? 'bg-orange-300 text-orange-700 text-bold' : 'bg-red-300 text-red-700 text-bold' } rounded-lg px-4 py-1 text-xs`}>{estado}</span></td>
          <td className="border-b border-slate-300 p-3">{formatearFecha(fechaEntrega)}</td>
          <td className="border-b border-slate-300 p-0 md:p-3">
            <Link className="bg-principal hover:bg-principalHover px-0 md:px-2 py-2 rounded-lg text-white text-xs" to={`/proyectos/${_id}`}>Ver Proyecto</Link>
          </td>
        </tr>
    </>
  );
};

export default TableProyectos;
