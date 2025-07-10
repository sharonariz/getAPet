import React, { useState } from 'react';
import '../styles/Requisitos.css'; // Puedes mover el CSS abajo a tu archivo de estilos

const Requisitos = () => {
  const [mostrarModal, setMostrarModal] = useState(false);

  return (
    <section id="requisitos" className="requisitos">
      <section className="frase">
        <blockquote>
          “No se puede comprar el amor, pero sí se puede adoptar.” 🐾
        </blockquote>
      </section>
      <h2>Requisitos para adoptar</h2>
      <div className="btn-container">
        <button onClick={() => setMostrarModal(true)} className="btn-ver">
          Ver requisitos
        </button>
      </div>
      {mostrarModal && (
        <div className="modal">
          <div className="modal-contenido">
            <h3>📝 Requisitos</h3>
            <ul>
              <li>📍 Ser mayor de edad</li>
              <li>🏡 Contar con espacio adecuado</li>
              <li>💰 Tener solvencia económica</li>
              <li>❤️ Compromiso a largo plazo</li>
              <li>📃 Firmar carta de adopción</li>
              <li>📸 Enviarnos fotos semanales</li>
            </ul>
            <button className="cerrar" onClick={() => setMostrarModal(false)}>Cerrar</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Requisitos;
