
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './RandomBackground.css'; 

function RandomBackground() {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff'); 

  const generateRandomColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setBackgroundColor(randomColor);
  };

  return (
    <div className="random-background" style={{ backgroundColor }}>
      <h1>Random Background Color</h1>
      <button onClick={generateRandomColor}>Change Background Color</button>
      <Link to="/"><button>Back to Home</button></Link>
    </div>
  );
}

export default RandomBackground;
