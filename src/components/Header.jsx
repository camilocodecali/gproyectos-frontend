
import useAuth from "../hooks/useAuth"



const Header = () => {

  const { auth } = useAuth();
  return (
    <header className="py-5 md:flex md:justify-between">
      <p className='text-xl font-bold'>Hola: {auth.nombre}</p>
      <button className="bg-gray-500 hover:bg-gray-600 text-white rounded-lg py-2 px-6 transition-colors">Volver</button>
    </header>

  )
}

export default Header