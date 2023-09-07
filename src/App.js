import React from 'react';
import './App.css';
import LoginForm from './LoginForm';
import Header from './Header/Header';
import MenuLateral from './MenuLateral/MenuLateral';
import Promociones from './Body/Promociones';
import Informacion from './Body/Informacion';
import ConversorMoneda from './Body/ConversorMoneda';
import Footer from './Footer/Footer'; 

function App() {
  return (
    <div>
      <Header />
      <MenuLateral />
      <main className="main">
        <Promociones />
        <Informacion />
        <ConversorMoneda />
      </main>
      <Footer />
    </div>
  );
  
}

export default App;
/*return (
    <div>
      <header>
        <link rel="stylesheet" href="index.css" />
      </header>
      <LoginForm />
    </div>
  );*/