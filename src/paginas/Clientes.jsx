import useAuth from "../hooks/useAuth"

const Clientes = () => {

  const { usuariosClientes, cargando } = useAuth()
  console.log(usuariosClientes);

  if(cargando){
    return (
      <p>Cargando...</p>
    )
  }
  return (
    <>
      <h1 className="text-4xl">Clientes</h1>
      <div className="bg-white shadow mt-10 rounded-lg p-5">
        <div className="mb-5">
          <button
              type="button"
              className="py-2 px-6 w-full text-left border-2 rounded-2xl text-slate-400 flex"
            >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>

            Buscar por: Título, cliente o fecha</button>
        </div>
        <div className="relative overflow-x-auto">
          <table className="table-auto w-full border-collapse text-left">
            <thead>
              <tr>
                <th>1</th>
                <th>1</th>
                <th>1</th>
                <th>1</th>
                <th>1</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Clientes
