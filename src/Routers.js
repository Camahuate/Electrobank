import React from 'react';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import App from './App';
import PaginaPrincipal from './PaginaPrincipal'; // Reemplaza 'PaginaPrincipal' con el nombre real de tu componente principal
import Cuentas from './Cuentas';

function Routes() {
  return (
    <Router>
      <Routes>
        <Route path="/login" component={App} />
        <Route path="/" component={PaginaPrincipal} />
        <Route path="/cuentas" component={Cuentas}/>
      </Routes>
    </Router>
  );
}

export default Routes;
