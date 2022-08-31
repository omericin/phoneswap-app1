import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import DevicePicker from "./DevicePicker";
import Header from "./Header";
import Nav from "./Navigation";
import Summary from "./Summary";
import Footer from "./Footer";
import BackOffice from "./BackOffice";
import axios from "axios";



function BackOfficeScreen() {

    let navigate = useNavigate();
    const routeChange = () => { 
      let path = '/backoffice'; 
      navigate('/backoffice');
    }

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

  return (
    <>
        <Header />
        <Nav screenWidth={screenWidth} />
        <BackOffice />
    </>
  );
}

export default BackOfficeScreen;
