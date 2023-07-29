import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth"
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const RutaProtegida = () => {

const { auth, cargando } = useAuth();

if(cargando){
    return (
        <div className="sk-chase m-auto">
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
        </div>
    )
}

  return (
    <>
        {auth._id ? (
          <div className="bg-gray-100">
            <div className="md:flex md:min-h-screen">
              <Sidebar></Sidebar>
              <main className="md:w-screen p-10">
              <Header />
                <Outlet></Outlet>
              </main>
            </div>

          </div>
        ) : <Navigate to='/' />}
    </>
  )
}

export default RutaProtegida
