import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Footer from '../src/Components/Footer';
import Header from '../src/Components/Header';
import Nav from '../src/Components/Navigation';
import SellToUs from '../src/Components/SellToUs';
import Summary from '../src/Components/Summary';
import Upload from '../src/Components/UploadImage';
import { FaMobile } from "react-icons/fa";
import './App.css';
import './Components/Assets/Css/DeviceAmount.css';


function App() {

  let navigate = useNavigate();
  const routeChange = () => { 
    let path = '/saelg'; 
    navigate('/saelg');
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
  const count = 1;

  return (
    <div>
        <Header />
      <div className='app-container'>
        <Nav screenWidth={screenWidth} />
        <div className='amount-header'>Hvor mange enheder ønsker du at sælge?</div>
        <div className='amount-wrapper'>
          <button type='button' onClick={() => navigate('/saelg', {state: {id: 1, screenWidth: screenWidth}})} className='amount-button'>1 Enhed <br/></button>
          <button type='button' onClick={() => navigate('/saelg', {state: {id: 2, screenWidth: screenWidth}})} className='amount-button'>2 Enheder<br/>   </button>
          <button type='button' onClick={() => navigate('/saelg', {state: {id: 3, screenWidth: screenWidth}})} className='amount-button'>3 Enheder<br/>   </button>
          <button type='button' onClick={() => navigate('/saelg', {state: {id: 4, screenWidth: screenWidth}})} className='amount-button'>4 Enheder<br/> </button>
        </div>
        <div className='bottom-line'></div>
        <SellToUs />
        <div className='bottom-line'></div>
        <Summary />
        <Footer />
      </div>
    </div>
  );
}

export default App;
