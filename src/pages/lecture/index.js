import React from 'react';

import Header from '../../components/header';
import Footer from '../../components/footer';

import './style.css';

import slider1 from '../../assets/lecture/slider1.jpg';

const Lecture = () => {
    return (
        <div className="page-container">
            <div className="content-wrap">
                < Header active="lecture"/>
                <img src={slider1} className="lecture-img box-shadow" alt="libros"/>
                <div className="container text">
                    <h1 className="mt-4 text-center mb-4">¿En qué consiste El Cuarto Camino?</h1>
                    <p className="sangria text-justify">
                        EL CUARTO CAMINO (o CUARTA VÍA) es un sistema metafísico, cosmológico y
                        filosófico introducido en Occidente por George Gurdjieff y Piotr Demiánovich
                        Ouspenski.
                    </p>
                    <p className="sangria text-justify mb-0">
                        Se basa en la creencia de que el ser humano necesita un método para despertar a
                        través de:
                    </p>
                    <ul className="pl-5">
                        <li>
                            <p>Autoconocimiento</p>
                        </li>
                        <li>
                            <p>Atención Consciente</p>
                        </li>
                        <li>
                            <p>El Recuerdo de Si</p>
                        </li>
                    </ul>
                    <p className="sangria text-justify mt-4">
                        El Camino busca despertar del sueño que el estado de vigilia supone, esto es, del
                        condicionamiento externo de nuestro mundo interno.
                    </p>
                    <p className="sangria text-justify">
                        Sólo por vía de la observación y la comprensión de las funciones físicas, emocionales,
                        mentales y de aquéllos mecanismos profundos que constituyen nuestra personalidad,
                        es posible trascenderlos, no quedar presos de ellos y así conectar con los aspectos
                        más sutiles olvidados de nosotros mismos.
                    </p>
                    <p className="text-justify">
                        El mismo G. Gurdjieff lo expresa:
                    </p>
                    <p className="text-center mb-0" style={{fontStyle: "italic"}}>
                        “El ser humano solo no puede, las fuerzas de la mecanicidad son demasiado fuertes.
                    </p>
                    <p className="text-center mb-0" style={{fontStyle: "italic"}}>
                        Es necesario de un otro, de un grupo.
                    </p>                        
                    <p className="text-center" style={{fontStyle: "italic"}}>
                        De aquí la importancia del grupo de lectura, trabajar juntos en vías de un despertar.”
                    </p>
                    <p className="mt-5 sangria text-justify">
                        Se trata de un grupo de lectura de carácter horizontal que trabaja en dos dimensiones:
                    </p>
                    <p className="pl-4  text-justify">
                        <ul>
                            <li>
                            Por un lado, un aspecto de conocimiento, dado que consiste en un
                            acercamiento a los conceptos esenciales a partir de la lectura a la letra de las
                            fuentes primarias.
                            </li>
                        </ul>
                    </p>
                    <p className="pl-4 text-justify">
                        <ul>
                            <li>
                            Por otro y simultáneamente un aspecto vivencial, ya que la dinámica de un
                            grupo nos despierta inexorablemente nuestro mundo interno volviéndose
                            propicio para el ejercicio de la observación interna, el recuerdo de si, la des-
                            identificación, el silencio y el respeto por el otro en todas sus dimensiones.
                            </li>
                        </ul>
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Lecture;