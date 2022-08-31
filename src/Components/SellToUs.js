import React from "react";
import './Assets/Css/SellToUs.css';
import form from "./Assets/Img/form2.png";
import pack from "./Assets/Img/pack.png";
import payment from "./Assets/Img/payment.png";
import saelg from "./Assets/Img/seay.png";
import Card from '../Components/SellOnlineCard';
import office from "./Assets/Img/office.jpeg";
import { FaCheck } from "react-icons/fa";

function SellToUs() {
    return (
        <div className="sell-container">
            <div className="top-section-wrapper">
            <div className="top-section">
                <div className="sell-content">
                    <h3>Sælg din enhed til os</h3>
                    <p style={{ lineHeight: 2 }}>
                    Sælg din enhed til os sikkert og nemt. Du kan vælge at sende os flere enheder ad gangen, og dermed få flere penge udbetalt. Vi udbetaler pengene via Mobilepay eller kontooverførsel indenfor 1-2 dage.Husk at det altid er sikkert at sende til os, da vi altid sletter ALT dine data så de ikke ender i de forkerte hænder - det garanterer vi dig.                    </p>
                </div>
                <div className="sell-online">
                    {/* <Card cardHeader="Udfyld salgsformular" imageSource={form} width="42px" />
                    <Card cardHeader="Send din enhed" imageSource={pack} width="50px" />
                    <Card cardHeader="Vi undersøger og betaler via bankoverførsel" imageSource={payment} width="36px" /> */}
                    <img src={saelg} alt="saelg" width="300"></img>
                </div>
            </div>
            </div>
            <div className="store-container">
                <h3 style={{alignSelf: "flex-start", paddingLeft: "5%", paddingTop: 40  }}>Sælg din iPhone eller anden enhed til Phoneswap </h3>
                    <p style={{ lineHeight: 2, margin: "5%", marginTop: 0 }}> Har du nogle enheder liggende i skuffen? Det kan være en iPhone, iPad, iMac, Samsung, Huawei, Nokia, Apple watch, Macbook, Playstation eller andre spillekonsoler. Vi opkøber uanset stand og giver altid mere end hvad andre konkurrenter tilbyder. Gå ind og opret din enhed, og se hvormeget den er værd. Vores prisberegner giver dig en ca pris for dine enheder og du får pengene sendt via mobilepay eller kontonummer i løbet af 1-2 dage efter modtagelse. Hvis du fortryder og ikke vil sælge din enhed alligevel, sender vi dine enheder retur uden beregning.Når du sælger dine enheder privat, opstår der problemer under handlen for det meste. Det kan være køberen aldrig dukker op, vil længere ned i pris, klager over fejl på enheden som du ikke selv vidste eller noget helt fjerde. Disse problemer undgår du ved at sælge til os. Vi tjekker dine enheder indenfor 24 timer og sender dig en mail/sms med prisen vi vil udbetale til dig. Hvis du accepterer, sender vi dig dine penge indenfor 1-2 dage eller sender dine enheder tilbage i tilfælde af at du fortryder og vil annullere handlen.</p>
            </div>
        </div>
    );
}

export default SellToUs