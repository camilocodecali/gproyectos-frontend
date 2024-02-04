import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import clienteAxios from "../config/clienteAxios";
import useAuth from "../hooks/useAuth";

const UsuarioContext = createContext();

const UsuarioProvider = ({ children }) => {
  const [colaboradores, setColaboradores] = useState([]);
  const [lideres, setLideres] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [clientes, setClientes] = useState([]);
  const [usuariosClientes, setUsuariosClientes] = useState([]);
  const [alerta, setAlerta] = useState({});
  const [usuarioCliente, setUsuarioCLiente] = useState([]);
  const [usuariosApp, setUsuariosApp] = useState([]);
  const [usuarioApp, setUsuarioApp] = useState([]);
  const [modalEliminarCliente, setModalEliminarCliente] = useState(false);
  const [modalEliminarUsuario, setModalEliminarUsuario] = useState(false);

  const { auth } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    const obtenerTodos = async () => {
      setCargando(true);
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };
        const { data } = await clienteAxios("/usuarios", config);
        setUsuariosApp(data);
        setCargando(false);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerTodos();
  }, [auth]);

  useEffect(() => {
    const obtenerTodosClientes = async () => {
      setCargando(true);
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };
        const { data } = await clienteAxios("/usuarios/clientes", config);
        setUsuariosClientes(data);
        setCargando(false);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerTodosClientes();
  }, [auth]);

  useEffect(() => {
    const obtenerUsuariosColaborador = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };
        const { data } = await clienteAxios("/usuarios/colaboradores", config);
        setColaboradores(data);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerUsuariosColaborador();
  }, [auth]);

  useEffect(() => {
    const obtenerUsuariosLider = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };
        const { data } = await clienteAxios("/usuarios/lideres", config);
        setLideres(data);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerUsuariosLider();
  }, [auth]);

  useEffect(() => {
    const obtenerUsuariosCliente = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };
        const { data } = await clienteAxios("/usuarios/clientes", config);
        setClientes(data);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerUsuariosCliente();
  }, []);

  const mostrarAlerta = (alerta) => {
    setAlerta(alerta);

    setTimeout(() => {
      setAlerta("");
    }, 2500);
  };

  const submitCliente = async (cliente) => {
    if (cliente.id) {
      await editarCliente(cliente);
    } else {
      await nuevoCliente(cliente);
    }
  };

  const nuevoCliente = async (cliente) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await clienteAxios.post("/usuarios", cliente, config);
      setUsuariosClientes([...usuariosClientes, data]);
      setAlerta({
        msg: "Cliente creado correctamente",
        error: false,
      });

      setTimeout(() => {
        setAlerta({});
        navigate("/clientes");
      }, 2500);
    } catch (error) {
      console.log(error);
    }
  };

  const editarCliente = async (cliente) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await clienteAxios.put(
        `/usuarios/clientes/${cliente.id}`,
        cliente,
        config
      );
      const clientesActualizados = usuariosClientes.map((clienteState) =>
        clienteState._id === data._id ? data : clienteState
      );
      setUsuariosClientes(clientesActualizados);
      setAlerta({
        msg: " Cliente Actualizado correctamente",
        error: false,
      });
      setTimeout(() => {
        setAlerta({});
        navigate("/clientes");
      }, 2500);
    } catch (error) {
      console.log(error);
    }
  };

  const obtenerUsuarioCliente = async (id) => {
    setCargando(true);
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await clienteAxios(`/usuarios/clientes/${id}`, config);
      setUsuarioCLiente(data);
      setCargando(false);
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true,
      });
    }
  };

  const obtenerUsuarioApp = async (id) => {
    setCargando(true);
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await clienteAxios(`/usuarios/usuario/${id}`, config);
      setUsuarioApp(data);
      setCargando(false);
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true,
      });
    }
  };

  const handleModalEliminarCliente = (cliente) => {
    setUsuarioCLiente(cliente);
    setModalEliminarCliente(!modalEliminarCliente);
  };

  const eliminarCliente = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await clienteAxios.delete(
        `/usuarios/clientes/${usuarioCliente._id}`,
        config
      );
      //sincronizar datos
      const clientesActualizados = usuariosClientes.filter(
        (clienteState) => clienteState._id !== usuarioCliente._id
      );
      setUsuariosClientes(clientesActualizados);
      setAlerta({
        msg: data.msg,
        error: false,
      });
      setModalEliminarCliente(false);
      setTimeout(() => {
        setAlerta({});
        navigate("/clientes");
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  const submitUsuario = async (usuario) => {
    if (usuario.id) {
      await editarUsuarioApp(usuario);
    } else {
      await nuevoUsuarioApp(usuario)
    }

  }

  const nuevoUsuarioApp = async (usuario) => {
    try {
      const token = localStorage.getItem("token")
      if(!token) return;

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
      };

      const {data} = await clienteAxios.post("/usuarios", usuario, config);
      setUsuariosApp([...usuariosApp, data]);
      setAlerta({
        msg: "Usuario creado correctamente",
        error:false
      });
      setTimeout(()=>{
        setAlerta({});
        navigate("/usuarios");
      }, 2500);

    } catch (error) {
      console.log(error);
    }
  }

  const editarUsuarioApp = async (usuario) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const {data} = await clienteAxios.put(`/usuarios/usuario/${usuario.id}`, usuario, config);
      const usuariosAppActualizados = usuariosApp.map((usuarioState)=> usuarioState._id === data._id? data : usuarioState);
      setUsuariosApp(usuariosAppActualizados);
      setAlerta({
        msg: "Usuario Actualizado Correctamente",
        error: false
      })
      setTimeout(()=>{
        setAlerta({});
        navigate("/usuarios");
      }, 2500)
    } catch (error) {
      console.log(error);
    }
  }

  const handleModalEliminarUsuario = async (usuario) => {
    setUsuarioApp(usuario)
    setModalEliminarUsuario(!modalEliminarUsuario)
  }

  const eliminarUsuario = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await clienteAxios.delete(
        `/usuarios/usuario/${usuarioApp._id}`,
        config
      );
      //sincronizar datos
      const usuariosActualizados = usuariosApp.filter(
        (usuarioState) => usuarioState._id !== usuarioApp._id
      );
      setUsuariosApp(usuariosActualizados);
      setAlerta({
        msg: data.msg,
        error: false,
      });
      setModalEliminarUsuario(false);
      setTimeout(() => {
        setAlerta({});
        navigate("/usuarios");
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <UsuarioContext.Provider
      value={{
        colaboradores,
        lideres,
        clientes,
        usuariosClientes,
        cargando,
        mostrarAlerta,
        alerta,
        submitCliente,
        usuarioCliente,
        obtenerUsuarioCliente,
        usuariosApp,
        handleModalEliminarCliente,
        modalEliminarCliente,
        eliminarCliente,
        obtenerUsuarioApp,
        usuarioApp,
        submitUsuario,
        editarUsuarioApp,
        handleModalEliminarUsuario,
        modalEliminarUsuario,
        eliminarUsuario
      }}
    >
      {children}
    </UsuarioContext.Provider>
  );
};

export { UsuarioProvider };

export default UsuarioContext;
