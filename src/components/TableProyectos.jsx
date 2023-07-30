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
          <td className="border-b border-slate-300 p-3">{estado}</td>
          <td className="border-b border-slate-300 p-3">{formatearFecha(fechaEntrega)}</td>
          <td className="border-b border-slate-300 p-3">
            <Link className="bg-principal hover:bg-principalHover px-2 py-2 rounded-lg text-white text-xs" to={`${_id}`}>Ver Proyecto</Link>
          </td>
        </tr>
    </>
  );
};

export default TableProyectos;
