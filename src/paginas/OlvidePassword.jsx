import { Link } from "react-router-dom";


const OlvidePassword = () => {
  return (
    <>
      <h1 className="text-slate-200 font-black text-6xl capitalize text-center">
      Recupera tu acceso
      </h1>
      <form className=" shadow rounded-lg p-32">

        <div className="my-5">
          <label
            className="capitalize text-white block text-xl font-bold"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email de registro"
            className="w-full mt-3 p-3 border rounded-xl border-white bg-transparent"
          />
        </div>

        <input
          type="submit"
          value="Enviar Instrucciones"
          className="bg-white mb-5 w-full py-3 capitalize rounded-lg
          hover:cursor-pointer hover:bg-slate-300 transition-colors"
        />
      </form>
      <nav className="lg:flex lg:justify-between text-center my-5 text-slate-200 uppercase text-sm">
        <Link className="block" to="/">
          ¿Ya tienes una cuenta? Inicia Sesión
        </Link>
        <Link
          className="block"
          to="/registrar"
        >¿No tienes una cuenta? Regístrate</Link>
      </nav>
    </>
  )
}

export default OlvidePassword
