import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import '../styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes conectar con EmailJS o un backend
    setFormStatus('Mensaje enviado con éxito');
    setFormData({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setFormStatus(''), 3000);
  };

  return (
    <>
      <Helmet>
        <title>Pasión por la Náutica - Contacto y Consultas Náuticas</title>
        <meta
          name="description"
          content="Contáctanos en Pasión por la Náutica para consultas sobre embarcaciones, servicios y más. Estamos en San Fernando, Buenos Aires. ¡Llámanos o envía un mensaje!"
        />
        <meta
          name="keywords"
          content="contacto náutica, consultas náuticas, San Fernando, embarcaciones, Pasión por la Náutica"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Pasión por la Náutica" />
        <meta property="og:title" content="Pasión por la Náutica - Contacto y Consultas Náuticas" />
        <meta
          property="og:description"
          content="Contáctanos en Pasión por la Náutica para consultas sobre embarcaciones, servicios y más. Estamos en San Fernando, Buenos Aires. ¡Llámanos o envía un mensaje!"
        />
        <meta
          property="og:image"
          content="https://www.pasionporlanautica.com/assets/img/pasion-por-la-nautica.png"
        />
        <meta property="og:url" content="https://www.pasionporlanautica.com/contacto.html" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_AR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pasión por la Náutica - Contacto y Consultas Náuticas" />
        <meta
          name="twitter:description"
          content="Contáctanos en Pasión por la Náutica para consultas sobre embarcaciones, servicios y más. Estamos en San Fernando, Buenos Aires. ¡Llámanos o envía un mensaje!"
        />
        <meta
          name="twitter:image"
          content="https://www.pasionporlanautica.com/assets/img/pasion-por-la-nautica.png"
        />
        <link rel="canonical" href="https://www.pasionporlanautica.com/contacto.html" />
        <link rel="icon" type="image/png" href="/assets/img/pasionporlanauticafavicon.png" />
        <link rel="apple-touch-icon" href="/assets/img/pasionporlanauticafavicon.png" />
      </Helmet>

      <Header />

      <main>
        <section className="hero-section py-5 text-center" style={{ backgroundColor: '#01497C', color: '#fff' }}>
          <div className="container">
            <h1 className="display-4 font-weight-bold">Contáctame</h1>
            <p className="lead">Estoy aquí para ayudarte con cualquier consulta náutica.</p>
          </div>
        </section>

        <section className="contact-section py-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
                <h2 className="mb-4">Información de Contacto</h2>
                <ul className="list-unstyled contact-info">
                  <li className="mb-3">
                    <i className="fas fa-phone-alt me-2"></i>
                    <strong>Teléfono:</strong>{' '}
                    <a href="tel:+5491150297778" className="contact-link">
                      +54 9 11 5029-7778
                    </a>
                  </li>
                  <li className="mb-3">
                    <i className="fab fa-whatsapp me-2"></i>
                    <strong>WhatsApp:</strong>{' '}
                    <a
                      href="https://api.whatsapp.com/send/?phone=5491144702726&text=Hola+Luis%2C+te+queria+consultar+por+la+embarcaci%C3%B3n%21&type=phone_number&app_absent=0"
                      className="contact-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      +54 9 11 4470-2726
                    </a>
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-envelope me-2"></i>
                    <strong>Email:</strong>{' '}
                    <a href="mailto:luisantonio.nautica1@gmail.com" className="contact-link">
                      luisantonio.nautica1@gmail.com
                    </a>
                  </li>
                  <li className="mb-3">
                    <i className="fab fa-instagram me-2"></i>
                    <strong>Instagram:</strong>{' '}
                    <a
                      href="https://www.instagram.com/pasionporlanautica/"
                      className="contact-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @pasionporlanautica
                    </a>
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-map-marker-alt me-2"></i>
                    <strong>Ubicación:</strong> San Fernando, Buenos Aires
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 col-md-12">
                <h2 className="mb-4">Envíame un Mensaje</h2>
                {formStatus && (
                  <div className="alert alert-success" role="alert">
                    {formStatus}
                  </div>
                )}
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Nombre
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Tu nombre"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="tuemail@ejemplo.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      name="phone"
                      placeholder="+54 9 11 1234-5678"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                      Mensaje (opcional)
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="5"
                      placeholder="Escribe tu mensaje aquí..."
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Contacto;