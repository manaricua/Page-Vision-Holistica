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
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active massa-carousel-item-img-1">
                        </div>
                        <div className="carousel-item massa-carousel-item-img-2">
                        </div>
                        <div className="carousel-item massa-carousel-item-img-3">
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
                    <h1 className="mt-5 text-center">MASAJES</h1>
                    <p className="sangria text-justify">
                        La terapia con masajes es una de las terapias más antiguas: se encuentran
                        referencias en libros de medicina china de más de 4000 años y en occidente desde
                        sus comienzos evidenció sus propiedades sanadoras.
                    </p>
                    <p className="sangria text-justify">
                        Existen diversos tipos de acuerdo a las necesidades, y todos demuestran que la
                        manipulación manual de los tejidos con un sentido, dirección y forma establecidos
                        relaja el cuerpo y la mente, disminuye la presión arterial y la frecuencia cardíaca,
                        ayuda en tratamientos como depresión, estrés y síntomas de artritis y diabetes,
                        estimula el retorno linfático y la eliminación de toxinas, mejora el estado de la piel, etc.
                    </p>
                    <p className="sangria text-justify">
                        A niveles más profundos desde lo físico relaja y distiende el sistema muscular y
                        tendinoso, haciendo que el grupo contracturado o lesionado por las diversas malas
                        posturas, tensiones, emociones, etc, bajen el tono y se pueda encontrar una posición
                        en la estructura ósea que lleve a que el esqueleto acompañe a la gravedad y exista
                        menos desgaste energético en el sostén.
                    </p>
                    <p className="sangria text-justify">
                        En el plano energético el masaje (y más el específicamente el masaje Qigong) que activa
                        y desbloquea el Qi en los canales (meridianos), estimulando el
                        equilibrio Yin/Yang siendo uno de los medios más seguros y eficaces para mantener la
                        salud y evitar la enfermedad.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Massagge;