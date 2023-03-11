import { useEffect, useState, useRef } from 'react';
import Footer from './Footer';
import Header from './Header';
import Nav from './Navigation';
import './Assets/Css/StaticPage.css';


function Faq() {

    const ref = useRef(null);

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
        function handleWindowResize() {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    }, []);

    return (<>
        <div>
                <Header />
                <Nav screenWidth={screenWidth} />
            <div className='lisence-container' ref={ref}>


                <div className='lisence-header'>
                Handelsbetingelser
                </div>
                <div className='lisence-content'>
                <h3>Priser</h3>
              <div className="lisence-modal">Alle de angivne priser kan variere fra dag til dag. Der tages forbehold for tastefejl ved de angivende priser.</div>
              <h3>Salg</h3>
              <div className="lisence-modal">Phoneswap kan til enhver tid ændre prisen på den fremsendte enhed. Lever enheden ikke op til hvad kunden har beskrevet, kan det have en betydning af vurderingen af enheden. Phoneswap tester altid enheder før den endelige vurdering af prisen.</div>
              <h3>Lager</h3>
              <div className="lisence-modal">Phoneswap kan til enhver tid afslå at modtage en enhed. Hvis der haves for mange af den samme type enhed på lager, kan Phoneswap altid afslå enheden.</div>
              <h3>Modtagelse af enhed</h3>
              <div className="lisence-modal">Phoneswap kan til enhver tid ændre på tilbudsprisen hvis ikke den registrerede enhed bliver modtaget indenfor 10 dage.</div>
              <h3>Betaling</h3>
              <div className="lisence-modal">Når enheden bliver modtaget hos Phoneswap, bliver den testet for fejl og mangler. Udbetaling sker typisk samme dag, men der kan i sjældne tilfælde være situationer hvor der kræves 1-2 dage ekstra behandlingstid.</div>
              <h3>iCloud/Google låste enheder</h3>
              <div className="lisence-modal">Når en enhed bliver modtaget, skal den være logget ud af iCloud/Google. Hvis enheden er låst og kunden ikke kan huske koden for at fjerne låsen, bliver produktet afvist. Kunden har her 10 dage til at få fjernet låsen på enheden. Hvis denne ikke er fjernet, og kunden ønsker enheden tilbage, skal kunden selv stå for fragtomkostninger. Dette kan gøres via Mobilepay.</div>
                </div>


            </div>
        </div >
        <Footer></Footer>
    </>
    );
}

export default Faq;
