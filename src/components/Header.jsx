import { NavLink } from 'react-router-dom';
import logo from '../assets/img/pasion-por-la-nautica.png';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../styles/styles.css';

const Header = () => {
  return (
    <header className="text-center py-3">
      <div className="container">
        <NavLink to="/">
          <img src={logo} alt="Pasión por la Náutica Logo" className="logo mb-3" style={{ maxWidth: '200px' }} />
        </NavLink>
        <nav className="navbar navbar-expand-lg">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}
                  to="/"
                  end
                >
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}
                  to="/productos"
                >
                  Productos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}
                  to="/contacto"
                >
                  Contacto
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}
                  to="/quien-soy"
                >
                  Quién soy
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}
                  to="/nuestros-trabajos"
                >
                  Nuestros trabajos
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;