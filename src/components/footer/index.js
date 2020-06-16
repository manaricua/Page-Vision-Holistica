import React from 'react';

import './style.css';

import wspIcon from './img/wspIcon.png';
import fbIcon from './img/facebookIcon.png';
import instIcon from './img/instagramIcon.png';

const Footer = () => {
    return(
        <div className="pt-5">
        <footer className="footer">
            <div className="container" style={{color: "white"}}>
                <div className="row no gutters">
                    <div className="col-12 col-lg-6 mt-4">
                        <p className="m-0" style={{fontSize: "1.5rem", lineHeight: "1.2"}}>Quintana 2855 - Mar del Plata</p>
                        <p className="m-0" style={{fontSize: "1.5rem", lineHeight: "1.2"}}>Tel: 223 494-5295</p>
                        <p className="m-0" style={{fontSize: "1.5rem", lineHeight: "1.2"}}><img src={wspIcon} width="20px" alt="whatsapp"/> 223 5955056</p>
                        <p className="m-0" style={{fontSize: "1.5rem", lineHeight: "1.2"}}><img src={wspIcon} width="20px" alt="whatsapp"/> 223 6042172</p>
                        <p className="m-0" style={{fontSize: "1.5rem", lineHeight: "1.2"}}>visionholisticamdp@gmail.com</p>
                    </div>
                    <div className="col-12 col-lg-6 mt-4 text-center">
                        <h3>Redes Sociales</h3>
                        <a href="https://www.instagram.com/visionholisticamdp/"><img src={instIcon} style={{marginRight: "10px", marginLeft: "-10px"}} width="100px" alt="instagram icon"/></a>
                        <a href="https://www.facebook.com/VisionHolisticaMDP/"><img src={fbIcon} width="50px" alt="facebook icon"/></a>
                    </div>
                </div>
            
            </div>
        </footer>
        </div>
    );
}

export default Footer;