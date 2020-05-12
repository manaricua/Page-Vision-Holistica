import React from 'react';

import Header from '../components/header/'

import logo from '../logo.svg';
import '../App.css';

const Home = () => {
    return (
        <>
        < Header />
        <div className="row">
            <div className="col-12 col-lg-6" style={{backgroundColor: "blue", height: "400px"}}>

            </div>
            <div className="col-12 col-lg-6" style={{backgroundColor: "red", height: "400px"}}>
                
            </div>
        </div>
        </>
    );
}

export default Home;