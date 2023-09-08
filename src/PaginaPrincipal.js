import React from 'react';
import Promociones from './Body/Promociones';
import Informacion from './Body/Informacion';
import ConversorMoneda from './Body/ConversorMoneda';
import Footer from './Footer/Footer';
import Prestamos from './Body/Prestamos';

function PaginaPrincipal() {
  return (
    <div>
      {/* Contenido de la página principal */}
      <Promociones />
      <Informacion />
      <ConversorMoneda />
      <Prestamos />
      <Footer />
    </div>
  );
}

export default PaginaPrincipal;
