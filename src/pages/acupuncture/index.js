import React from 'react';

import Header from '../../components/header';
import Footer from '../../components/footer';

import './style.css';

const Acupuncture = () => {
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
                        <div className="carousel-item active acup-carousel-item-img-1">
                        </div>
                        <div className="carousel-item acup-carousel-item-img-2">
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
                    <h1 className="mt-5 text-center">Acupuntura Y Moxibustión</h1>
                    <p className="sangria text-justify">
                        Son herramientas de la Medicina Tradicional China cuyo origen puede remontarse a los
                        4.000 años AC. Uno de sus conceptos esenciales es el Qi (soplo o energía) fundamento
                        del Cosmos y del Hombre. El Qi fluye a lo largo de canales energéticos siendo
                        responsable de la Salud-Enfermedad tanto en el campo Físico como en el Psíquico-
                        Emocional.
                    </p>
                    <p className="sangria text-justify">
                        Como sucede con todos los saberes ancestrales, éstos con el paso del tiempo van
                        evolucionando o involucionado, según la perspectiva de quién observa.
                    </p>
                    <p className="sangria text-justify">
                        Es necesario explicitar que Visión Holística toma la acupuntura en su dimensión
                        ancestral, ligada a la Tradición. Trabaja en el referencial más antiguo de canal
                        energético y no en la dimensión actual de terminaciones nerviosas investigada para el
                        alivio del dolor. Las considera herramientas sagradas
                        de sanación, que al ser capaz de tocar la materia primera fundante del Cosmos (energía)
                        puede llegar al Corazón del Espíritu del Hombre para que éste pueda conectar con su
                        Tao, es decir su Camino, su Misión en el Plan Universal.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Acupuncture;