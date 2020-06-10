import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/header';
import Footer from '../../components/footer';

import './style.css';

const Instructorate = () => {
    return (
        <div className="page-container">
            <div className="content-wrap">
                < Header active="terapeutic"/>
                <div id="carouselExampleIndicators" className="carousel slide box-shadow carousel-secondary" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active instru-carousel-item-img-1">
                        </div>
                        <div className="carousel-item instru-carousel-item-img-3">
                        </div>
                        <div className="carousel-item instru-carousel-item-img-4">
                        </div>
                        <div className="carousel-item instru-carousel-item-img-5">
                        </div>

                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <div className="container text">
                    <h1 className="mt-5 text-center">Instructorado Qigong</h1>
                    <p className="sangria text-justify">
                        El objetivo de la Formación de Instructores en Qigong es adquirir
                    los fundamentos teóricos de la Medicina Tradicional China que
                    sustentan el <Link to="/chikung" > Qigong</Link> como herramienta de
                    sanación, y la práctica de Series Clásicas que son reconocidas en
                    el mundo por sus cualidades terapéuticas.
                    </p>
                    <p className="sangria text-justify">
                        Se toma como referencia la Tradición Oriental más antigua, que
                    concibe la prevención como la herramienta fundamental de la salud,
                    entendida desde el equilibrio del hombre con su entorno y con el
                    Universo a partir del movimiento consciente del Qi y la respiración,
                    manteniendo la estructura de los cuerpos físico, mental/espiritual,
                    emocional y energético en Unidad.
                    </p>
                    <p className="sangria text-justify">
                        El recorrido básico es de 2 años, con la posibilidad de una
                    especialización en 3º donde se profundizan y amplían los
                    conocimientos de la Medicina Tradicional China.
                    </p>
                    <h1 className="mt-5 text-center">Modalidad de Cursada</h1>
                    <h3 className="mt-3"><u>Presencial</u></h3>
                    <p className="sangria mb-0">
                        <span style={{fontSize: "80px"}}>.  </span>
                        Recorrido de 10 módulos mensuales TEORICO- PRACTICOS de 5 horas.
                    </p>
                    <p className="sangria mb-0">
                        <span style={{fontSize: "80px"}}>.  </span>
                        Prácticas semanales libres
                        <Link to="/chikung" style={{color: "rgb(63, 0, 99)"}}> Qigong</Link> y
                        <Link to="/taichichuan" style={{color: "rgb(63, 0, 99)"}}> Taijiquan</Link>
                    </p>
                    <p className="sangria mb-5">
                        <span style={{fontSize: "80px"}}>.  </span>
                        Material teórico y enlace a bibliografía de consulta.
                    </p>

                    <h3 className="mt-3 mb-3"><u>A distancia</u></h3>
                    <ul className="pl-5">
                        <li>
                            <p>Material teórico y enlace a bibliografía de consulta.</p>
                        </li>
                        <li>
                            <p>Prácticas con seguimiento online y corrección periódica.</p>
                        </li>
                    </ul>
                    <p className="text-left mt-4 pl-5">(Destinado a no residentes en Mar del Plata)</p>

                    <h1 className="mt-5 mb-5 text-center">Programa General</h1>
                    <h2 className="mt-3 mb-3 text-center"><u>1º AÑO</u></h2>
                    <b>Teoría</b>
                    <ul className="pl-5">
                        <li>
                            <p>Conceptos básicos Qi, Qi Gong</p>
                        </li>
                        <li>
                            <p>Fundamentos históricos y filosóficos de la Tradición Oriental</p>
                        </li>
                        <li>
                            <p>San Bao-Tres Tesoros</p>
                        </li>
                        <li>
                            <p>Dan Tian y los 9 soles</p>
                        </li>
                        <li>
                            <p>Wu Men Qi Gong: Las 5 puertas</p>
                        </li>
                        <li>
                            <p>Ocho vasos maravillosos: Du Mai y Ren Mai</p>
                        </li>
                        <li>
                            <p>Órbita microcósmica</p>
                        </li>
                    </ul>
                    <b>Práctica</b>
                    <ul className="pl-5">
                        <li>
                            <p>La postura: fundamentación</p>
                        </li>
                        <li>
                            <p>Serie Liang Gong</p>
                        </li>
                        <li>
                            <p>Ba Duan Jin</p>
                        </li>
                        <li>
                            <p>Serie Yi Jin Jing: Cambio de Músculo y Tendón</p>
                        </li>
                        <li>
                            <p>Serie Taiji Qi Gong (1era Parte)</p>
                        </li>
                        <li>
                            <p>Zang Zhuan: Posturas estáticas</p>
                        </li>
                    </ul>
                    <h2 className="mt-5 mb-3 text-center"><u>2º AÑO</u></h2>
                    <b>Teoría</b>
                    <ul className="pl-5">
                        <li>
                            <p>Los 5 Reinos / Movimientos. Agua, Madera, Fuego Tierra, Metal: desarrollo y regulación preventiva (1 por encuentro)</p>
                        </li>
                        <li>
                            <p>Ciclos de Generación y Control</p>
                        </li>
                        <li>
                            <p>La No Forma: 8 Vasos Maravillosos. Octograma de Fushi</p>
                        </li>
                        <li>
                            <p>Introducción a los circuitos del Organigrama Energético</p>
                        </li>
                    </ul>
                    <b>Práctica</b>
                    <ul className="pl-5">
                        <li>
                            <p>Taiji Qigong Shi Ba Shi (2 parte)</p>
                        </li>
                        <li>
                            <p>Taiji Qigong Serie de la Grulla Blanca (3 series)</p>
                        </li>
                        <li>
                            <p>I Yin Yin dinámico</p>
                        </li>
                        <li>
                            <p>Regulación desde la práctica de los 5 Reinos</p>
                        </li>
                        <li>
                            <p>Meditación- Nei Dan</p>
                        </li>
                    </ul>
                    <p className="mt-5 text-center mail mb-2">INFORMES E INSCRIPCIÓN</p>
                    <p className="text-center mail">instructoradodeqigong@gmail.com</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Instructorate;