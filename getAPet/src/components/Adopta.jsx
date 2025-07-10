 // src/components/Conocelos.jsx
import '../styles/Adopta.css';
import CircularGallery from './CircularGallery'
import { Link } from 'react-router-dom';

const Adopta = () => {

  return (
    <section id="adopta" className="adopta">
      <h2>¿Listo para adoptar?</h2>
      <p>Llena nuestro formulario para iniciar el proceso de adopción</p>
      <Link to="/adopta" className="btn-adopta">Ir al formulario</Link>

      <div style={{ height: '600px', position: 'relative' }}>
        <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02}/>
      </div>
    </section>
    
  );
};
 

export default Adopta; 