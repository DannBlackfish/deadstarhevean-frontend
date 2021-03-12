import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom' 
import Home from './components/home/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Store from './components/store/Store'
import CategoryProduct from './components/store/CategoryProduct'
import StoreProduct from './components/store/StoreProduct'

import Cart from './components/cart/Cart'

import Login from './components/auth/Login'
import NuevaCuenta from './components/auth/NuevaCuenta'
import Proyectos from './components/proyectos/Proyectos'

import ProyectoState from './context/proyectos/ProyectoState'
import TareaState from './context/tareas/TareaState'
import AuthState from './context/autenticacion/AuthState'
import AlertaState from './context/alertas/AlertaState'

import RutaPrivada from './components/rutas/RutaPrivada'
import AboutUs from './components/home/AboutUs'



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
                  <Route exact path="/aboutus" component={AboutUs} />
                  <Route exact path="/cart" component={Cart} />
                  <Route exact path="/store" component={Store} />
                  <Route exact path="/category/:category" component={CategoryProduct} />
                  <Route exact path="/product/:id" component={StoreProduct} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/signup" component={NuevaCuenta} />
                  <RutaPrivada exact path="/profile" component={Proyectos} />
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