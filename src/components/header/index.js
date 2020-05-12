import React from 'react';

import './style.css';

import logo from './img/logo.png'

const Header = () => {

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Vision Holística</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse nav-menu" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">Inicio</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Terapeutica
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Piscología</a>
              <a class="dropdown-item" href="#">Acupuntura</a>
              <a class="dropdown-item" href="#">Metodo Sanación Holistico</a>
              <a class="dropdown-item" href="#">Masajes</a>
              <a class="dropdown-item" href="#">Meditación</a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Practicas
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Taijiquan (taichichuan)</a>
              <a class="dropdown-item" href="#">Qigong (chickung)</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Instructorado</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Grupo de Lectura</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;