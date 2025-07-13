import React, { useState, useEffect } from 'react';
import '../styles/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  {/* Sección Header de todas las páginas.  */}

  {/* Función para Light y Dark mode.  */}
  const [darkMode, setDarkMode] = useState(false);
  const [menuAbierto, setMenuAbierto] = useState(false);

  useEffect(() => {
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
      <div className="logo">🐾 Get A Pet!</div>

      {/* Botón hamburguesa para móviles.   */}
      <button className="menu-toggle" onClick={toggleMenu}>
        {menuAbierto ? '✖' : '☰'}
      </button>

      {/* Menú de navegación */}
      <nav className={`nav ${menuAbierto ? 'activo' : ''}`}>
        <Link to="/#about">Inicio</Link>
        <Link to="/#conocelos">Conócelos</Link>
        <Link to="/#requisitos">Requisitos</Link>
        <Link to="/adopta">Adopta</Link>

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