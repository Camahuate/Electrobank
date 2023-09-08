import React from 'react';
import Header from './/Header/Header';
import MenuLateral from './MenuLateral/MenuLateral';
import Card from './Card';
import { BrowserRouter } from 'react-router-dom/dist/umd/react-router-dom.development';

function Cuentas() {
  return (
    <BrowserRouter>
    <main>
      <Header />
      <MenuLateral />
      <div className="row">
        <Card
          imgSrc="img/tarjeta1.png"
          title="Caja de ahorro"
          saldo="$350.000"
          movimientos={[
            "Compra en supermercadp: -$50.000",
            "Depósito en efectivo: +$10.000",
            "Retiro en cajero: -$2.000",
          ]}
        />
        <Card
          imgSrc="img/tarjeta2.png"
          title="Cuenta Corriente"
          saldo="$150.700"
          movimientos={[
            "Transferencia entrante: +$3.000",
            "Pago de factura: -$15.000",
            "Compra online: -$50.000",
          ]}
        />
      </div>
      <div className="row"></div>
      <div className="column">
        <div className="card">
          <img src="img/grafico_cuentas.png" className="grafico" alt="grafico cuentas bancarias" />
          <img src="img/grafico_cuentas2.png" className="grafico" alt="grafico cuentas bancarias" />
        </div>
      </div>
    </main>
    </BrowserRouter>
  );
}

export default Cuentas;
