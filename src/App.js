import React from 'react';
import './App.css';
import LoginForm from './LoginForm';
import Header from './Header';
import MenuLateral from './MenuLateral';
import Promociones from './Promociones';
import Informacion from './Informacion';
import ConversorMoneda from './ConversorMoneda';
import Footer from './Footer'; 
import Prestamos from './Prestamos';

function App() {
  return (
    <div>
      <Header />
      <MenuLateral />
      <main className="main">
        <Promociones />
        <Informacion />
        <ConversorMoneda />
        <Prestamos />
      </main>
      <Footer />
    </div>
  );
  /*return (
    <div>
      <header>
        <link rel="stylesheet" href="index.css" />
      </header>
      <LoginForm />
    </div>
  );*/
}

export default App;
