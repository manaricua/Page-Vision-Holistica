import React from 'react';

import Header from '../../components/header';
import Footer from '../../components/footer';

import './style.css';

const Massagge = () => {
    return(
        <div className="page-container">
            <div className="content-wrap">
                < Header active="terapeutic"/>
                <div id="carouselExampleIndicators" className="carousel slide box-shadow carousel-secondary" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active massa-carousel-item-img-1">
                        </div>
                        <div className="carousel-item massa-carousel-item-img-2">
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
                    <h1 className="mt-5 text-center">¿En qué consiste el METODO DE SANACIÓN HOLÍSTICO?</h1>
                    <p className="sangria text-justify">
                        Es un proceso terapéutico enfocado fundamentalmente en los desequilibrios de carácter
                        PSÍQUICO-EMOCIONAL. Conjuga:
                    </p>
                    <p className="text-justify">
                        - PSICOLOGÍA HOLÍSTICA. A través de la PALABRA se busca la ampliación de la consciencia
                        respecto del conflicto presente del consultante, promoviendo la observación del mundo
                        interno y las dimensiones que lo constituyen (esencia, consciencia, cuerpo emocional y
                        mental). La implementación de diversas técnicas como la MEDITACIÓN y la
                        RELAJACIÓN promueven la profundización de la consciencia- observación, abriendo la
                        posibilidad de re-conectar con ciertos estados interiores como lo son: el
                        silencio, la paz, la vacuidad, la presencia plena.
                    </p>
                    <p className="text-justify">
                        - ACUPUNTURA. A través de esta herramienta de la Medicina Tradicional China, se trabaja en
                        el origen energético de la manifestación sufriente. Esta técnica actúa en una profundidad, que
                        por nuestro actual estado de consciencia, no nos es sencillo acceder por vía de la palabra y la
                        observación
                    </p>
                    <p className="sangria text-justify">
                        PALABRA, OBSERVACIÓN, SILENCIO Y MOVIMIENTO ENERGÉTICO son aspectos coadyuvantes
                        que se retroalimentan entre sí, ayudando al consultante a una ampliación de consciencia,
                        desde la cual puedan surgir otras perspectivas frente a su mundo interno sufriente,
                        posibilitando no una eliminación de éste, sino una trascendencia por vía del
                        autoconocimiento.
                    </p>
                    <div className="text-right mt-5">
                        <h5>PROFESIONAL</h5>
                        <p className="mb-0">
                            María Mendiburu - Lic. en Psicología - Mat. 47339.
                        </p>
                        <p>
                            Terapeuta en Medicina Tradicional China e
                            instructora de Tai Chi Chuan y Chi Kung.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Massagge;