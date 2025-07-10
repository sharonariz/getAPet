 // src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import '../styles/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuAbierto, setMenuAbierto] = useState(false);

  useEffect(() => {
    // Aplica la clase dark-mode al body si darkMode es true
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  
  return (
    <header className="header">
      <div className="logo">🐾 Get a Pet!</div>

      {/* Botón hamburguesa */}
      <button className="menu-toggle" onClick={toggleMenu}>
        {menuAbierto ? '✖' : '☰'}
      </button>

      {/* Menú de navegación */}
      <nav className={`nav ${menuAbierto ? 'activo' : ''}`}>
        <Link to="/#about">Inicio</Link>
        <Link to="/#conocelos">Conócelos</Link>
        <a href="#requisitos">Requisitos</a>
        <a href="#adopta">Adopta</a>

        {/* Barra de búsqueda */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Buscar..."
            className="search-input"
          />
        </div>
      </nav>
      <button className="toggle-btn" onClick={toggleDarkMode}>{darkMode ? '☀️' : '🌙'}</button>
    </header>
  );
};

export default Header; 