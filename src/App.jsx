import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'; // Añadí Link
import { Helmet } from 'react-helmet-async';
import Home from './pages/Home';
import Productos from './pages/Productos';
import Contacto from './pages/Contacto';
import QuienSoy from './pages/QuienSoy';
import NuestrosTrabajos from './pages/NuestrosTrabajos';
import Header from './components/Header'; // Añadí Header
import Footer from './components/Footer'; // Añadí Footer
import WhatsAppButton from './components/WhatsAppButton'; // Añadí WhatsAppButton

function App() {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/quien-soy" element={<QuienSoy />} />
        <Route path="/nuestros-trabajos" element={<NuestrosTrabajos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

// Componente NotFound
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

export default App;