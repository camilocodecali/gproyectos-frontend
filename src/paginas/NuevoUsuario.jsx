import FormularioUsuario from "../components/FormularioUsuario";

const NuevoUsuario = () => {
  return (
    <>
      <h1 className="text-4xl">Crear Usuario</h1>
      <div className="mt-10 flex justify-center">
        <FormularioUsuario />
      </div>
    </>
  );
};

export default NuevoUsuario;
