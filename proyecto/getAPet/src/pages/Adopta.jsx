import React, { useState } from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import '../styles/Formulario.css';

/* Esta es la página "Adopta" que dirije a un formulario.
    Se agregan validaciones de campos y posteriormente se guardará
    el registro en una base de datos, adicional, se mandarà un email de confirmación.   */

const Adopta = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    telefono: '',
    direccion: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí se enviarán los datos al backend o servicio de email
    alert('Formulario enviado. Te hemos enviado un correo de confirmación.');

    // Limpia el formulario
    setFormData({
      nombre: '',
      apellidos: '',
      email: '',
      telefono: '',
      direccion: '',
      mensaje: ''
    });
  };

  return (
    <>
      <Header />
        <main style={{ padding: '100px 1rem 2rem' }}>
          <h2>Formulario de Adopción 🐾</h2>
          <form onSubmit={handleSubmit} className="formulario">
            <input name="nombre" placeholder="Nombre(s)" value={formData.nombre} onChange={handleChange} required />
            <input name="apellidos" placeholder="Apellidos" value={formData.apellidos} onChange={handleChange} required />
            <input name="email" type="email" placeholder="Correo electrónico" value={formData.email} onChange={handleChange} required />
            <input name="telefono" type="tel" placeholder="Teléfono" value={formData.telefono} onChange={handleChange} required />
            <textarea name="direccion" placeholder="Dirección completa" value={formData.direccion} onChange={handleChange} required />
            <textarea name="mensaje" placeholder="¿Por qué quieres adoptar?" value={formData.mensaje} onChange={handleChange} />

            <button type="submit">Enviar solicitud</button>
          </form>
        </main>
    <Footer />
    </>
  );
};

export default Adopta;
