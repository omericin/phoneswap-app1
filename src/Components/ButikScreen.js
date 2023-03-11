import React, { useEffect, useState } from 'react';
import './Assets/Css/StaticPage.css';
import Navigation from './Navigation';
import Footer from './Footer';
import Header from './Header';
import bad2 from "./Assets/Img/office.jpeg";
import { FiMail, FiPhone, FiSmartphone, FiSearch } from 'react-icons/fi';

export default function ButikScreen(props) {
    return (
        <>
            <Header />
            <Navigation />
            <div className='butik-wrapper'>
                <div className='butik-image'>
                    <img src={bad2} alt='butik'></img>
                </div>
                <div className='butik-content'>
                    <p><FiSmartphone color='green'/>&nbsp; PhoneSwap</p>
                    <p><FiSearch color='green'/> &nbsp;Bredgade 41 - 7400 Herning</p>

                    <p><FiPhone color='green' fill='green'/> &nbsp;93 10 98 99</p>
                    <p><FiMail color='green'/> &nbsp;kontakt@phoneswap.dk</p>
                </div>
            </div>
            <Footer />
        </>
    );
}