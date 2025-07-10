 // src/components/Conocelos.jsx
import { Link } from 'react-router-dom';
import '../styles/Conocelos.css';
import { animales } from '../datosMoock/ListaCarrusel.jsx';
import '../pages/Catalogo.jsx'

console.log(animales);

const Conocelos = () => {

  return (
    <section id="conocelos" className="conocelos">
      <h2>Conócelos</h2>
      <div className="categoria-grid">
        <div className="categoria-card">
          <Link to="/catalogo/perros">
            <img src="https://cdn0.expertoanimal.com/es/posts/5/6/2/10_caracteristicas_de_los_perros_24265_600_square.jpg" alt="Perros" />
            <p>🐶 Perros</p>
          </Link>
        </div>
        <div className="categoria-card">
          <Link to="/catalogo/gatos">
            <img src="https://imagenes.elpais.com/resizer/v2/NZJCPWHXINAOZNBVOWNVKJO5ZU.jpg?auth=c762895721540964c8025922fdeae9c74bfae633361228ec5aa2158e4de7865e&width=1200" alt="Gatos" />
            <p>🐱 Gatos</p>
          </Link>
        </div>
        <div className="categoria-card">
          <Link to="/catalogo/otros">
            <img src="https://www.animalshealth.es/fileuploads/news/rvc-conejos-salud-problemas-mesa-de-trabajo-217205089601.png" alt="Otros" />
            <p>🐰 Otros</p>
          </Link>
        </div>
      </div>
    </section>

  );
};
 

export default Conocelos; 