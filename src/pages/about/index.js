import React from 'react';

import Header from '../../components/header';
import Footer from '../../components/footer';

import './style.css';

import slider1 from '../../assets/about/slider1.jpg';
import perfilMaria from '../../assets/about/perfilMaria.jpg';
import perfilEva from '../../assets/about/perfilEva.jpg';

const About = () => {
    return (
        <div className="page-container">
            <div className="content-wrap">
                < Header active="about"/>
                <img src={slider1} className="about-perfil-img box-shadow" alt="casa"/>
                <div className="container text text-about">
                    <div className="text-right mt-5">
                        <h2>LA CASA</h2>
                        <p className="">
                            Por Héctor Ferreccio
                        </p>
                    </div>
                    <p className="sangria text-justify">
                        A menudo ingresamos en espacios que nos parecen agradables porque han
                        sido definidos mediante estructuras estudiadas; dispuestas con un apropiado criterio
                        estético y funcional. Encontramos objetos colocados de manera que atraen nuestra
                        atención y nos proporcionan una idea de ambiente. En estos casos la labor de
                        arquitectos y decoradores dio el resultado deseado y al estar presentes en esos sitios nos
                        hallamos cómodos y nuestros sentidos se gratifican.
                    </p>
                    <p className="sangria text-justify">
                        Pero sólo en raras ocasiones tenemos la oportunidad de ingresar en un
                        espacio que nos envuelve de un modo particular; donde la emoción que nos produce es
                        difícil de llevar a la palabra. Percibimos que el lugar pulsa de manera apacible,
                        armónica y que nos recibe un abrazo invisible, pero cálido. Las cosas se nos presentan
                        de una manera especial: por alguna extraña razón, una línea de luz atravesando una
                        habitación nos despierta una memoria lejana. El brillo difuso en un ángulo del piso. Un
                        juego de espejos en un mueble antiguo. Un jardín que se adivina respirando tranquilo
                        con el paso de las estaciones. Algo es diferente. Y no tardamos mucho en intuir una
                        respuesta. Allí simplemente sentimos que nada es estático porque el espacio está
                        fusionado a las viejas paredes que lo conforman, a los muchos objetos que retienen ecos
                        y emociones ahora distantes. Pero además, comprendemos que la casa se ha modelado
                        con la fuerza de la vida renovada y que el trabajo la transformó para que se nos muestre
                        vieja y nueva al mismo tiempo. Para que sus puertas, que siempre estuvieron abiertas,
                        hoy sean el umbral hacia otras vivencias.
                    </p>
                    <p className="sangria text-justify">
                        Conociendo la casa desde muchos años atrás, esto es lo que pude sentir
                        cuando volví a transitarla como Visión Holística. El espacio es el que fue. Sin embargo,
                        también es nuevo y vital. Algo fluye y algo permanece y en ese cruce se nos hace
                        posible encontrarnos con el conocimiento y la práctica amable que buscamos.
                    </p>
                
                    <div className="row no-gutters">
                        <div className="col-12 col-sm-4">
                            <img src={perfilMaria} className="perfil"/>
                        </div>
                        <div className="col-12 col-sm-8">
                            <h2 className="pl-5">Maria Mendiburu</h2>
                            <p className="sangria text-justify">
                            La Licenciada en Psicología Maria Mendiburu (Mat. 47339) se graduó en la
                            Universidad Nacional de Mar del Plata en el año 2012 y desde el 2013 realiza
                            la atención en Consultorio particular.
                            </p>
                            <p className="sangria text-justify">
                            En el 2013 funda y codirige Visión Holística: Espacio de sanación Integral.
                            Se desarrolla como practicante de Taijiquan y Qigong desde el año 2014,
                            completando su formación como Instructora en ambas disciplinas en el 2017 y
                            aplicando los conocimientos en la atención de su consultorio particular.
                            En el 2018 finalizó su formación como Terapeuta en Medicina Tradicional
                            China en la Escuela NEIJING, Mar del Plata, en una búsqueda por profundizar
                            en los aspectos energéticos de la psique del hombre. Se desempeña como
                            terapeuta en Acupuntura desde entonces.
                            </p>
                            <p className="sangria text-justify">
                            Realiza la coordinación de grupo de técnicas de meditación desde el 2015 y la
                            coordinación de grupos de lectura desde el 2018.
                            </p>
                            <p className="sangria text-justify">
                            Dedicada a la investigación de dos grandes cosmovisiones: la Medicina tradicional
                            China y el Cuarto camino se propone una mirada de la psiquis humana diferente a la
                            académica que deja por fuera la dimensión espiritual y energética.
                            </p>
                            <p className="sangria text-justify">
                            A partir de la creación del Método de Sanación Integral que conjuga la acupuntura
                            con la psicología holística brinda una mirada de la psiquis humana diferente, ahora
                            desde una perspectiva oriental que apunta fundamentalmente a restablecer el
                            equilibrio del cuerpo energético del hombre, permitiendo un nuevo acercamiento a las
                            mal llamadas enfermedades mentales.
                            </p>
                        </div>
                        <div className="col-12 col-sm-4">
                            <img src={perfilEva} className="perfil"/>
                        </div>
                        <div className="col-12 col-sm-8">
                            <h2 className="pl-5">Evangelina</h2>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default About;