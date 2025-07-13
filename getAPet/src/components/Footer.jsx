import '../styles/Footer.css'; // Puedes mover el CSS abajo a tu archivo de estilos
import logo from '../img/LogoGetAPet-02.png'

const Footer = () => {
  {/* Sección Footer de todas las páginas.  */}
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contacto">
          <h3>Contacto</h3>
          <p>📞 Tel: (55) 1234-5678</p>
          <p>📧 Email: contacto@adoptamascota.org</p>
        </div>

        <div className="redes">
          <h3>Síguenos</h3>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">🐾 Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">📸 Instagram</a>
          <a href="https://tiktok.com" target="_blank" rel="noreferrer">🎥 TikTok</a>
        </div>
         <div className="logo-container">
            <img src={logo} alt="GetAPet!" className="logo-img" />
          </div>
      </div>
      <p className="copyright">© 2025 GetAPet</p>
    </footer>
  );
};

export default Footer;
