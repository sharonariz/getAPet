import { useParams } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import '../styles/Catalogo.css';
import { mascotas } from '../datosMoock/ListaCatalogo.jsx'
import React, { useState } from 'react';
import '../styles/Adopta.css';

/* Esta es la página de "Catálogo", se muestra un catálogo con los animalitos disponibles filtrados por categorías. al momento de dar click en "Me interesa"
    despliega de nuevo el botón de requisitos, que al Aceptar lo dirijirá al formulario de la página de Adopción.  */

const Catalogo = () => {
  const [mostrarModal, setMostrarModal] = useState(false);

  const { categoria } = useParams();
  const lista = mascotas[categoria] || [];

  return (
    <>
      <Header />
      <main className="catalogo">
        <h1>Catálogo: {categoria.charAt(0).toUpperCase() + categoria.slice(1)}</h1>
        <div className="mascotas-grid">
          {lista.map((m, index) => (
            <div className="mascota-card" key={index}>
              <img src={m.img} alt={m.nombre} />
              <div className="btn-container">
      <button onClick={() => setMostrarModal(true)} className="btn-ver">Me Interesa ❤️
        </button>
      </div>
              <h3>{m.nombre}</h3>
              <p>{m.descripcion}</p>
      
      {mostrarModal && (
        <div className="modal">
          <div className="modal-contenido">
            <h3>📝 Requisitos para Adoptar</h3>
            <ul>
              <li>📍 Ser mayor de edad</li>
              <li>🏡 Contar con espacio adecuado</li>
              <li>💰 Tener solvencia económica</li>
              <li>❤️ Compromiso a largo plazo</li>
              <li>📃 Firmar carta de adopción</li>
              <li>📸 Enviarnos fotos semanales</li>
            </ul>
              <button onClick={() => window.location.href = "/adopta"} className="aceptar-btn">Aceptar</button>
              <button onClick={() => setMostrarModal(false)} className="cerrar-btn">Cerrar</button>
          </div>
        </div>)}
            </div>
          ))}
          
        </div>
      
      </main>
      <Footer />
    </>
  );
};

export default Catalogo;
