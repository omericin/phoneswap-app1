import React, { useEffect, useState } from 'react';
import './Assets/Css/Navigation.css';
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ImMobile } from "react-icons/im";
import { FiMenu } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import { FaLocationArrow, FaHome, FaToolbox, FaQuestion } from "react-icons/fa";


function Navigation(props) {

    let navigate = useNavigate();

    const [navBarThinActive, setNavBarThinActive] = useState(false);
    useEffect(() => {
        if (props.screenWidth > 1250) {
            setNavBarThinActive(false);
        }
    }, [props.screenWidth]);
    return (<div>
        {navBarThinActive ? (<div className='nav-bar-thin'>
            <a href="/"><FaHome color='white' />&nbsp;&nbsp;Hjem</a>
            <a href='http://www.fixbydrive.dk/'><FaToolbox color='white' />&nbsp;&nbsp;Reparationer</a>
            <a href="/butik"><FaLocationArrow color='white' />&nbsp;&nbsp;Butik</a>
            <a href="/faq"><FaQuestion color='white' />&nbsp;&nbsp;FAQ</a>
            <a href="/backoffice">BackOffice</a>
        </div>) : (null)}
        <div className="nav-container">
            <div className='nav-parent'>
                <div className='nav-logo'>
                    <div onClick={() => navigate('/')} className="nav-cursor" style={{ display: 'flex', alignItems: 'center' }}>
                        <ImMobile size="40" /><p className='logo-text'>phoneswap</p>
                    </div>
                    {/* <div>
                        <div className='nav-number'><FaPhone />&nbsp; 93 10 98 99</div>
                    </div> */}
                </div>
                <div className='nav-bar'>
                    <a href="/"><FaHome color='white' />&nbsp;&nbsp;Hjem</a>
                    <a href='http://www.fixbydrive.dk/'><FaToolbox color='white' />&nbsp;&nbsp;Reparationer</a>
                    <a href="/butik"><FaLocationArrow color='white' />&nbsp;&nbsp;Butik</a>
                    <a href="/faq"><FaQuestion color='white' />&nbsp;&nbsp;FAQ</a>
                    <a href="/backoffice">BackOffice</a>
                </div>
                {
                    navBarThinActive ? (null) : (
                        <div className='menu-button'><div className='nav-space'></div><FiMenu size={50} onClick={() => setNavBarThinActive(!navBarThinActive)} /></div>
                    )
                }
                {
                    !navBarThinActive ? (null) : (
                        <div className='menu-button'><div className='nav-space'></div><CgClose size={50} onClick={() => setNavBarThinActive(!navBarThinActive)} /></div>
                    )
                }            </div>
            <div className='nav-bottom-line'>
                <div className='nav-bottom-line-wr'>
                    <div className='nbcc' style={{ flex: 2 }}><FaPhone />&nbsp; 93 10 98 99</div>
                    <div className='nbcr' style={{ flex: 2 }}><FaEnvelope />&nbsp; kontakt@phoneswap.dk</div>
                </div>
            </div>
        </div >
    </div>
    );
}

export default Navigation;