import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom' 
import Home from './components/home/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


import Login from './components/auth/Login'
import NuevaCuenta from './components/auth/NuevaCuenta'
import Proyectos from './components/proyectos/Proyectos'

import ProyectoState from './context/proyectos/ProyectoState'
import TareaState from './context/tareas/TareaState'
import AuthState from './context/autenticacion/AuthState'
import AlertaState from './context/alertas/AlertaState'

import RutaPrivada from './components/rutas/RutaPrivada'


function App() {
  
  // RETORNO
  return ( 
    <ProyectoState>
      <TareaState>
        <AlertaState>
          <AuthState>
              
              <Router>
              <Navbar/>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
                  <RutaPrivada exact path="/proyectos" component={Proyectos} />
                </Switch>
              <Footer/>
              </Router>

            </AuthState>
          </AlertaState>
      </TareaState>
    </ProyectoState>
  );
}

export default App;
