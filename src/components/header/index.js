import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const Header = ({active}) => {

  return (
    <nav className="navbar navbar-expand-xl navbar-dark">
      <a className="navbar-brand" href="#" style={{fontSize: "28px"}}>Visión Holística</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse nav-menu" id="navbarSupportedContent">
        <ul className="navbar-nav">
        <li className={`nav-item ${active==="home" ? "active" : ""}`}>
            <Link to="/" className="nav-link">Inicio</Link>
          </li>
          <li className={`nav-item ${active==="about" ? "active" : ""}`}>
            <a className="nav-link" href="#">Nosotros</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Terapeutica
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link to="/psicologia" className="dropdown-item">Piscología</Link>
              <a className="dropdown-item" href="#">Acupuntura</a>
              <a className="dropdown-item" href="#">Metodo Sanación Holistico</a>
              <a className="dropdown-item" href="#">Masajes</a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Practicas
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">Taijiquan (taichichuan)</a>
              <a className="dropdown-item" href="#">Qigong (chickung)</a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Instructorado Qigong</a>
            
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Grupo de Lectura</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;