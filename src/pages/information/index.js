import React from 'react';

import Header from '../../components/header';
import Footer from '../../components/footer';

import './style.css';


const Information = () => {
    return (
        <div className="page-container">
            <div className="content-wrap">
                < Header active="information"/>
                <div className="information-description mb-4 mt-5">
                    
                    <div className="row no-gutters">
                        <div className="col-12 col-lg-6 information-des-text-1">
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
                        </div>
                        <div className="col-12 col-lg-6 information-des-img-1">
                            <div className=""></div>
                        </div>
                        <div className="col-12 col-lg-6 information-des-img-2">
                            <div className=""></div>
                        </div>
                        <div className="col-12 col-lg-6 information-des-text-2">
                            <p className="mb-0 text">
                            El CUARTO CAMINO es un sistema metafísico, cosmológico y filosófico introducido
                            en occidente por George Gurdjieff y Piotr Demiánovich Ouspenski.
                            Se basa en la creencia de que el ser humano necesita un método de autoconocimiento
                            para el Despertar.
                            </p>
                            <p className="mb-2 mt-0 text" style={{fontStyle: "italic"}}>
                            …Es por la vía de la observación y de la comprensión de las funciones físicas,
                            emocionales, mentales y de aquéllos mecanismos profundos que constituyen nuestra
                            personalidad, que se abre la posibilidad de su trascendencia y la conexión con
                            aquellos aspectos más sutiles olvidados de nosotros mismos…
                            </p>
                        </div>
                        <p className="text information-des-text-3 mt-2">
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
            </div>
            <Footer />
        </div>
    );
}

export default Information;