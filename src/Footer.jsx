import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="pie-depagina">
      <div className="footer-links">
        <a href="#">Política de Privacidad</a>
        <a href="#">Términos y Condiciones</a>
        <a href="#">Contacto</a>
      </div>
      <div className="social-icons">
        <a href="https://www.facebook.com/" target="_blank">
          <img src="/facebook.svg" alt="Facebook" />
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <img src="/instagram.svg" alt="Instagram" />
        </a>
        <a href="https://www.linkedin.com/" target="_blank">
          <img src="Electrobank\src\imgs\ELECTOBANK-logo.png" alt="LinkedIn" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;