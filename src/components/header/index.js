import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const Header = ({active}) => {

  return (
    <nav className="navbar navbar-expand-xl navbar-dark">
      <a className="navbar-brand" href="/" style={{fontSize: "28px"}}>Visión Holística</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse nav-menu" id="navbarSupportedContent">
        <ul className="navbar-nav">
        <li className={`nav-item btn btn-dark ${active==="home" ? "active" : ""}`}>
            <Link to="/" className="nav-link">Inicio</Link>
          </li>
          <li className={`nav-item btn btn-dark ${active==="about" ? "active" : ""}`}>
            <a className="nav-link" href="/nosotros">Nosotros</a>
          </li>
          <li className={`nav-item dropdown btn btn-dark ${active==="terapeutic" ? "active" : ""}`}>
            <div className="nav-link header-button" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Terapeutica
            </div>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link to="/psicologia" className="dropdown-item">Piscología</Link>
              <a className="dropdown-item" href="/acupuntura">Acupuntura</a>
              <a className="dropdown-item" href="/metodo-sanacion-holistico">Metodo Sanación Holistico</a>
              <a className="dropdown-item" href="/masajes">Masajes</a>
            </div>
          </li>
          <li className={`nav-item dropdown btn btn-dark ${active==="practice" ? "active" : ""}`}>
            <div className="nav-link header-button" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Practicas
            </div>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="/taichichuan">Taijiquan (taichichuan)</a>
              <a className="dropdown-item" href="/chikung">Qigong (chikung)</a>
            </div>
          </li>
          <li className="nav-item btn btn-dark">
            <a className="nav-link" href="/instructorado">Instructorado Qigong</a>
            
          </li>
          <li className={`nav-item btn btn-dark ${active==="lecture" ? "active" : ""}`}>
            <a className="nav-link" href="/grupo-lectura">Grupo de Lectura</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;