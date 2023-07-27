import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import clienteAxios from "../config/clienteAxios";
import Alerta from "../components/Alerta";

const ConfirmarCuenta = () => {

  const [ alerta, setAlerta ] = useState({})
  const [cuentaConfirmada, setCuentaConfirmada ] = useState(false)

  const params = useParams();
  const {id} = params;

  useEffect(()=>{
    const confirmarCuenta = async () => {
        try {
          const url = `/usuarios/confirmar/${id}`;
          const { data } = await clienteAxios(url)

          setAlerta({
            msg: data.msg,
            error: false
          })
          
          setCuentaConfirmada(true)

        } catch (error) {
           setAlerta({
            msg: error.response.data.msg,
            error: true
           })
        }
    }
    confirmarCuenta()

  },[])

  const { msg } = alerta;

  return (
    <>
      <h1 className="h-auto text-slate-200 font-black text-4xl capitalize text-center">
      Confirma tu cuenta
      </h1>
      <div>
        { msg && <Alerta alerta={alerta}/>}
      </div>
      {cuentaConfirmada && (
        <Link className="block text-center my-5 text-slate-200 uppercase text-sm" to="/">
          Inicia Sesión
        </Link>
      )}


    </>
  )
}

export default ConfirmarCuenta
