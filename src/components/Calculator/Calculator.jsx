import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Calculator.css'; 

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleOperation = (operation) => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (isNaN(number1) || isNaN(number2)) {
      alert('Please enter valid numbers');
      return;
    }

    let res;
    switch (operation) {
      case 'add':
        res = number1 + number2;
        break;
      case 'subtract':
        res = number1 - number2;
        break;
      case 'multiply':
        res = number1 * number2;
        break;
      case 'divide':
        res = number1 / number2;
        break;
      default:
        return;
    }
    setResult(res);
  };

  return (
    <div className="calculator">
      <h1>Calculator</h1>
      <div className="form-group">
        <input
          type="number"
          placeholder="Number 1"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          type="number"
          placeholder="Number 2"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
        <button onClick={() => handleOperation('add')}>Add</button>
        <button onClick={() => handleOperation('subtract')}>Subtract</button>
        <button onClick={() => handleOperation('multiply')}>Multiply</button>
        <button onClick={() => handleOperation('divide')}>Divide</button>
        {result !== null && <h2>Result: {result}</h2>}
      </div>
      <Link to="/"><button>Back to Home</button></Link>
    </div>
  );
}

export default Calculator;
