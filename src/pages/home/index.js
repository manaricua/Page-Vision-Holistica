import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/header';
import Footer from '../../components/footer';

import descrptionImg from '../../assets/home/DESCRIPTION.JPG';

import './style.css';


const Home = () => {
    return (
        <div className="page-container">
            <div className="content-wrap">
                < Header active="home"/>
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active carousel-item-img-1">
                            <h1 style={{position: "relative", top: "20px", color: "whitesmoke", textAlign: "center"}}> Titulo descriptivo</h1>
                            <p style={{position: "relative", top: "20px", color: "whitesmoke", textAlign: "center", fontSize: "18px"}}>
                                Un espacio de conocimiento y crecimiento personal.
                            </p>
                        </div>
                        <div className="carousel-item carousel-item-img-2">
                        </div>
                        <div className="carousel-item carousel-item-img-3">
                        </div>
                        <div className="carousel-item carousel-item-img-4">
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
                <div className="container" style={{marginTop: "100px", marginBottom: "100px"}}>
                    <div className="row no-gutters" style={{marginBottom: "100px"}}>
                        <div className="col-12 col-lg-6">
                            <div className="home-container-description">
                                <h1 className="mb-4">¿Qué es Visión Holística?</h1>
                                <div className="text home-text-description" style={{textIndent: "0.5em"}}>
                                <p className="mb-0">
                                    Desde el año 2013 se comenzó a gestar una ORIGINAL PERSPECTIVA DE
                                    SANACIÓN fusionando dos grandes cosmovisiones que hasta el momento permanecían
                                    por caminos separados: la Medicina Tradicional China y El Cuarto Camino.
                                </p>
                                <p> 
                                    Este nuevo enfoque permite contemplar las diversas dimensiones del 
                                    Ser Humano (físico, mental, emocional, espiritual y energético).
                                </p>
                                </div>
                                <Link to="/vision-holistica" className="btn btn-dark text" style={{backgroundColor: "#1e4820", color: "white"}}>Más Información</Link>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <img className="home-img-description" src={descrptionImg} alt="Description"/>
                        </div>
                    </div>
                    <div className="row no-gutters">
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="home-category-box">
                                <h1>Psicología</h1>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="home-category-box">
                                <h1>Acupuntura</h1>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="home-category-box">
                                <h1>Metodo Sanación Holístico</h1>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="home-category-box">
                                <h1>Masajes</h1>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="home-category-box">
                                <h1>Taijiquan (taichichuan)</h1>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="home-category-box">
                                <h1>Qigong (chickung)</h1>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="home-category-box">
                                <h1>Instructorado</h1>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="home-category-box">
                                <h1>Grupo de Lectura</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;