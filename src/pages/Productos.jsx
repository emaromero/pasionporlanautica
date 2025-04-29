import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Carousel } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import '../styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

const Productos = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const validCategories = ['all', 'cruceros', 'lanchas', 'motos', 'accesorios'];
  const initialCategory = validCategories.includes(searchParams.get('category')?.toLowerCase())
    ? searchParams.get('category').toLowerCase()
    : 'all';
  const [category, setCategory] = useState(initialCategory);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const filteredProducts = category === 'all' ? products : products.filter((product) => product.category.toLowerCase() === category);

  const handleCategoryChange = (newCategory) => {
    if (validCategories.includes(newCategory)) {
      setCategory(newCategory);
      setSelectedProduct(null);
      setSearchParams({ category: newCategory });
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
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

                  const formattedProducts = data.map((item) => ({
                    id: item.ID || '',
                    title: item.Title || 'Sin título',
                    category: item.Category || '',
                    description: item.Description || '',
                    images: item.Images ? item.Images.replace(/\n/g, '').split(',').filter((img) => img.trim()) : ['https://via.placeholder.com/300x200'],
                    brand: item.Brand || '',
                    model: item.Model || '',
                    year: item.Year || '',
                    engineYear: item.EngineYear || '',
                    engineType: item.EngineType || '',
                    engineBrand: item.EngineBrand || '',
                    engineCount: item.EngineCount || '',
                    power: item.Power || '',
                    usageHours: item.UsageHours || '',
                    fuelCapacity: item.FuelCapacity || '',
                    material: item.Material || '',
                    beam: item.Beam || '',
                    length: item.Length || '',
                  }));

                  setProducts(formattedProducts);

                  const productId = searchParams.get('id');
                  if (productId) {
                    const product = formattedProducts.find((p) => p.id === productId);
                    if (product && validCategories.includes(product.category.toLowerCase())) {
                      setSelectedProduct(product);
                      setCategory(product.category.toLowerCase());
                      setSearchParams({ category: product.category.toLowerCase(), id: productId });
                    } else {
                      setError('Producto no encontrado.');
                      setSearchParams({ category: 'all' });
                    }
                  }
                  setIsLoading(false);
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
        setIsLoading(false);
      }
    };

    fetchProducts();

    return () => {
      const scripts = document.querySelectorAll('script[src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.3.2/papaparse.min.js"]');
      scripts.forEach((script) => script.remove());
    };
  }, [searchParams, setSearchParams]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const renderProductDetails = (product) => {
    const similarProducts = products
      .filter((p) => p.category === product.category && p.id !== product.id)
      .slice(0, 3);

    let descriptionHTML = (product.description || '')
      .replace(/<br>/g, '<br>')
      .replace(/\n/g, '<br>')
      .replace(/^- (.*?)(<br>|$)/g, '<li>$1</li>');
    if (descriptionHTML.includes('<li>')) {
      descriptionHTML = `<ul>${descriptionHTML}</ul>`;
    }

    return (
      <motion.section
        className="product-details py-5"
        id="productDetails"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container">
          <button className="btn btn-secondary mb-4" onClick={() => setSelectedProduct(null)}>
            Volver a Productos
          </button>
          <div className="row">
            <div className="col-lg-6 col-md-12 mb-4">
              <div className="product-image-container">
                <Carousel id="productImageCarousel" data-bs-ride="carousel">
                  {product.images.map((image, index) => (
                    <Carousel.Item key={index} className={index === 0 ? 'active' : ''}>
                      <img
                        src={image.trim()}
                        className="d-block w-100"
                        alt={`${product.title} - Imagen ${index + 1}`}
                        style={{ cursor: 'pointer' }}
                        data-bs-toggle="modal"
                        data-bs-target="#imageModal"
                        data-image-index={index}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <h2 id="productTitle">{product.title}</h2>
              <p id="productSpecs">
                {[
                  product.brand ? `Marca: ${product.brand}` : '',
                  product.model ? `Modelo: ${product.model}` : '',
                  product.year ? `Año: ${product.year}` : '',
                  product.engineBrand ? `Motor: ${product.engineBrand} (${product.engineType || 'N/A'})` : '',
                  product.engineCount ? `Cantidad de motores: ${product.engineCount}` : '',
                  product.power ? `Potencia: ${product.power}` : '',
                  product.engineYear ? `Año del motor: ${product.engineYear}` : '',
                  product.usageHours ? `Horas de uso: ${product.usageHours}` : '',
                  product.fuelCapacity ? `Capacidad del tanque: ${product.fuelCapacity}` : '',
                  product.material ? `Material: ${product.material}` : '',
                  product.beam ? `Manga: ${product.beam}` : '',
                  product.length ? `Eslora: ${product.length}` : '',
                ]
                  .filter((spec) => spec)
                  .map((spec, index) => (
                    <span key={index}>
                      {spec}
                      <br />
                    </span>
                  ))}
              </p>
              <a
                id="consultPriceBtn"
                href={`https://api.whatsapp.com/send/?phone=5491144702726&text=${encodeURIComponent(`Quiero consultar el precio de ${product.title}`)}&type=phone_number&app_absent=0`}
                className="btn btn-whatsapp mt-3 mb-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp me-2"></i>Consultar Precio
              </a>
              <h4>Descripción</h4>
              <div id="productDescription" dangerouslySetInnerHTML={{ __html: descriptionHTML || 'Sin descripción disponible.' }} />
            </div>
          </div>
          <div className="similar-products mt-5">
            <h3>Productos Similares</h3>
            <div className="row" id="similarProducts">
              {similarProducts.map((similarProduct) => (
                <div key={similarProduct.id} className="col-md-4 col-sm-6 mb-4">
                  <div className="card product-card">
                    <a
                      href={`#${similarProduct.id}`}
                      className="text-decoration-none text-dark"
                      onClick={() => setSelectedProduct(similarProduct)}
                    >
                      <img
                        src={similarProduct.images[0]?.trim() || 'https://via.placeholder.com/300x200'}
                        className="card-img-top img-primary"
                        alt={similarProduct.title}
                      />
                      <img
                        src={similarProduct.images[1]?.trim() || similarProduct.images[0]?.trim() || 'https://via.placeholder.com/300x200'}
                        className="card-img-top img-secondary"
                        alt={similarProduct.title}
                      />
                      <div className="card-body text-center">
                        <h5 className="card-title">{similarProduct.title}</h5>
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    );
  };

  return (
    <>
      <Helmet>
        <title>Pasión por la Náutica - Productos Náuticos</title>
        <meta
          name="description"
          content="Explora nuestra selección de cruceros, lanchas, motos acuáticas y accesorios náuticos en Pasión por la Náutica. ¡Encuentra tu embarcación ideal en San Fernando, Buenos Aires!"
        />
        <meta
          name="keywords"
          content="cruceros, lanchas, motos acuáticas, accesorios náuticos, San Fernando, Pasión por la Náutica"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Pasión por la Náutica" />
        <meta property="og:title" content="Pasión por la Náutica - Productos Náuticos" />
        <meta
          property="og:description"
          content="Explora nuestra selección de cruceros, lanchas, motos acuáticas y accesorios náuticos en Pasión por la Náutica."
        />
        <meta
          property="og:image"
          content="https://www.pasionporlanautica.com/assets/img/pasion-por-la-nautica.png"
        />
        <meta property="og:url" content="https://www.pasionporlanautica.com/productos" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_AR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pasión por la Náutica - Productos Náuticos" />
        <meta
          name="twitter:description"
          content="Explora nuestra selección de cruceros, lanchas, motos acuáticas y accesorios náuticos en Pasión por la Náutica."
        />
        <meta
          name="twitter:image"
          content="https://www.pasionporlanautica.com/assets/img/pasion-por-la-nautica.png"
        />
        <link rel="canonical" href="https://www.pasionporlanautica.com/productos" />
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
            <h1 className="display-4 font-weight-bold">Nuestros Productos</h1>
            <p className="lead">Explora nuestra selección de cruceros, lanchas, motos y accesorios náuticos.</p>
          </div>
        </motion.section>

        <motion.section
          className="filter-section py-4"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="container text-center">
            <div className="filter-buttons">
              <button
                className={`btn filter-btn ${category === 'all' ? 'active' : ''}`}
                onClick={() => handleCategoryChange('all')}
              >
                Todos
              </button>
              <button
                className={`btn filter-btn ${category === 'cruceros' ? 'active' : ''}`}
                onClick={() => handleCategoryChange('cruceros')}
              >
                Cruceros
              </button>
              <button
                className={`btn filter-btn ${category === 'lanchas' ? 'active' : ''}`}
                onClick={() => handleCategoryChange('lanchas')}
              >
                Lanchas
              </button>
              <button
                className={`btn filter-btn ${category === 'motos' ? 'active' : ''}`}
                onClick={() => handleCategoryChange('motos')}
              >
                Motos
              </button>
              <button
                className={`btn filter-btn ${category === 'accesorios' ? 'active' : ''}`}
                onClick={() => handleCategoryChange('accesorios')}
              >
                Accesorios
              </button>
            </div>
          </div>
        </motion.section>

        {isLoading ? (
          <motion.section
            className="products-section py-5"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="container text-center">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Cargando...</span>
              </div>
            </div>
          </motion.section>
        ) : error ? (
          <motion.section
            className="products-section py-5"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="container">
              <div className="alert alert-danger text-center">
                Error al cargar los productos: {error}. Por favor, verifica el Google Sheet.
              </div>
            </div>
          </motion.section>
        ) : selectedProduct ? (
          renderProductDetails(selectedProduct)
        ) : (
          <motion.section
            className="products-section py-5"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="container">
              <div className="row" id="productsGrid">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="col-md-3 col-sm-6 mb-4 product-item" data-category={product.category}>
                    <div className="card product-card">
                      <a
                        href={`#${product.id}`}
                        className="text-decoration-none text-dark"
                        onClick={() => setSelectedProduct(product)}
                      >
                        <img
                          src={product.images[0]?.trim() || 'https://via.placeholder.com/300x200'}
                          className="card-img-top img-primary"
                          alt={product.title}
                        />
                        <img
                          src={product.images[1]?.trim() || product.images[0]?.trim() || 'https://via.placeholder.com/300x200'}
                          className="card-img-top img-secondary"
                          alt={product.title}
                        />
                        <div className="card-body text-center">
                          <h5 className="card-title">{product.title}</h5>
                        </div>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>
        )}

        {/* Image Modal */}
        <div className="modal fade" id="imageModal" tabIndex="-1" aria-labelledby="imageModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-xl">
            <div className="modal-content bg-dark text-white">
              <div className="modal-header">
                <h5 className="modal-title" id="imageModalLabel">
                  {selectedProduct?.title || 'Producto'}
                </h5>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <Carousel id="modalImageCarousel" data-bs-ride="carousel">
                  {selectedProduct?.images.map((image, index) => (
                    <Carousel.Item key={index} className={index === 0 ? 'active' : ''}>
                      <img
                        src={image.trim()}
                        className="d-block w-100"
                        style={{ objectFit: 'contain', maxHeight: '80vh' }}
                        alt={`${selectedProduct.title} - Imagen ${index + 1}`}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Productos;