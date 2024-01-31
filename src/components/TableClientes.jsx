import { Link } from "react-router-dom"

const TableClientes = ({usuarioCliente}) => {
    const {cargo, email, nombre, personaContacto, telefono, identificacion, _id} = usuarioCliente

  return (
    <>
                        <tr>
                  <td className="border-b border-slate-300 p-3">{nombre}</td>
                  <td className="border-b border-slate-300 p-3">{identificacion}</td>
                  <td className="border-b border-slate-300 p-3">{email}</td>
                  <td className="border-b border-slate-300 p-3">{personaContacto}</td>
                  <td className="border-b border-slate-300 p-3">{telefono}</td>
                  <td className="border-b border-slate-300 p-3">
                  <Link className="bg-principal hover:bg-principalHover px-0 md:px-2 py-2 rounded-lg text-white text-xs" to={`/clientes/${_id}`}>Ver Cliente</Link>
                  </td>
                </tr>
    </>
  )
}

export default TableClientes
