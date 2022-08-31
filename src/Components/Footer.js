import React from 'react';
import './Assets/Css/Footer.css';
import { FaEnvelope, FaSearchLocation, FaPhone } from "react-icons/fa";

function Footer() {
    return (
        <div className="footer-container">
            <div className='footer-content'>
                <div className='footer-contact'><h3>Kontakt</h3>
                    <p>PhoneSwap</p>

                    <FaEnvelope /> info@phoneswap.dk <br></br>
                    <FaPhone /> 93 10 98 99<br></br>
                    FixByDrive<br></br>
                    Bredgade 41<br></br>
                    7400 Herning<br></br>
                    Denmark</div>
                <div className='links'><h3>Nyttige links</h3>
                    <a href='/'>Hjem</a>
                    <a href='/butik'>Butik</a>
                    <a href='/faq'>FAQ</a>
                </div>
                <div><h3>Butik</h3>
                    <FaSearchLocation /> Hellerup<br></br>
                    Bredgade 41<br></br>
                    7400 Herning</div>
            </div>
        </div>
    );
}

export default Footer;