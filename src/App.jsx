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

import { AuthProvider } from "./context/AuthProvider"
import { ProyectosProvider } from "./context/ProyectosProvider"

function App() {


  return (
    <BrowserRouter>
      <AuthProvider>
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
              <Route path="crear-proyecto" element={<NuevoProyecto/>} />
              <Route path="asignados" element={<ProyectosAsignados />} />
            </Route>

            <Route path="/clientes" element={<RutaProtegida/>}>
              <Route index element={<Clientes/>} />
            </Route>

            
            <Route path="/usuarios" element={<RutaProtegida/>}>
              <Route index element={<Usuarios/>} />
            </Route>

          </Routes>
        </ProyectosProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
