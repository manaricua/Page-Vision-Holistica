import React from 'react';

import Header from '../../components/header';
import Footer from '../../components/footer';

import './style.css';
import logo from '../../assets/chickung/wuweimdp.jpg';

const Chickung = () => {
    return (
        <div className="page-container">
            <div className="content-wrap">
                < Header active="practice"/>
                <div id="carouselExampleIndicators" className="carousel slide box-shadow carousel-secondary" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active chickung-carousel-item-img-1">
                        </div>
                        <div className="carousel-item chickung-carousel-item-img-2">
                        </div>
                        <div className="carousel-item chickung-carousel-item-img-3">
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
                    <h1 className="mt-4 text-center mb-4">QI GONG (CHI KUNG)</h1>
                    <p className="sangria text-justify">
                        En una primera traducción se dice que es la MAESTRIA EN EL MOVIMIENTO
                        DEL QI (energía vital). Tomando como referencial el Hombre como
                        Microcosmos inmerso en el Macrocosmos se amplía la dimensión y los
                        alcances de la práctica, lo que implica:
                    </p>
                    <p className="pl-5 text-justify">
                        <ul>
                            <li>
                            El cultivo de la INTENCIÓN para generar ese MOVIMIENTO
                            CONSCIENTE HACIA LA MAESTRÍA, que también involucra la
                            posibilidad de expansión hacia una disponibilidad creativa,
                            desarrollando un proceso de sanación a través del fluir de la Esencia
                            Vital para mantener la FORMA y purificándola para ese retorno a la NO
                            FORMA.
                            </li>
                        </ul>
                    </p>
                    <p className="pl-5 text-justify">
                        <ul>
                            <li>
                            La capacidad de conectar con el NO MOVIMIENTO EXTERNO para
                            desarrollar la contemplación, observar el MOVIMIENTO INTERNO,
                            percibir esa UNION CON EL TODO.
                            </li>
                        </ul>
                    </p>
                    <p className="sangria text-justify">
                        Desde la Cosmovisión de La Tradición Oriental se trata de la posibilidad de
                        fundirse con la Creación a partir del movimiento del Qi, desarrollando la
                        maestría en la intención para retornar a Dao (Tao).
                    </p>
                    <p className="sangria text-justify">
                        En el aspecto terapéutico su fundamento es la prevención, favorecer la
                        longevidad y restablecer el equilibrio.
                    </p>
                    <p className="text-center chickung-final-text">
                        Es la capacidad innata con la que el Universo dota al ser para autosanarse,
                        con maestría constancia y tiempo, a través del movimiento armónico y
                        consciente del Qi.
                    </p>
                    <h2 className="mt-5 text-center">Escuela WUWEI MDP – Taijiquan Qigong</h2>
                    <img src={logo} class="logo-practice mb-3 box-shadow" alt="logo"/>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Chickung;