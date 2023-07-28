
import useAuth from "../hooks/useAuth"



const Header = () => {

  const { auth } = useAuth();
  return (
    <header className="py-5">
      <p className='text-xl font-bold'>Hola: {auth.nombre}</p>
    </header>

  )
}

export default Header