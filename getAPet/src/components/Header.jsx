import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../img/LogoGetAPet-02.png'
import logoDark from '../img/LogoDark-02.png'

const Header = () => {
  {/* Header de todas las páginas */}
  const [menuAbierto, setMenuAbierto] = useState(false);



  /* Barra de "Búsqueda", de momento solo se puede hacer la búsqueda por categoría */
  const [busqueda, setBusqueda] = useState('');
  const navigate = useNavigate();

  const handleBuscar = (e) => {
    e.preventDefault();
    const query = busqueda.trim().toLowerCase();
    if (query.includes('perro')) navigate('/catalogo/perros');
    else if (query.includes('gato')) navigate('/catalogo/gatos');
    else if (query.includes('otro')) navigate('/catalogo/otros');
    else alert('No se encontró ninguna categoría válida. Intenta con "perros", "gatos" u "otros".');
    setBusqueda('');
  };

  /* Modo Dark */
  const [darkMode, setDarkMode] = useState(
  document.body.classList.contains('dark-mode')
  );

  const toggleDarkMode = () => {
  const isDark = !darkMode;
  setDarkMode(isDark);
  document.body.classList.toggle('dark-mode', isDark);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img 
          src={darkMode ? logoDark : logo} 
          alt="GetAPet!" 
          className="logo-img" 
        />
      </div>
      <button
          className="menu-toggle"
          onClick={() => setMenuAbierto(!menuAbierto)}
        >
          ☰
        </button>
      <nav className={`nav ${menuAbierto ? 'activo' : ''}`}>
        <Link to="/#about">Inicio</Link>
        <Link to="/#conocelos">Conócelos</Link>
        <Link to="/#requisitos">Requisitos</Link>
        <Link to="/adopta">Adopta</Link>

        <form onSubmit={handleBuscar} className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Buscar especie..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </form>
      </nav>

      <button className="toggle-btn" onClick={toggleDarkMode}>
        {darkMode ? '☀️' : '🌙'}
      </button>
    </header>
  );
};

export default Header;
