import { BrowserRouter, Routes, Route} from "react-router-dom"

import AuthLayout from "./layouts/AuthLayout"
import Login from "./paginas/Login"
import Registrar from "./paginas/Registrar"
import OlvidePassword from "./paginas/OlvidePassword"
import NuevaPassword from "./paginas/NuevaPassword"
import ConfirmarCuenta from "./paginas/ConfirmarCuenta"
import RutaProtegida from "./layouts/RutaProtegida"
import Proyectos from "./paginas/Proyectos"
import NuevoProyecto from "./paginas/NuevoProyecto"
import ProyectosAsignados from "./paginas/ProyectosAsignados"
import Clientes from "./paginas/Clientes"
import Usuarios from "./paginas/Usuarios"
import Proyecto from "./paginas/Proyecto"
import EditarProyecto from "./paginas/EditarProyecto"
import NuevaTarea from "./paginas/NuevaTarea"
import EditarTarea from "./paginas/EditarTarea"
import PreviewTarea from "./paginas/PreviewTarea"
import NuevoCliente from "./paginas/NuevoCliente"
import EditarCliente from "./paginas/EditarCliente"
import Cliente from "./paginas/Cliente"
import NuevoUsuario from "./paginas/NuevoUsuario"
import Usuario from "./paginas/Usuario"
import EditarUsuario from "./paginas/EditarUsuario"

import { AuthProvider } from "./context/AuthProvider"
import { ProyectosProvider } from "./context/ProyectosProvider"
import { UsuarioProvider } from "./context/UsuarioProvider"

function App() {


  return (
    <BrowserRouter>
      <AuthProvider>
      <UsuarioProvider>
          <ProyectosProvider>
            <Routes>
              <Route path="/" element={<AuthLayout/>}>
                <Route index element={<Login/>}/>
                <Route path="registrar" element={<Registrar/>}/>
                <Route path="olvide-password" element={<OlvidePassword/>}/>
                <Route path="olvide-password/:token" element={<NuevaPassword/>}/>
                <Route path="confirmar/:id" element={<ConfirmarCuenta/>}/>
              </Route>

              <Route path="/proyectos" element={<RutaProtegida/>}>
                <Route index element={<Proyectos/>} />
                <Route path="asignados" element={<ProyectosAsignados />} />
                <Route path="crear-proyecto" element={<NuevoProyecto/>} />
                <Route path=":id" element={<Proyecto />} />
                <Route path="editar/:id" element={<EditarProyecto />} />
                <Route path="tarea/:id" element={<PreviewTarea/>}/>
                <Route path="crear-tarea/:id" element={<NuevaTarea/>} />
                <Route path="editar-tarea/:id" element={<EditarTarea/>}/>
              </Route>

              <Route path="/clientes" element={<RutaProtegida/>}>
                <Route index element={<Clientes/>} />
                <Route path="crear-cliente" element={<NuevoCliente/>} />
                <Route path=":id" element={<Cliente/>} />
                <Route path="editar/:id" element={<EditarCliente/>} />
              </Route>

              
              <Route path="/usuarios" element={<RutaProtegida/>}>
                <Route index element={<Usuarios/>} />
                <Route path="crear-usuario" element={<NuevoUsuario/>} />
                <Route path=":id" element={<Usuario/>} />
                <Route path="editar/:id" element={<EditarUsuario/>} />

              </Route>

            </Routes>
          </ProyectosProvider>
        </UsuarioProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
