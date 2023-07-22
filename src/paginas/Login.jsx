
const Login = () => {
  return (
    <>
      <h1 className="text-red-950 font-black text-6xl capitalize text-center">Inicia sesión en la App</h1>
      <form className="my-10 bg-white shadow rounded-lg p-10">
        <div className="my-5">
          <label 
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="email"
          >Email</label>
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
            htmlFor="password"
          >Password</label>
          <input 
            id="password"
            type="password"
            placeholder="Password de registro"
            className="w-full mt-3 p-3 border rounded-xl bg-slate-50"
          />
        </div>
        <input 
          type="submit"
          value="Iniciar Sesión"
          className="bg-gray-600 mb-5 w-full py-3 text-white uppercase font-bold rounded
          hover:cursor-pointer hover:bg-gray-700 transition-colors"
        />
      </form>
    </>
  )
}

export default Login
