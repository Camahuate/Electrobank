import './Promociones.css';
import React, { useState } from 'react';

function ConversorMoneda() {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('USD');
  const [result, setResult] = useState('');

  const convertCurrency = () => {
    const amountValue = parseFloat(amount);
    if (isNaN(amountValue)) {
      setResult('Ingrese una cantidad válida.');
      return;
    }

    const conversionRates = {
      USD: {
        EUR: 0.93,
        ARS: 349.98,
      },
      EUR: {
        USD: 1.08,
        ARS: 378.02,
      },
      ARS: {
        USD: 0.0029,
        EUR: 0.0026,
      },
    };

    if (fromCurrency === toCurrency) {
      setResult('Las monedas son iguales. No es necesario convertir.');
      return;
    }

    if (!conversionRates[fromCurrency] || !conversionRates[fromCurrency][toCurrency]) {
      setResult('No se encontraron tasas de conversión para estas monedas.');
      return;
    }

    const convertedAmount = (amountValue * conversionRates[fromCurrency][toCurrency]).toFixed(2);
    setResult(`Resultado: ${amountValue} ${fromCurrency} = ${convertedAmount} ${toCurrency}`);
  };

  return (
    <div className="cardIzquierda">
      <h2 className="tituloVioleta">Conversor de moneda</h2>
      <div className="input-container">
        <label htmlFor="amount">Cantidad:</label>
        <input
          type="number"
          id="amount"
          placeholder="Ingrese la cantidad"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <br />
      <br />
      <div className="input-container">
        <label htmlFor="fromCurrency">De:</label>
        <select
          id="fromCurrency"
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          <option value="USD">Dólares (USD)</option>
          <option value="EUR">Euros (EUR)</option>
          <option value="ARS">Pesos argentinos (ARS)</option>
        </select>
      </div>
      <br />
      <br />
      <div className="input-container">
        <label htmlFor="toCurrency">A:</label>
        <select
          id="toCurrency"
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          <option value="USD">Dólares (USD)</option>
          <option value="EUR">Euros (EUR)</option>
          <option value="ARS">Pesos argentinos (ARS)</option>
        </select>
      </div>
      <br />
      <br />
      <button className="btn-violeta" onClick={convertCurrency}>
        Convertir
      </button>
      <p>
        {result && (
          <span id="result">{result}</span>
        )}
      </p>
    </div>
  );
}

export default ConversorMoneda;
