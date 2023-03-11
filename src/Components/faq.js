import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Footer from './Footer';
import Header from './Header';
import Nav from './Navigation';
import axios from "axios";
import './Assets/Css/faq.css';


function Faq() {

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
    const [q7, setQ7] = useState(false);
    const [q8, setQ8] = useState(false);
    const [q9, setQ9] = useState(false);

    return (<>
        <div>
            <div className='app-container'>
                <Header />
                <Nav screenWidth={screenWidth} />

                <div className='wrapper'>
                    <div className='header'>
                        FAQ
                    </div>


                    <div onClick={() => setQ7(!q7)} className='line-faq'>
                    Hvad sker der med de opkøbte enheder?
                    </div>
                    {
                        q7 ? (
                            <div  onClick={() => setQ1(!q7)}className='answer'>
                                Når vi modtager din enhed, bliver den testet for fejl og mangler. Herefter bliver den slettet så dine data ikke kommer i de forkerte hænder. Vi bruger specielt værktøj/software der gør at man ikke kan genskabe dine data uanset hvad man gør. Dine enheder bliver slettet op til flere gange, så de ikke kan findes frem igen.Når dine data er blevet slettet, bliver din enhed sat i stand og bliver solgt videre til en anden glad bruger.
                            </div>
                        ) : null
                    }
                    { q7 ? null : (<div className='quote'></div>) }



                    <div onClick={() => setQ8(!q8)} className='line-faq'>
                    Kan man fortryde handlen inden man modtager pengene og få sine enheder tilbage?
                    </div>
                    {
                        q8 ? (
                            <div  onClick={() => setQ1(!q8)}className='answer'>
                                Ja. Du kan altid fortryde handlen inden vi udbetaler pengene til dig. Det kræver dog at vi ikke har skilt telefonen ad. Hvis vi har skilt det fra hinanden, kan man ikke længere fortryde da vi bruger flere timer på at finde fejl og teste enhederne før vi giver dig en endelig pris.
                            </div>
                        ) : null
                    }
                    { q8 ? null : (<div className='quote'></div>) }


                    <div onClick={() => setQ9(!q9)} className='line-faq'>
                    Kan man selv indlevere enhederne eller skal de sendes?
                    </div>
                    {
                        q9 ? (
                            <div  onClick={() => setQ1(!q9)}className='answer'>
                                Du kan både sende eller selv komme ind med dine enheder til os.
                            </div>
                        ) : null
                    }
                    { q9 ? null : (<div className='quote'></div>) }



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
                    Jeg har set at prisen er bedre et andet sted, hvorfor skulle jeg sælge til jer?
                    </div>
                    {
                        q4 ? (
                    <div onClick={() => setQ4(!q4)} className='answer'>
                        Ingen problem. Vi matcher altid prisen du har fået oplyst et andet sted.
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
        <Footer></Footer>
        </>
    );
}

export default Faq;
