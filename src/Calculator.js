import React, { useState } from 'react';
import { evaluate } from 'mathjs'; 
import './Calculator.css';

function Calculator() {
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);

  const handleClick = (value) => {
    setError(false);
    setInput(input + value);
  };

  const clearInput = () => {
    setInput('');
    setError(false);
  };

  const calculateResult = () => {
    try {
      if (input.trim() === '') {
        setInput('Error');
        return;
      }

      
      const result = evaluate(input);

      if (result === Infinity) {
        setInput('Infinity');
      } else if (isNaN(result)) {
        setInput('NaN');
      } else {
        setInput(result.toString());
      }
    } catch {
      setInput('Error');
    }
  };

  return (
    <div className="calculator-container">
      <h1>React Calculator</h1>
      <input type="text" value={input} readOnly className="inputField" />
      <div className="calculator-buttons">
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('+')}>+</button>

        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')}>-</button>

        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('*')}>*</button>

        <button onClick={clearInput}>C</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={calculateResult}>=</button>
        <button onClick={() => handleClick('/')}>/</button>
      </div>
    </div>
  );
}

export default Calculator;
