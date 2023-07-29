import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth"
import logo from "/logo.png"


const Sidebar = () => {

  const { auth } = useAuth();
  return (
    <aside className="md:w-1/4 lg:w-1/5 xl:w-1/6 px-5 py-10 bg-white">
      <img className="h-auto w-50 p-5 mb-10" src={logo}></img>
      <div className="px-5">
        <Link className="block mb-5" to='/proyectos'>Inicio</Link>
        <Link className="block mb-5" to='/proyectos'>Proyectos</Link>
        <Link className="block mb-5 ml-4" to='/proyectos/asignados'>Asignados</Link>
        <Link className="block mb-5" to='/clientes'>Clientes</Link>
        <Link className="block mb-5" to='/usuarios'>Usuarios</Link>
        <Link className="block mb-5" to='/'>Cerrar sesión</Link>
      </div>


    </aside>
  )
}

export default Sidebar
