import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import './Assets/Css/StaticPage.css';
import Header from "./Header";
import Nav from "./Navigation";
import Footer from "./Footer";

export default function MailApprove() {

    const ref = useRef();

    let navigate = useNavigate();
    
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleWindowResize() {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    }, []);

    useEffect(() => {
            ref.current?.scrollIntoView({behavior: 'smooth'});
    }, []);

    return (
        <>
            <Header />
            <Nav screenWidth={screenWidth} />
            <div className="mail-approve-container" ref={ref}>
                <div className="mail-approve-header">E-mail sendt succesfuldt</div>
                <div className="mail-approve-content">
                Tak for oprettelse af dine enheder. Du vil snarest blive kontaktet via sms/mail og kan derefter sende dine enheder til os.
                </div>
                <button onClick={() => navigate('/')}>Komplet</button>
            </div>
            <Footer />
        </>
    );
}
