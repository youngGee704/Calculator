// src/App.js
import React, { useState } from 'react';
import './App.css'; // Import your CSS file for styling

function App() {
  const [display, setDisplay] = useState('0');
  const [currentValue, setCurrentValue] = useState('');
  const [operator, setOperator] = useState('');

  const handleClick = (value) => {
    if (value === 'C') {
      // Clear display and reset state
      setDisplay('0');
      setCurrentValue('');
      setOperator('');
    } else if (value === '=') {
      // Evaluate expression and display result
      try {
        const result = eval(currentValue);
        setDisplay(result.toString());
        setCurrentValue(result.toString());
        setOperator('');
      } catch (error) {
        setDisplay('Error');
      }
    } else {
      // Update current value based on button click
      if (currentValue === '0' || operator) {
        setCurrentValue(value);
      } else {
        setCurrentValue(currentValue + value);
      }
      setDisplay(currentValue + value);
      setOperator('');
    }
  };

  return (
    <div className="app">
      <div className="display">{display}</div>
      <div className="buttons">
        <button onClick={() => handleClick('C')}>C</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('/')} >/</button>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={() => handleClick('=')} className="equals">=</button>
      </div>
    </div>
  );
}

export default App;
