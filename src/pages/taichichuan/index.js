import React from 'react';

import Header from '../../components/header';
import Footer from '../../components/footer';

import './style.css';
import logo from '../../assets/taichichuan/kaime.jpg';

const Taichichuan = () => {
    return (
        <div className="page-container">
            <div className="content-wrap">
                < Header active="practice"/>
                <div id="carouselExampleIndicators" className="carousel slide box-shadow carousel-secondary" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active taichi-carousel-item-img-1">
                        </div>
                        <div className="carousel-item taichi-carousel-item-img-2">
                        </div>
                        <div className="carousel-item taichi-carousel-item-img-3">
                        </div>
                        <div className="carousel-item taichi-carousel-item-img-4">
                        </div>
                        <div className="carousel-item taichi-carousel-item-img-5">
                        </div>
                        <div className="carousel-item taichi-carousel-item-img-6">
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
                    <h1 className="mt-4 text-center mb-4">TAIJIQUAN (Tai Chi Chuan)</h1>
                    <p className="sangria text-justify">
                        Es una práctica marcial y terapéutica que integra el equilibrio de los cuerpos
                        físico, mental y energético.
                    </p>
                    <p className="sangria text-justify">
                        A partir del registro en la circulación del Qi (bio energía, energía vital) se
                        genera la disminución de patologías articulares, del sistema nervioso;
                        por otro lado disminuye los estados de estrés que ocasionan enfermedad adquiriendo a
                        su vez mayor disponibilidad física y respiratoria.
                    </p>
                    <p className="sangria text-justify">
                        Con el desplazamiento encadenado o Forma se explora la observación
                        contemplativa y presente, el movimiento fluido y armonioso que conduce al
                        refinamiento de las habilidades y la sensibilidad psicofísicas, de la actitud de
                        presencia total y la atención consciente, como así también regula y activa la
                        salud interna del Qi (Chi) ayudando a prevenir desequilibrios (mal llamadas
                        enfermedades).
                    </p>
                    <p className="sangria text-justify">
                        Así, en la práctica se aprende la manera correcta de hacer que las piernas
                        sostengan el peso del cuerpo para permitir que brazos y manos se muevan con
                        agilidad y con el mínimo esfuerzo, evitando el desgaste prematuro del
                        organismo al no luchar por sostener la postura y reconociendo el centro de
                        gravedad mientras se ejercita delicadamente el cuerpo, el fluir de la Energía y
                        la tranquilidad de la mente.
                    </p>
                    <p className="sangria text-justify">
                        El Estilo de la práctica es Yang Tradicional, Forma larga de 128 movimientos.
                        La Escuela Kai Men Mar del Plata es representante de la Asociación Kai Men
                        de Kung Fu, con Núcleo Central en Buenos Aires.
                    </p>
                    <img src={logo} class="logo-practice mb-3 box-shadow" alt="logo"/>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Taichichuan;