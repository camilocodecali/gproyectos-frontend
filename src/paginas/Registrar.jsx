import { Link } from "react-router-dom";

const Registrar = () => {
  return (
    <>
      <h1 className="text-red-950 font-black text-6xl capitalize text-center">
        Registrate en la App
      </h1>
      <form className="my-10 bg-white shadow rounded-lg p-10">
        <div className="my-5">
          <label
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="nombre"
          >
            Nombre
          </label>
          <input
            id="nombre"
            type="text"
            placeholder="Tu Nombre"
            className="w-full mt-3 p-3 border rounded-xl bg-slate-50"
          />
        </div>
        <div className="my-5">
          <label
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email de registro"
            className="w-full mt-3 p-3 border rounded-xl bg-slate-50"
          />
        </div>
        <div className="my-5">
          <label
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="telefono"
          >
            Teléfono
          </label>
          <input
            id="telefono"
            type="number"
            placeholder="Email de registro"
            className="w-full mt-3 p-3 border rounded-xl bg-slate-50"
          />
        </div>
        <div className="my-5">
          <label
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="cargo"
          >
            Cargo
          </label>
          <select
            id="cargo"
            className="border w-full p-2
            placeholder-gray-400 rounded-lg"
          >
            <option value="">--Seleccionar--</option>
          </select>
        </div>
        <div className="my-5">
            <label
              className="uppercase text-gray-600 block text-xl font-bold"
              htmlFor="fechaIngreso"
            >
              Fecha de Ingreso
            </label>
            <input
              id="fechaIngreso"
              type="date"
              className="w-full mt-3 p-3 border rounded-xl bg-slate-50"
            />
        </div>
        <div className="my-5">
          <label
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="identificacion"
          >
            Identificación
          </label>
          <input
            id="identificacion"
            type="number"
            placeholder="Identificación de registro"
            className="w-full mt-3 p-3 border rounded-xl bg-slate-50"
          />
        </div>
        <div className="my-5">
          <label
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="password"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Password de registro"
            className="w-full mt-3 p-3 border rounded-xl bg-slate-50"
          />
        </div>
        <div className="my-5">
          <label
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="password2"
          >
            Repetir Password
          </label>
          <input
            id="password2"
            type="password"
            placeholder="Repite la Password"
            className="w-full mt-3 p-3 border rounded-xl bg-slate-50"
          />
        </div>
        <input
          type="submit"
          value="Registro de usuario"
          className="bg-gray-600 mb-5 w-full py-3 text-white uppercase font-bold rounded
          hover:cursor-pointer hover:bg-gray-700 transition-colors"
        />
      </form>
      <nav className="lg:flex lg:justify-between text-center my-5 text-slate-500 uppercase text-sm">
        <Link className="block" to="/">
          ¿Ya tienes una cuenta? Inicia Sesión
        </Link>
        <Link className="block" to="/olvide-password">
          Olvide mi Password
        </Link>
      </nav>
    </>
  );
};

export default Registrar;
