import { Link } from "react-router-dom"
import logo from "/logo.png"

const Login = () => {
  return (
    <>
      <img className="h-auto max-w-xs mx-auto" src={logo}></img>
      <form className="my-5 shadow rounded-lg p-10">
        <div className="my-5">
          <label 
            className="capitalize text-white block text-xl font-bold"
            htmlFor="email"
          >Email</label>
          <input 
            id="email"
            type="email"
            placeholder="Email de registro"
            className="w-full mt-3 p-3 border rounded-xl border-white bg-transparent"
          />
        </div>
        <div className="my-5">
          <label 
            className="capitalize text-white block text-xl font-bold"
            htmlFor="password"
          >Password</label>
          <input 
            id="password"
            type="password"
            placeholder="Password de registro"
            className="w-full mt-3 p-3 border rounded-xl border-white bg-transparent"
          />
        </div>
        <input 
          type="submit"
          value="Iniciar Sesión"
          className="bg-white mb-5 w-full py-3 capitalize rounded-lg
          hover:cursor-pointer hover:bg-slate-300 transition-colors"
        />
      </form>
      <nav className="lg:flex lg:justify-between text-center my-5 text-slate-200 uppercase text-sm">
        <Link
          className="block"
          to="/registrar"
        >¿No tienes una cuenta? Regístrate</Link>
        <Link
          className="block"
          to="/olvide-password"
        >Olvide mi Password</Link>
      </nav>
    </>
  )
}

export default Login
