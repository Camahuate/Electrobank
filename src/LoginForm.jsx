import React from 'react';
import Electrobank from './Header/imgs/ELECTOBANK-logo.png'

function LoginForm() {
  const mostrarMensajeYRedirigir = (event) => {
    event.preventDefault();
    alert("Acceso concedido");
    // Lógica para mostrar mensaje y redirigir aquí
  };  
  return (
    <div className="body-login">
      <div className="login-container">
        <img className="logo" src={Electrobank} alt="logobank" />
        <form onSubmit={mostrarMensajeYRedirigir} className="form-login">
          <label htmlFor="usuario">Usuario:</label>
          <input type="text" id="usuario" placeholder="Usuario" required />
          <br />
          <label htmlFor="contrasena">Contraseña:</label>
          <input type="password" id="contrasena" placeholder="Contraseña" required />
          <br />
          <button type="submit" className="btn-violeta" >Iniciar Sesión</button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
