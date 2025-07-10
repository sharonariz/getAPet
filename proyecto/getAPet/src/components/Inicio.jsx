 // src/components/Conocelos.jsx
import React, { useState, useEffect } from 'react';
import '../styles/Nosotros.css';
import { animales } from '../datosMoock/ListaCarrusel';

const Inicio = () => {
  /*Función para el funcionamiento y automatización del carrusel 1ra sección.*/
  const [indiceActual, setIndiceActual] = useState(0);

  const siguiente = () => {
    setIndiceActual((prevIndex) => (prevIndex + 1) % animales.length);
  };

  const anterior = () => {
    setIndiceActual((prevIndex) => (prevIndex - 1 + animales.length) % animales.length);
  };

  useEffect(() => {
    const intervalo = setInterval(() => {
      siguiente();
    }, 3000); // cambia cada 3 segundos

    return () => clearInterval(intervalo);
  }, []);

  const animal = animales[indiceActual];

  return (
    
    <section class="about">
    <div class="container about-content">
        <div className="carrusel-slide">
          <img src={animal.imagen} alt={animal.nombre} className="carrusel-imagen" />
          <div className="carrusel-descripcion">
            <h3>{animal.nombre}</h3>
            <p>{animal.descripcion}</p>
        </div>

        <button className="btn anterior" onClick={anterior}>‹</button>
        <button className="btn siguiente" onClick={siguiente}>›</button>
      </div>
      <div class="text" id="quien-soy">
        <h2>Quiénes Somos</h2>
        <p>Somos una asociación comprometida con rescatar y encontrar hogares amorosos para mascotas necesitadas. ¡Encuentra a tu nuevo mejor amigo aquí y cambiále la vida!</p>
      </div>
    </div>
  </section>

  );
};
 

export default Inicio; 