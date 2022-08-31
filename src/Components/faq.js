import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Footer from './Footer';
import Header from './Header';
import Nav from './Navigation';
import axios from "axios";
import './Assets/Css/faq.css';


function Faq() {

        useEffect(() => {
            axios.get('http://localhost:8181/v1/').then((response) => {
                console.log(response.data);
            });
    }, []);

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

    const [q1, setQ1] = useState(false);
    const [q2, setQ2] = useState(false);
    const [q3, setQ3] = useState(false);
    const [q4, setQ4] = useState(false);
    const [q5, setQ5] = useState(false);
    const [q6, setQ6] = useState(false);

    return (
        <div>
            <div className='app-container'>
                <Header />
                <Nav screenWidth={screenWidth} />

                <div className='wrapper'>
                    <div className='header'>
                        FAQ
                    </div>
                    <div onClick={() => setQ1(!q1)} className='line-faq'>
                        Hvor hurtig får man pengene udbetalt?
                    </div>
                    {
                        q1 ? (
                            <div  onClick={() => setQ1(!q1)}className='answer'>
                                Du får pengene udbetalt 1-2 via Mobilepay eller bankoverførsel.
                            </div>
                        ) : null
                    }
                    { q1 ? null : (<div className='quote'></div>) }
                    <div onClick={() => setQ2(!q2)} className='line-faq'>
                        Kan man sælge iCloud låste enheder?
                    </div>
                    {
                        q2 ? (
                            <div onClick={() => setQ2(!q2)} className='answer'>
                                Ja det kan man. Men det vil betyde en BETYDELIG reducering af prisen. Man kan stadig godt få penge for låste enheder, men prisen er væsentlig reduceret.
                            </div>
                        ) : null
                    }
                    { q2 ? null : (<div className='quote'></div>) }
                    <div onClick={() => setQ3(!q3)} className='line-faq'>
                        Hvilke enheder kan man sælge til jer?
                    </div>
                    {
                        q3 ? (
                            <div onClick={() => setQ3(!q3)} className='answer'>
                                Vi opkøber iPhone, iPad, Macbook, iMac, AirPods, Samsung, Tablet, Huawei, Nokia, Oneplus, Xiaomi, LG, Playstation, Xbox, Nintendo switch, Bærbar computer mm. Vi opkøber brugte, ødelagte, døde, nye og slidte enheder. Vi opkøber stort set ligegyldig hvad fejlen er på din enhed. Om den ikke kan tænde, telefonen genstarter, tabt i vand, låst til iCloud/Apple id, Face id fejl eller noget helt andet.                            </div>
                        ) : null
                    }
                    { q3 ? null : (<div className='quote'></div>) }
                    <div onClick={() => setQ4(!q4)} className='line-faq'>
                        Ingen problem. Vi matcher altid prisen du har fået oplyst et andet sted.
                    </div>
                    {
                        q4 ? (
                    <div onClick={() => setQ4(!q4)} className='answer'>
                        Ja det kan man. Men det vil betyde en BETYDELIG reducering af prisen. Man kan stadig godt få penge for låste enheder, men prisen er væsentlig reduceret.
                    </div>
                    ) : null
                    }
                    { q4 ? null : (<div className='quote'></div>) }
                                        <div onClick={() => setQ5(!q5)} className='line-faq'>
                                    Jeg har købt min iPhone i et andet land. Kan jeg stadig sælge den til jer?
                </div>
                {
                    q5 ? (
                <div onClick={() => setQ5(!q5)} className='answer'>
                    Ja det kan du. Vi opkøber også din iPhone selvom den er købt i udlandet.
                </div>
                ) : null
                    }
                    { q5 ? null : (<div className='quote'></div>) }
                <div onClick={() => setQ6(!q6)} className='line-faq'>
                    Skal jeg sende kvittering og original kasse på min enhed?
                </div>
                {
                    q6 ? (
                        <div onClick={() => setQ6(!q6)} className='answer'>
                            Det er ikke et must men vi vil helst gerne modtage kvitteringen og den originale kasse til enheden.                            </div>
                    ) : null
                }
                { q6 ? null : (<div className='quote'></div>) }
            </div>
                <div style={{
                    margin: 50
                }}></div>
        </div>
        </div >
    );
}

export default Faq;
