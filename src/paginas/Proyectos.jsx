import useProyectos from "../hooks/useProyectos"
import { Link } from "react-router-dom";

const Proyectos = () => {

  const { proyectos } = useProyectos()
  console.log(proyectos);

  return (
    <>
      <h1 className="text-4xl">Proyectos</h1>
      <div className="fixed bottom-10 right-10">
        <Link to='/proyectos/crear-proyecto' className="bg-green-700 hover:bg-green-800 text-white text-lg font-bold py-8 px-4 rounded-full shadow-lg">+ Crear</Link>
      </div>
    </>
  )
}

export default Proyectos
