import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import '../styles/styles.css';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Pasión por la Náutica - Página No Encontrada</title>
        <meta
          name="description"
          content="La página que buscas no existe. Vuelve a la página principal de Pasión por la Náutica."
        />
        <meta name="robots" content="noindex" />
        <link rel="canonical" href="https://www.pasionporlanautica.com/" />
      </Helmet>
      <Header />
      <main>
        <section className="hero-section py-5 text-center" style={{ backgroundColor: '#01497C', color: '#fff' }}>
          <div className="container">
            <h1 className="display-4 font-weight-bold">404 - Página No Encontrada</h1>
            <p className="lead">Lo sentimos, la página que buscas no existe.</p>
            <Link to="/" className="btn btn-primary mt-3">
              Volver al Inicio
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default NotFound;