import { Helmet } from 'react-helmet-async';
import { Container, Carousel, Row, Col } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import '../styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// Importaciones de imágenes por sección
// Pintura
import Pintura1 from '../assets/img/pintura-1.png';
import Pintura2 from '../assets/img/pintura-2.png';
import Pintura3 from '../assets/img/pintura-3.png';

// Mecánica
import Mecanica1 from '../assets/img/mecanica-1.png';
import Mecanica2 from '../assets/img/mecanica-1.png';
import Mecanica3 from '../assets/img/mecanica-3.png';

// Lonería y Tapicería
import LoneriaTapiceria1 from '../assets/img/loneria-tapiceria-1.png';
import LoneriaTapiceria2 from '../assets/img/loneria-tapiceria-2.png';
import LoneriaTapiceria3 from '../assets/img/loneria-tapiceria-3.png';

// Electricidad y Electrónica
import Electricidad1 from '../assets/img/electronica-electricidad-1.png';
import Electricidad2 from '../assets/img/electronica-electricidad-2.png';
import Electricidad3 from '../assets/img/electronica-electricidad-3.png';

// Service y Reparaciones
import Service1 from '../assets/img/service-reparaciones-1.png';
import Service2 from '../assets/img/service-reparaciones-2.png';

const NuestrosTrabajos = () => {
  return (
    <>
      {/* Metadatos con react-helmet-async */}
      <Helmet>
        <title>Pasión por la Náutica - Nuestros Trabajos y Servicios</title>
        <meta
          name="description"
          content="Descubre los servicios de Pasión por la Náutica: pintura, mecánica, lonería, tapicería, electricidad y reparaciones para embarcaciones en San Fernando."
        />
        <meta
          name="keywords"
          content="servicios náuticos, pintura náutica, mecánica náutica, lonería, tapicería, electricidad náutica, reparaciones, San Fernando"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Pasión por la Náutica" />
        {/* Open Graph */}
        <meta property="og:title" content="Pasión por la Náutica - Nuestros Trabajos y Servicios" />
        <meta
          property="og:description"
          content="Descubre los servicios de Pasión por la Náutica: pintura, mecánica, lonería, tapicería, electricidad y reparaciones para embarcaciones en San Fernando."
        />
        <meta property="og:image" content="https://www.pasionporlanautica.com/assets/img/pasion-por-la-nautica.png" />
        <meta property="og:url" content="https://www.pasionporlanautica.com/nuestros-trabajos" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_AR" />
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pasión por la Náutica - Nuestros Trabajos y Servicios" />
        <meta
          name="twitter:description"
          content="Descubre los servicios de Pasión por la Náutica: pintura, mecánica, lonería, tapicería, electricidad y reparaciones para embarcaciones en San Fernando."
        />
        <meta name="twitter:image" content="https://www.pasionporlanautica.com/assets/img/pasion-por-la-nautica.png" />
        {/* Canonical */}
        <link rel="canonical" href="https://www.pasionporlanautica.com/nuestros-trabajos" />
        {/* Favicon */}
        <link rel="icon" type="image/png" href="/assets/img/pasionporlanauticafavicon.png" />
        <link rel="apple-touch-icon" href="/assets/img/pasionporlanauticafavicon.png" />
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <Header />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="hero-section py-5 text-center" style={{ backgroundColor: '#01497C', color: '#fff' }}>
          <Container>
            <h1 className="display-4 font-weight-bold">Nuestros Trabajos</h1>
            <p className="lead">Descubre los servicios que ofrecemos con pasión y profesionalismo.</p>
          </Container>
        </section>

        {/* Works Section */}
        <section className="works-section py-5">
          <Container>
            {/* Pintura */}
            <Row className="align-items-center mb-5 work-item">
              <Col lg={6} md={12} className="mb-4 mb-lg-0">
                <Carousel id="pinturaCarousel" controls={true}>
                  <Carousel.Item>
                    <img src={Pintura1} className="d-block w-100 work-img" alt="Pintura náutica profesional 1" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={Pintura2} className="d-block w-100 work-img" alt="Pintura náutica profesional 2" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={Pintura3} className="d-block w-100 work-img" alt="Pintura náutica profesional 3" />
                  </Carousel.Item>
                </Carousel>
              </Col>
              <Col lg={6} md={12}>
                <h2 className="work-title mb-3">Pintura</h2>
                <p className="work-text">
                  Ofrecemos servicios de pintura de alta calidad para embarcaciones, utilizando productos especializados que garantizan un acabado duradero y resistente a las condiciones marinas. Desde retoques hasta repintados completos, cuidamos cada detalle para que tu barco luzca impecable.
                </p>
              </Col>
            </Row>

            {/* Mecánica */}
            <Row className="align-items-center mb-5 work-item flex-lg-row-reverse">
              <Col lg={6} md={12} className="mb-4 mb-lg-0">
                <Carousel id="mecanicaCarousel" controls={true}>
                  <Carousel.Item>
                    <img src={Mecanica1} className="d-block w-100 work-img" alt="Mecánica náutica 1" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={Mecanica2} className="d-block w-100 work-img" alt="Mecánica náutica 2" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={Mecanica3} className="d-block w-100 work-img" alt="Mecánica náutica 3" />
                  </Carousel.Item>
                </Carousel>
              </Col>
              <Col lg={6} md={12}>
                <h2 className="work-title mb-3">Mecánica</h2>
                <p className="work-text">
                  Nuestro equipo de mecánicos expertos se encarga del mantenimiento y reparación de motores, asegurando que tu embarcación esté siempre en óptimas condiciones para navegar. Diagnósticos precisos y soluciones eficientes para todo tipo de motores náuticos.
                </p>
              </Col>
            </Row>

            {/* Lonería y Tapicería */}
            <Row className="align-items-center mb-5 work-item">
              <Col lg={6} md={12} className="mb-4 mb-lg-0">
                <Carousel id="loneriaCarousel" controls={true}>
                  <Carousel.Item>
                    <img src={LoneriaTapiceria1} className="d-block w-100 work-img" alt="Lonería y tapicería náutica 1" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={LoneriaTapiceria2} className="d-block w-100 work-img" alt="Lonería y tapicería náutica 2" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={LoneriaTapiceria3} className="d-block w-100 work-img" alt="Lonería y tapicería náutica 3" />
                  </Carousel.Item>
                </Carousel>
              </Col>
              <Col lg={6} md={12}>
                <h2 className="work-title mb-3">Lonería y Tapicería</h2>
                <p className="work-text">
                  Renovamos y personalizamos la lonería y tapicería de tu embarcación con materiales de alta calidad, resistentes al agua y al sol. Desde cubiertas hasta cojines, diseñamos soluciones a medida que combinan funcionalidad y estilo.
                </p>
              </Col>
            </Row>

            {/* Electricidad y Electrónica */}
            <Row className="align-items-center mb-5 work-item flex-lg-row-reverse">
              <Col lg={6} md={12} className="mb-4 mb-lg-0">
                <Carousel id="electricidadCarousel" controls={true}>
                  <Carousel.Item>
                    <img src={Electricidad1} className="d-block w-100 work-img" alt="Electricidad náutica 1" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={Electricidad2} className="d-block w-100 work-img" alt="Electricidad náutica 2" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={Electricidad3} className="d-block w-100 work-img" alt="Electricidad náutica 3" />
                  </Carousel.Item>
                </Carousel>
              </Col>
              <Col lg={6} md={12}>
                <h2 className="work-title mb-3">Electricidad y Electrónica</h2>
                <p className="work-text">
                  Nos especializamos en sistemas eléctricos náuticos, desde la instalación de nuevos equipos hasta la reparación de circuitos. Garantizamos un funcionamiento seguro y eficiente de todas las instalaciones eléctricas de tu barco.
                </p>
              </Col>
            </Row>

            {/* Service y Reparaciones */}
            <Row className="align-items-center mb-5 work-item">
              <Col lg={6} md={12} className="mb-4 mb-lg-0">
                <Carousel id="serviceCarousel" controls={true}>
                  <Carousel.Item>
                    <img src={Service1} className="d-block w-100 work-img" alt="Service y reparaciones náuticas 1" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={Service2} className="d-block w-100 work-img" alt="Service y reparaciones náuticas 2" />
                  </Carousel.Item>
                </Carousel>
              </Col>
              <Col lg={6} md={12}>
                <h2 className="work-title mb-3">Service y Reparaciones</h2>
                <p className="work-text">
                  Realizamos servicios integrales y reparaciones para todo tipo de embarcaciones, cubriendo desde el casco hasta los sistemas internos. Nuestro objetivo es prolongar la vida útil de tu barco y asegurar tu seguridad en el agua.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default NuestrosTrabajos;