import React, { useEffect, useState } from 'react';
import './Assets/Css/StaticPage.css';
import Navigation from './Navigation';
import Footer from './Footer';
import bad2 from "./Assets/Img/office.jpeg";
import { FiMail, FiPhone, FiSmartphone, FiSearch } from 'react-icons/fi';

export default function ButikScreen(props) {
    return (
        <>
            <Navigation />
            <div className='butik-wrapper'>
                <div className='butik-image'>
                    <img src={bad2} alt='butik'></img>
                </div>
                <div className='butik-content'>
                    <p><FiSmartphone color='green'/>&nbsp; FixByDrive</p>
                    <p><FiSearch color='green'/> &nbsp;Bredgade 41 - 7400 Herning</p>

                    <p><FiPhone color='green' fill='green'/> &nbsp;93 10 98 99</p>
                    <p><FiMail color='green'/> &nbsp;info@phoneswap.dk</p>
                </div>
            </div>
        </>
    );
}