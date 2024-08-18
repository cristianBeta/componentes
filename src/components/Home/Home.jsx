
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

function Home() {
  return (
    <div className="home-container">
      <h1>Selecciona una opción mi querido amigo</h1>
      <div className="home-options">
        <Link to="/greeting" className="home-link">Saludo</Link>
        <Link to="/calculator" className="home-link">Calculadora</Link>
        <Link to="/random-background" className="home-link">Fondo Aleatorio</Link>
        <Link to="/user-registration" className="home-link">Registro de Usuario</Link>
        <Link to="/task-list" className="home-link">Lista de Tareas</Link>
      </div>
    </div>
  );
}

export default Home;
