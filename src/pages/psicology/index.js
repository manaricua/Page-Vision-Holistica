import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/header';
import Footer from '../../components/footer';

import './style.css';

const Psicology = () => {
    return (
        <div className="page-container">
            <div className="content-wrap">
                < Header active="terapeutic"/>
                <div id="carouselExampleIndicators" className="carousel slide box-shadow carousel-secondary" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active psico-carousel-item-img-1">
                        </div>
                        <div className="carousel-item psico-carousel-item-img-2">
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
                    <h1 className="mt-4 text-center">¿En qué consiste la PSICOLOGÍA HOLÍSTICA?</h1>
                    <p className="sangria text-justify">
                        Es importante mencionar que esta Rama de Sanación está fuertemente atravesada por los
                        referenciales que atraviesan a VISION HOLISTICA como perspectiva a través de la cual se concibe al
                        Ser Humano, al Cosmos y a la Sanación: <Link to="/vision-holistica"> El Cuarto Camino</Link> y la <Link to="/vision-holistica"> Medicina Tradicional China.</Link>
                    </p>
                    <p className="sangria text-justify">
                        El “HOLOS” de nuestra psicología considera la MULTIDIMENSIÓN en la que habita el Ser: Cuerpo
                        Físico, Emocional, Mental, Espiritual y Energético.
                    </p>
                    <h3 className="mt-4 mb-4"><u>Ejes del Proceso Terapéutico</u></h3>
                    <p>- La palabra, de poder catártico y de comprensión dialéctica.</p>
                    <p>- La observación contemplativa de Los Cuerpos (físico, emocional, metal, espiritual)</p>
                    <p>- Técnicas de Meditación-Relajación con instrumentos vibracionales (cuenco tibetano, Didgeridoo)</p>
                    <p className="sangria mt-3 mb-0 text-justify">
                        A través de estos ejes se promueve la AMPLIACIÓN DE LA CONSCIENCIA dando lugar a una
                        compresión profunda que permita ver la causa del sufrimiento, el cual tiene SIEMPRE una raíz
                        interna.
                    </p>
                    <p className="text-center my-5" style={{fontStyle: "italic"}}>
                        "A menudo sucede que nos escudamos tras la queja, situando la causa de nuestro padecimiento
                        en factores externos… esto en realidad es ilusorio dado que la queja es una posición subjetiva
                        que alivia nuestro ego y alimenta la comodidad, no resolviendo el conflicto….
                        Comenzar a caminar por un camino de despertar es hermoso porque nos reconecta con nuestra
                        libertad y capacidad de elección, pero también doloroso dado que nos confronta con nuestras

                        más profundas debilidades en sombra…

                        Es maravillosa y sufriente la comprensión de que somos los únicos creadores de nuestra

                        realidad interna."
                    </p>
                    <p className="sangria text-justify">
                        Desde esta área, se trabaja para que el consultante pueda reconectarse con su naturaleza
                        esencial y con ciertos estados internos sutiles como lo son: el silencio, la paz, la vacuidad,
                        la presencia plena, que muchas veces son olvidados o tapados por la fuerza de las emociones
                        negativas y los mecanismos rumiantes propios del campo mental.
                    </p>
                    <p className="mb-0 text-center" style={{fontStyle: "italic"}}>
                        Vivimos siempre en las mismas provincias interiores,
                    </p>
                    <p className="text-center" style={{fontStyle: "italic"}}>desconociendo muchas otras de nuestro Ser.
                    </p>
                    <p className="sangria text-justify">
                        Si el consultante lo requiere, en el mismo encuadre de la sesión, puede trabajar con su cuerpo
                        energético a través de la <Link to="/acupuntura" >Acupuntura.</Link>
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Psicology;