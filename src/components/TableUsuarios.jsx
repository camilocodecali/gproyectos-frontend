import { Link } from "react-router-dom"

const TableUsuarios = ({usuarioApp}) => {
  const {
    nombre,
    identificacion,
    email,
    telefono,
    cargo,
    _id
  } = usuarioApp


  return (
    <>
                        <tr>
                  <td className="border-b border-slate-300 p-3">{nombre}</td>
                  <td className="border-b border-slate-300 p-3">{identificacion}</td>
                  <td className="border-b border-slate-300 p-3">{email}</td>
                  <td className="border-b border-slate-300 p-3">{telefono}</td>
                  <td className="border-b border-slate-300 p-3">{cargo}</td>
                  <td className="border-b border-slate-300 p-3">
                  <Link className="bg-principal hover:bg-principalHover px-0 md:px-2 py-2 rounded-lg text-white text-xs" to={`/usuarios/${_id}`}>Ver Usuario</Link>
                  </td>
                </tr>
    </>
  )
}

export default TableUsuarios
