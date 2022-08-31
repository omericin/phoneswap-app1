import React, { useEffect, useState } from 'react';
import './Assets/Css/Navigation.css';
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { FiSmartphone } from "react-icons/fi";
import { ImMobile } from "react-icons/im";
import { FiMenu } from "react-icons/fi";
import { CgClose } from "react-icons/cg";


function Navigation(props) {
    const [navBarThinActive, setNavBarThinActive] = useState(false);
    useEffect(() => {
        if (props.screenWidth > 1250) {
            setNavBarThinActive(false);
        }
    }, [props.screenWidth]);
    return (<div>
        {navBarThinActive ? (<div className='nav-bar-thin'>
            <a href="/">Hjem</a>
            <a href="/butik">Butik</a>
            <a href="/faq">FAQ</a>
            <a href="/backoffice">BackOffice</a>
        </div>) : (null)}
        <div className="nav-container">
            <div className='nav-parent'>
                <div className='nav-logo'>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <ImMobile size="40" /><p className='logo-text'>phoneswap</p>
                    </div>
                    {/* <div>
                        <div className='nav-number'><FaPhone />&nbsp; 93 10 98 99</div>
                    </div> */}
                </div>
                <div className='nav-bar'>
                    <a href="/">Hjem</a>
                    <a href="/butik">Butik</a>
                    <a href="/faq">FAQ</a>
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
                <div className='nbcc' style={{flex: 2}}><FaPhone />&nbsp; 93 10 98 99</div>
                <div className='nbcr' style={{flex: 2}}><FaEnvelope />&nbsp; info@phoneswap.dk</div>
                </div>
            </div>
        </div >
    </div>
    );
}

export default Navigation;