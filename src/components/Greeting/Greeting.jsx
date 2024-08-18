
import React, { useState } from 'react';
import './Greeting.css'; 


function Greeting() {
  const [name, setName] = useState('');
  const [welcomeMessage, setWelcomeMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setWelcomeMessage(`Welcome, ${name}!`);
  };

  return (
    <div className="greeting-container">
      <h2>Greeting</h2>
      <form onSubmit={handleSubmit} className="greeting-form">
        <label htmlFor="name">Enter your name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
      {welcomeMessage && <p className="welcome-message">{welcomeMessage}</p>}
    </div>
  );
}

export default Greeting;
