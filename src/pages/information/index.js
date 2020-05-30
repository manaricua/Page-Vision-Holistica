import React from 'react';

import Header from '../../components/header';
import Footer from '../../components/footer';

import './style.css';


const Information = () => {
    return (
        <div className="page-container">
            <div className="content-wrap">
                < Header active="information"/>
                <div id="carouselExampleIndicators" className="carousel slide box-shadow carousel-secondary" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active info-carousel-item-img-1">
                        </div>
                        <div className="carousel-item info-carousel-item-img-2">
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
                <div className="information-description mb-4 mt-5 container">
                    <p className="text">            
                        La MEDICINA TRADICIONAL CHINA es un sistema médico-preventivo cuyo origen
                        puede remontarse a 4.000 años AC. Uno de sus conceptos fundamentales es el Qi
                        (soplo o energía) materia primera del Cosmos y del Hombre; desde esta perspectiva el
                        Ser Humano es parte y reflejo del Todo. El Qi, fluye a lo largo de canales energéticos
                        siendo responsable de la Salud-Enfermedad tanto en el campo Físico como en el
                        Psíquico-Emocional
                        Este paradigma es el que subyace a nuestras herramientas de sanación: CHI KUNG
                        TERAPÉUTICO, ACUPUNTURA y MÉTODO DE SANACIÓN HOLÍSTICO
                        El CUARTO CAMINO es un sistema metafísico, cosmológico y filosófico introducido
                        en occidente por George Gurdjieff y Piotr Demiánovich Ouspenski.
                        Se basa en la creencia de que el ser humano necesita un método de autoconocimiento
                        para el Despertar.
                    </p>

                    <p className="text">
                        El CUARTO CAMINO es un sistema metafísico, cosmológico y filosófico introducido
                        en occidente por George Gurdjieff y Piotr Demiánovich Ouspenski.
                        Se basa en la creencia de que el ser humano necesita un método de autoconocimiento
                        para el Despertar.
                    </p>
                    <p className="text my-5" style={{fontStyle: "italic"}}>
                        …Es por la vía de la observación y de la comprensión de las funciones físicas,
                        emocionales, mentales y de aquéllos mecanismos profundos que constituyen nuestra
                        personalidad, que se abre la posibilidad de su trascendencia y la conexión con
                        aquellos aspectos más sutiles olvidados de nosotros mismos…
                    </p>
                    <p className="text mb-5">
                        Esta Cosmovisión es la que sustenta el GRUPO DE LECTURA, LA PSICOLOGIA
                        HOLÍSTICA Y también al MÉTODO DE SANACION HOLÍSTICO
                        Nuestra perspectiva VISIÓN HOLÍSTICA concibe que un proceso de
                        Autoconocimiento que se asienta en los referenciales del Cuarto Camino conjugado con
                        un movimiento energético propio de la antigua Tradición China, (ya sea bajo la
                        modalidad de Chi Kung o Acupuntura), posibilita al Hombre pequeños pero
                        continuados giros ascendentes de Consciencia que posibilitan OTRA COMPRENSIÓN
                        respecto a su REALIDAD SUFRIENTE.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Information;