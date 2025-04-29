import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Productos from './pages/Productos';
import Contacto from './pages/Contacto';
import QuienSoy from './pages/QuienSoy';
import NuestrosTrabajos from './pages/NuestrosTrabajos';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/quien-soy" element={<QuienSoy />} />
      <Route path="/nuestros-trabajos" element={<NuestrosTrabajos />} />
    </Routes>
  );
}

export default App;