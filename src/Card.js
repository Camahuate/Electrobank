import React from 'react';

function Card() {
  return (
    <div className="column">
      <div className="card">
        <img src={imgSrc} className="tarjeta" alt="Tarjeta bancaria" />
        <h3>{title}</h3>
        <p>Saldo: {saldo}</p>
        <ul>
          {movimientos.map((movimiento, index) => (
            <li key={index}>{movimiento}</li>
          ))}
          <li><a href="#">Ver más movimientos</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Card;