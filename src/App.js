import React, { useState } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Electrobank from './Header/imgs/ELECTOBANK-logo.png';
import Header from './Header/Header';
import MenuLateral from './MenuLateral/MenuLateral';
import Promociones from './Body/Promociones';
import Informacion from './Body/Informacion';
import ConversorMoneda from './Body/ConversorMoneda';
import Footer from './Footer/Footer';
import Prestamos from './Body/Prestamos';



function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // En este ejemplo, simplemente comprobamos si el correo electrónico y la contraseña son correctos.
    if (email === 'usuario@example.com' && password === 'contraseña') {
      setLoggedIn(true);
    } else {
      alert('Credenciales incorrectas');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setEmail('');
    setPassword('');
  };

  return (
    <Router>
      <div>
        <main className="main">
          <Header />
          <MenuLateral />
          {loggedIn ? (
            <>
              {/* Contenido de la aplicación cuando el usuario está autenticado */}
              
              <Promociones />
              <Informacion />
              <ConversorMoneda />
              <Prestamos />
              <button className='btn-violeta' onClick={handleLogout}>Cerrar sesión</button>
            </>
          ) : (
            <>
              {/* Formulario de inicio de sesión */}
              <div className='body-login'>
                <div className='login-container'>
                  <div className='form-login'>
                  <img className="logo" src={Electrobank} alt="logobank" />
                  <h2>Iniciar sesión</h2>
                  <input
                    type="email"
                    placeholder="Correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <br/>
                  <button className='btn-violeta' onClick={handleLogin}>Iniciar sesión</button>
                  </div>
                </div>
              </div>
            </>
          )}
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;