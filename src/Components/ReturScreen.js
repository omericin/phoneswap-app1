import React, { useEffect, useState } from 'react';
import './Assets/Css/StaticPage.css';
import './Assets/Css/Actions.css';
import Navigation from './Navigation';
import Footer from './Footer';


export default function ReturScreen(props) {

    const [number, setNumber] = useState();
    const [phone, setPhone] = useState();

    return (
        <>
            <Navigation />
            <div className='static-wrapper'>
                <div className='static-header'>
                    <h2>Returnering</h2>
                </div>
                <div className='static-content'>
                    <form style={{marginTop: '20px'}}>
                        <input className="ps-input" type="text" placeholder="Ordrenummer" name="name" onChange={(e) => setNumber(e.target.value)} />
                        <input className="ps-input" type="text" placeholder="Telefonnummer" name="phone" onChange={(e) => setPhone(e.target.value)} />
                        <input className="ps-button" type="submit" placeholder="Telefonnummer" name="phone" onChange={(e) => setPhone(e.target.value)} />
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}