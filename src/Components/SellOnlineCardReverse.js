import React from "react";
import "./Assets/Css/SellOnlineCard.css";

export default function Card(props) {
    return (
        <div className="card-container-reverse">

            <div className="card-image">
                <img src={props.imageSource} alt="" width={props.width}/>
            </div>
            <div className="header-wrapper">
                <div className="card-header">
                    {props.cardHeader}
                </div>
            </div>
        </div>
    );
}