import './App.css';
import React from 'react';
import Marcas from './services/prueba';
import Login from './components/pages/login'
import CargaArchivos from './components/pages/carga-archivos/cargaArchivos';
import Inicio from './components/pages/inicio/inicio';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/inicio" component={Inicio} />
          <Route exact path="/prueba" component={Marcas} />
          <Route exact path="/cargaArchivos" component={CargaArchivos} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
