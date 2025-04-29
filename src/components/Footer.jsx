import footerLogo from '../assets/img/pasion-por-la-nautica-1.png';

const Footer = () => {
  return (
    <footer>
      <div className="footer-top pt-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-4 col-sm-6 mb-4 text-center">
              <a href="/">
                <img
                  src={footerLogo}
                  alt="Pasión por la Náutica Logo"
                  className="footer-logo mb-3"
                  style={{ maxWidth: '150px' }}
                />
              </a>
              <p className="footer-subtitle">Asesoramiento náutico personalizado.</p>
              <div className="social-icons">
                <a
                  href="https://www.instagram.com/pasionporlanautica/"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://www.youtube.com/@PasionporlaNautica"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-youtube"></i>
                </a>
                <a
                  href="https://api.whatsapp.com/send/?phone=5491144702726&text&type=phone_number&app_absent=0"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 mb-4 text-center">
              <h4 className="footer-heading">Navega</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/" className="footer-link">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="/productos" className="footer-link">
                    Productos
                  </a>
                </li>
                <li>
                  <a href="/contacto" className="footer-link">
                    Contacto
                  </a>
                </li>
                <li>
                  <a href="/quien-soy" className="footer-link">
                    Quién soy
                  </a>
                </li>
                <li>
                  <a href="/nuestros-trabajos" className="footer-link">
                    Nuestros trabajos
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 mb-4 text-center">
              <h4 className="footer-heading">Contáctanos</h4>
              <ul className="list-unstyled">
                <li>
                  <i className="fas fa-phone-alt me-2"></i> +54 9 11 5029-7778
                </li>
                <li>
                  <i className="fas fa-envelope me-2"></i> luisantonio.nautica1@gmail.com
                </li>
                <li>
                  <i className="fas fa-map-marker-alt me-2"></i> San Fernando, Buenos Aires
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom py-3">
        <div className="container text-center">
          <p className="mb-0 footer-bottom-text">
            <a
              href="https://cloverdigital.vercel.app/"
              className="footer-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Diseño y desarrollo por Clover Digital
            </a>{' '}
            | © Copyright 2025 Pasión por la Náutica. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;