import { Link } from "react-router-dom"
import TableUsuarios from "../components/TableUsuarios"
import useUsuario from "../hooks/useUsuario";


const Usuarios = () => {
  const {  cargando, usuariosApp } = useUsuario()
 
  return (
    <>
      <h1 className="text-4xl">Usuarios</h1>
      <div className="bg-white shadow mt-10 rounded-lg p-5">
        <div className="mb-5">
          <button
              type="button"
              className="py-2 px-6 w-full text-left border-2 rounded-2xl text-slate-400 flex"
            >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>

            Buscar por: Nombre, identificación o correo</button>
        </div>
        <div className="relative overflow-x-auto">
          <table className="table-auto w-full border-collapse text-left">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Identificación</th>
                <th>Correo</th>
                <th>Teléfono</th>
                <th>Cargo</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
            {usuariosApp.length ?
              usuariosApp.map(usuarioApp =>(
                <TableUsuarios key={usuarioApp._id} usuarioApp={usuarioApp} />
              )) : <tr>No hay clientes</tr>}
            </tbody>
          </table>
        </div>
      </div>
      <div className="fixed bottom-10 right-10">
        <Link to='/usuarios/crear-usuario' className="bg-principal hover:bg-principalHover text-white text-lg font-bold py-8 px-4 rounded-full shadow-lg">+ Crear</Link>
      </div>
    </>
  )
}

export default Usuarios
