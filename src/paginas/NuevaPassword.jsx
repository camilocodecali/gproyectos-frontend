import { Link } from "react-router-dom";


const NuevaPassword = () => {
  return (
    <>
      <h1 className="text-slate-200 font-black text-6xl capitalize text-center">
      Reestablece tu password
      </h1>
      <form className=" shadow rounded-lg p-32">
      <div className="my-5">
          <label
            className="capitalize text-white block text-xl font-bold"
            htmlFor="password"
          >
            Nueva Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Escribe la nueva Password"
            className="w-full mt-3 p-3 border rounded-xl border-white bg-transparent"
          />
        </div>
        <input
          type="submit"
          value="Guardar Nuevo Password"
          className="bg-white mb-5 w-full py-3 capitalize rounded-lg
          hover:cursor-pointer hover:bg-slate-300 transition-colors"
        />
      </form>
        <Link className="block text-center my-5 text-slate-200 uppercase text-sm" to="/">
          Inicia Sesión
        </Link>

    </>
  )
}

export default NuevaPassword
