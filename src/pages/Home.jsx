import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import '../styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import carousel1 from '../assets/img/incio-pasion-por-la-nautica-1.png';
import carousel2 from '../assets/img/incio-pasion-por-la-nautica-2.png';
import carousel3 from '../assets/img/incio-pasion-por-la-nautica-3.png';
import carouselMobile1 from '../assets/img/incio-celular-pasion-por-la-nautica-1.png';
import carouselMobile2 from '../assets/img/incio-celular-pasion-por-la-nautica-2.png';
import carouselMobile3 from '../assets/img/incio-celular-pasion-por-la-nautica-3.png';
import bannerCruceros from '../assets/img/CRUCEROS-nautica-luis-antonio-img-1.png';
import bannerLanchas from '../assets/img/LANCHAS-nautica-luis-antonio-img-2.png';
import bannerMotos from '../assets/img/MOTOS-nautica-luis-antonio-img-3.png';
import bannerAccesorios from '../assets/img/ACCESORIOS-nautica-luis-antonio-img-4.png';

const Home = () => {
  const [index, setIndex] = useState(0);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Cargar PapaParse dinámicamente
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.3.2/papaparse.min.js';
        script.async = true;
        document.head.appendChild(script);

        script.onload = () => {
          fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vQJhOSqtywRe4J6Tc0heKGJdKDJwk54d3STNQbWevrkXcbsu7nxWJkIgu_DOmSw0Gt299y6sA1CTw6f/pub?output=csv')
            .then((response) => {
              if (!response.ok) throw new Error('Error al cargar el CSV desde Google Sheets.');
              return response.text();
            })
            .then((text) => {
              window.Papa.parse(text, {
                header: true,
                skipEmptyLines: true,
                complete: (result) => {
                  const data = result.data;
                  if (data.length === 0) {
                    throw new Error('No se encontraron productos en el Google Sheet.');
                  }

                  // Convertir datos a formato de productos
                  const formattedProducts = data.map((item) => ({
                    id: item.ID || '',
                    title: item.Title || 'Sin título',
                    images: item.Images ? item.Images.replace(/\n/g, '').split(',').filter((img) => img.trim()) : ['https://via.placeholder.com/300x200'],
                  }));

                  // Tomar los últimos 4 productos
                  setProducts(formattedProducts.slice(-4).reverse());
                },
                error: (error) => {
                  throw new Error('Error al parsear el CSV: ' + error);
                },
              });
            })
            .catch((error) => {
              throw error;
            });
        };

        script.onerror = () => {
          throw new Error('Error al cargar PapaParse.');
        };
      } catch (error) {
        console.error('Error fetching products:', error);
        setError(error.message);
      }
    };

    fetchProducts();

    // Limpieza del script al desmontar
    return () => {
      const scripts = document.querySelectorAll('script[src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.3.2/papaparse.min.js"]');
      scripts.forEach((script) => script.remove());
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Pasión por la Náutica</title>
        <meta
          name="description"
          content="Explora Pasión por la Náutica: venta de cruceros, lanchas, motos acuáticas y accesorios. Servicios de pintura, mecánica y más en San Fernando, Buenos Aires."
        />
        <meta
          name="keywords"
          content="náutica, embarcaciones, cruceros, lanchas, motos acuáticas, pintura náutica, mecánica náutica, lonería, tapicería, San Fernando"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Pasión por la Náutica" />
        <meta property="og:title" content="Pasión por la Náutica" />
        <meta
          property="og:description"
          content="Venta de cruceros, lanchas y motos acuáticas. Servicios de pintura, mecánica y más en San Fernando, Buenos Aires. ¡Contáctanos!"
        />
        <meta
          property="og:image"
          content="https://www.pasionporlanautica.com/assets/img/pasion-por-la-nautica.png"
        />
        <meta property="og:url" content="https://www.pasionporlanautica.com" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_AR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pasión por la Náutica" />
        <meta
          name="twitter:description"
          content="Venta de cruceros, lanchas y motos acuáticas. Servicios de pintura, mecánica y más en San Fernando, Buenos Aires. ¡Contáctanos!"
        />
        <meta
          name="twitter:image"
          content="https://www.pasionporlanautica.com/assets/img/pasion-por-la-nautica.png"
        />
        <link rel="canonical" href="https://www.pasionporlanautica.com" />
        <link rel="icon" type="image/png" href="/assets/img/pasionporlanauticafavicon.png" />
        <link rel="apple-touch-icon" href="/assets/img/pasionporlanauticafavicon.png" />
      </Helmet>

      <Header />

      <main>
        {/* Carousel */}
        <section className="carousel-section">
          <Carousel activeIndex={index} onSelect={handleSelect} interval={1500} controls={false}>
            <Carousel.Item>
              <picture>
                <source media="(max-width: 768px)" srcSet={carouselMobile1} />
                <img src={carousel1} className="d-block w-100 carousel-img" alt="Venta y servicios de embarcaciones náuticas" />
              </picture>
            </Carousel.Item>
            <Carousel.Item>
              <picture>
                <source media="(max-width: 768px)" srcSet={carouselMobile2} />
                <img src={carousel2} className="d-block w-100 carousel-img" alt="Cruceros y lanchas en San Fernando" />
              </picture>
            </Carousel.Item>
            <Carousel.Item>
              <picture>
                <source media="(max-width: 768px)" srcSet={carouselMobile3} />
                <img src={carousel3} className="d-block w-100 carousel-img" alt="Motos acuáticas y accesorios náuticos" />
              </picture>
            </Carousel.Item>
          </Carousel>
        </section>

        {/* Welcome Message */}
        <section className="welcome-section text-center py-5">
          <div className="container">
            <p className="welcome-text">
              BIENVENIDO<br />
              Mi misión es acompañarte en este proceso náutico, ya sea que estés buscando tu primer
              barco, renovar el que tenés o simplemente explorar más sobre este maravilloso mundo de la
              náutica.
            </p>
          </div>
        </section>

        {/* Banners Section */}
        <section className="banners-section py-5">
          <div className="container-fluid p-0">
            <div className="row g-0">
              <div className="col-lg-3 col-md-6 col-12 mb-4 text-center">
                <img src={bannerCruceros} className="banner-img img-fluid" alt="Cruceros náuticos en venta" />
                <h3 className="banner-title mt-3">CRUCEROS</h3>
              </div>
              <div className="col-lg-3 col-md-6 col-12 mb-4 text-center">
                <img src={bannerLanchas} className="banner-img img-fluid" alt="Lanchas náuticas en venta" />
                <h3 className="banner-title mt-3">LANCHAS</h3>
              </div>
              <div className="col-lg-3 col-md-6 col-12 mb-4 text-center">
                <img src={bannerMotos} className="banner-img img-fluid" alt="Motos acuáticas en venta" />
                <h3 className="banner-title mt-3">MOTOS</h3>
              </div>
              <div className="col-lg-3 col-md-6 col-12 mb-4 text-center">
                <img src={bannerAccesorios} className="banner-img img-fluid" alt="Accesorios náuticos" />
                <h3 className="banner-title mt-3">ACCESORIOS</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Últimos Ingresos */}
        <section className="latest-arrivals py-5">
          <div className="container">
            <h2 className="text-center mb-4">Últimos ingresos</h2>
            {error ? (
              <div className="alert alert-danger text-center">
                Error al cargar los productos: {error}. Por favor, verifica el Google Sheet.
              </div>
            ) : (
              <div className="row" id="latestProducts">
                {products.map((product) => (
                  <div key={product.id} className="col-lg-3 col-md-3 col-12 mb-4">
                    <div className="card h-100" style={{ cursor: 'pointer' }}>
                      <img
                        src={product.images[0]?.trim() || 'https://via.placeholder.com/300x200'}
                        className="card-img-top"
                        alt={product.title}
                      />
                      <div className="card-body d-flex flex-column">
                        <h5 className="card-title">{product.title}</h5>
                        <Link
                          to={`/productos?id=${product.id}`}
                          className="btn ver-mas-btn mt-auto"
                          style={{ backgroundColor: '#01497C', color: '#FFFFFF' }}
                        >
                          Ver más
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Services Section */}
        <section className="services-section py-5">
          <div className="container">
            <div className="row text-center">
              <div className="col-lg-3 col-md-6 col-6 mb-4">
                <div className="service-item">
                  <span className="service-icon">🎨</span>
                  <h3 className="service-title mt-3">PINTURA</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-6 mb-4">
                <div className="service-item">
                  <span className="service-icon">⚙️</span>
                  <h3 className="service-title mt-3">SERVICE Y REPARACIONES</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-6 mb-4">
                <div className="service-item">
                  <span className="service-icon">🧵</span>
                  <h3 className="service-title mt-3">LONERÍA Y TAPICERÍA</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-6 mb-4">
                <div className="service-item">
                  <span className="service-icon">📱</span>
                  <h3 className="service-title mt-3">ASESORAMIENTO</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* YouTube Video */}
        <section className="video-section">
          <div className="container-fluid p-0">
            <div className="video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/3J9yc-VdUkU?autoplay=1&mute=1&loop=1&playlist=3J9yc-VdUkU"
                title="Video de Pasión por la Náutica"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Home;