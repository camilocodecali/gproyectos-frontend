import { Link } from "react-router-dom";

const ConfirmarCuenta = () => {
  return (
    <>
      <h1 className="h-screen text-slate-200 font-black text-6xl capitalize text-center">
      Confirma tu cuenta
      </h1>

        <Link className="block text-center my-5 text-slate-200 uppercase text-sm" to="/">
          Inicia Sesión
        </Link>

    </>
  )
}

export default ConfirmarCuenta
