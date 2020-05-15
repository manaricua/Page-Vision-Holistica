import React from 'react';

import Header from '../../components/header';
import Footer from '../../components/footer';

import './style.css';


const Home = () => {
    return (
        <>
        < Header active="home"/>
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active first-slide">
                    <h1 style={{position: "relative", top: "20px", color: "whitesmoke", textAlign: "center"}}> Titulo descriptivo</h1>
                    <p style={{position: "relative", top: "20px", color: "whitesmoke", textAlign: "center", fontSize: "18px"}}>
                        Un espacio de conocimiento y crecimiento personal.
                    </p>
                </div>
                <div class="carousel-item second-slide">
                </div>
                <div class="carousel-item third-slide">
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
        <div className="home-description container mb-4">
            <div className="row no-gutters">
                <div className="col-12 mb-4">
                    <h1 className="home-title">¿Qué es Visión Holística?</h1>
                </div>
            </div>
            <div className="row no-gutters">
                <div className="col-12 col-lg-6 home-des-text-1">
                    <p>            
                     Desde el año 2013 se comenzó a gestar una ORIGINAL PERSPECTIVA DE
                    SANACIÓN fusionando dos grandes cosmovisiones que hasta el momento permanecían
                    por caminos separados: la Medicina Tradicional China y El Cuarto Camino. Este nuevo
                    enfoque permite contemplar las diversas dimensiones del Ser Humano (físico, mental,
                    emocional, espiritual y energético).
                    </p>
                </div>
                <div className="col-12 col-lg-6 home-des-img-1">
                    <div className=""></div>
                </div>
                <div className="col-12 col-lg-6 home-des-img-2 pb-4">
                    <div className=""></div>
                </div>
                <div className="col-12 col-lg-6 home-des-text-2">
                    <p>
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
                </div>
                <div className="col-12 col-lg-6 home-des-text-3">
                    <p>
                    …Es por la vía de la observación y de la comprensión de las funciones físicas,
                    emocionales, mentales y de aquéllos mecanismos profundos que constituyen nuestra
                    personalidad, que se abre la posibilidad de su trascendencia y la conexión con
                    aquellos aspectos más sutiles olvidados de nosotros mismos…
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
                <div className="col-12 col-lg-6 home-des-img-3">
                    <div className=""></div>
                </div>
            </div>
        </div>
        <Footer />
        </>
    );
}

export default Home;