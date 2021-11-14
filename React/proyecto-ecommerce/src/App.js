import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Header from "./Componentes/Header"
import ListaProductos from "./Componentes/Productos"
import Inicio from "./Componentes/Inicio"
import Contacto from "./Componentes/Contacto";
import { DataProvider } from "./Context/Dataprovider"
import Carrito from "./Componentes/Carrito/Carrito"
import Footer from "./Componentes/Footer"
import Login from "./Componentes/Login"


function App() {

  const [conectado, setConectado] = useState(false)

  const acceder = (estado) => {
    setConectado(estado)
  }

  return (
    conectado ? <DataProvider>
      <Router>
        <div className="App">
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/">
                <Redirect to="/Inicio" />
              </Route>
              <Route path="/Productos">
                <ListaProductos />
              </Route>
              <Route path="/Inicio">
                <Inicio />
              </Route>
              <Route path="/Contacto">
                <Contacto />
              </Route>
              <Route path="/Carrito">
              <ListaProductos />
                <Carrito />
              </Route>
              <Route path="/Login">
                <Login />
              </Route>
              <Route path="/*">
                <Redirect to="/Inicio" />
              </Route>
            </Switch>
          </div>
          < Footer />
        </div>

      </Router>

    </DataProvider> : <Login acceder={acceder} />

  );
}


export default App;