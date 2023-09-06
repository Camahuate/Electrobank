import React from 'react';
import './MenuLateral.css';

function MenuLateral() {
  return (
    <div className="menu-lateral">
      <ul>
            <li>
                <a href="inicio.html">Inicio</a>
            </li>
            <li>
                <a href="cuentas.html">Cuentas</a>
            </li>
            <li>
                <a href="transferencias.html">Transferencias</a>
            </li>
            <li>
                <a href="pagos.html">Pagos</a>
            </li>
      </ul>
    </div>
  );
}

export default MenuLateral;