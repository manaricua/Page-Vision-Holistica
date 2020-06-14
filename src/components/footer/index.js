import React from 'react';

import './style.css';

import wspIcon from './img/wspIcon.png';
import fbIcon from './img/facebookIcon.png';

const Footer = () => {
    return(
        <div className="pt-5">
        <footer className="footer">
            <div className="container" style={{color: "white"}}>
                <div className="row no gutters footer-text">
                    <div className="col-12 col-lg-6  mt-3">
                        <p className="m-0" style={{fontSize: "1.5rem", lineHeight: "1.2"}}>María Mendiburu</p>
                        <p className="m-0" style={{fontSize: "1.5rem", lineHeight: "1.2"}}>Lic. en Psicología - Mat. 47339.</p>
                        <p className="m-0" style={{fontSize: "1.5rem", lineHeight: "1.2"}}>Terapeuta en Medicina Tradicional China</p>
                        <p className="m-0" style={{fontSize: "1.5rem", lineHeight: "1.2"}}>Instructora de Tai Chi Chuan y Chi Kung.</p>
                    </div>
                    <div className="col-12 col-lg-6 mt-3">
                        <p className="m-0" style={{fontSize: "1.5rem", lineHeight: "1.2"}}>María Mendiburu</p>
                        <p className="m-0" style={{fontSize: "1.5rem", lineHeight: "1.2"}}>Lic. en Psicología - Mat. 47339.</p>
                        <p className="m-0" style={{fontSize: "1.5rem", lineHeight: "1.2"}}>Terapeuta en Medicina Tradicional China</p>
                        <p className="m-0" style={{fontSize: "1.5rem", lineHeight: "1.2"}}>Instructora de Tai Chi Chuan y Chi Kung.</p>
                    </div>
                    <div className="col-12">
                        <img src={wspIcon} width="50px" className="m-1"/>
                        <img src={fbIcon} width="50px" className="m-1 ml-4"/>
                    </div>
                </div>
            
            </div>
        </footer>
        </div>
    );
}

export default Footer;