import React from 'react';
import './Assets/Css/Footer.css';
import { FaEnvelope, FaIdBadge, FaPhone, FaLocationArrow, FaShopify } from "react-icons/fa";
import fblogo from './Assets/Img/fb2.png';
import mobilepay from './Assets/Img/mobilepay.svg';

function Footer() {

    const goFacebook = () => { 
        window.open('https://www.facebook.com/profile.php?id=100085622483193', '_blank'); 
      }

    return (<>
        <div className="footer-container">
            <div className='footer-content'>
                <div className='footer-contact'><h3>Kontakt</h3>
                    <div><FaEnvelope /> kontakt@phoneswap.dk</div><br></br>
                    <div><FaPhone /> 93 10 98 99</div><br></br>
                    <div><FaIdBadge /> CVR: 27012213</div><br></br>
                    <div><FaLocationArrow /> Bredgade 41</div><br></br>
                    <div></div>7400 Herning</div>
                <div className='links'><h3>Nyttige links</h3><br></br>
                    <div className='footer-con-wrap'>
                    <a href='/'>Hjem</a><br></br>
                    <a href='/butik'>Butik</a><br></br>
                    <a href='/faq'>FAQ</a><br></br>
                    <a href='http://www.fixbydrive.dk/'>Reparationer</a><br></br>
                    </div>
                </div>
                <div className='footer-butik'>
                <div className='footer-con-wrap'>
                <h3>Butik</h3><br></br>
                    <div><FaShopify /> FixByDrive</div><br></br>
                    <div><FaLocationArrow /> Bredgade 41</div><br></br>
                    <div>7400 Herning</div></div>
                </div>
            </div>
        </div>
        <div className='footer-logo'>
            <img className='facebook-logo' onClick={() => goFacebook()} alt='facebook' src={fblogo} height="40px"></img> &nbsp;&nbsp;|&nbsp;&nbsp; <img alt='mobilepay' src={mobilepay} height="40px" ></img>
        </div></>
    );
}

export default Footer;