import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import aboutImage from '../assets/img/CRUCEROS-nautica-luis-antonio-img-1.png';
import '../styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

const QuienSoy = () => {
  // Animaciones para secciones
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <Helmet>
        <title>Pasión por la Náutica - Sobre Nosotros y Nuestra Experiencia</title>
        <meta
          name="description"
          content="Conoce a Pasión por la Náutica: más de 40 años de experiencia en náutica, ofreciendo venta y servicios de embarcaciones en San Fernando, Buenos Aires."
        />
        <meta
          name="keywords"
          content="náutica, embarcaciones, experiencia náutica, San Fernando, venta de barcos, servicios náuticos"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Pasión por la Náutica" />
        <meta
          property="og:title"
          content="Pasión por la Náutica - Sobre Nosotros y Nuestra Experiencia"
        />
        <meta
          property="og:description"
          content="Conoce a Pasión por la Náutica: más de 40 años de experiencia en náutica, ofreciendo venta y servicios de embarcaciones en San Fernando, Buenos Aires."
        />
        <meta
          property="og:image"
          content="https://www.pasionporlanautica.com/assets/img/pasion-por-la-nautica.png"
        />
        <meta property="og:url" content="https://www.pasionporlanautica.com/quien-soy" />
        <meta property="og:type" content="website" />
        <meta property-implicitly-set="og:locale" content="es_AR" />
        <meta
          name="twitter:card"
          content="summary_large_image"
        />
        <meta
          name="twitter:title"
          content="Pasión por la Náutica - Sobre Nosotros y Nuestra Experiencia"
        />
        <meta
          name="twitter:description"
          content="Conoce a Pasión por la Náutica: más de 40 años de experiencia en náutica, ofreciendo venta y servicios de embarcaciones en San Fernando, Buenos Aires."
        />
        <meta
          name="twitter:image"
          content="https://www.pasionporlanautica.com/assets/img/pasion-por-la-nautica.png"
        />
        <link rel="canonical" href="https://www.pasionporlanautica.com/quien-soy" />
        <link rel="icon" type="image/png" href="/assets/img/pasionporlanauticafavicon.png" />
        <link rel="apple-touch-icon" href="/assets/img/pasionporlanauticafavicon.png" />
      </Helmet>

      <Header />

      <main>
        <motion.section
          className="hero-section py-5 text-center"
          style={{ backgroundColor: '#01497C', color: '#fff' }}
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="container">
            <p className="lead">Conoce la pasión y experiencia detrás de Pasión por la Náutica.</p>
          </div>
        </motion.section>

        <motion.section
          className="about-section py-5"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
                <img
                  src={aboutImage}
                  className="img-fluid rounded shadow"
                  alt="Foto de Luis Antonio, experto en náutica"
                  style={{ maxHeight: '500px', objectFit: 'cover' }}
                />
              </div>
              <div className="col-lg-6 col-md-12">
                <h2 className="mb-4">Te cuento quién soy</h2>
                <p>
                  Con más de 40 años de experiencia en el apasionante mundo de la náutica, he dedicado mi vida a perfeccionar cada área que compone este universo. Desde la construcción de embarcaciones hasta su mantenimiento integral, mi recorrido abarca un conocimiento profundo y práctico en carpintería naval, pintura, electricidad, mecánica y más.
                </p>
                <p>
                  Mi formación ha sido forjada a través del trabajo constante y la pasión por el oficio. Conozco cada rincón de una embarcación porque he trabajado en todos ellos: desde su estructura hasta los detalles más finos de tapicería o lonería. Este dominio me permite no solo garantizar un servicio técnico de calidad, sino también asesorarte con total confianza si estás buscando comprar o vender una embarcación.
                </p>
                <p>
                  Mi misión es ayudarte a concretar tus sueños en el agua, ya sea construyendo, manteniendo o eligiendo la embarcación perfecta para vos. Porque más que una inversión, una embarcación es un estilo de vida. Y acompañarte en ese camino es, para mí, una verdadera pasión por la náutica.
                </p>
                <a
                  href="https://api.whatsapp.com/send/?phone=%2B541144702726&text=Hola+Luis%2C+te+queria+consultar+por+la+embarcaci%C3%B3n%21&type=phone_number&app_absent=0"
                  className="btn btn-primary mt-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contáctame
                </a>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="experience-section py-5"
          style={{ backgroundColor: '#f8f9fa' }}
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="container">
            <h2 className="text-center mb-5">Mi Experiencia</h2>
            <div className="row text-center">
              <div className="col-md-4 mb-4">
                <div className="experience-item">
                  <h3 className="experience-number">40+</h3>
                  <p>Años dedicados al mundo náutico.</p>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="experience-item">
                  <h3 className="experience-number">5</h3>
                  <p>Áreas de especialización: venta, mecánica, electricidad, lonería y tapicería.</p>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="experience-item">
                  <h3 className="experience-number">100%</h3>
                  <p>Compromiso con la satisfacción del cliente.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default QuienSoy;