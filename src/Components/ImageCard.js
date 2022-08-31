import React from "react";
import "./Assets/Css/SellOnlineCard.css";

export default function ImageCard(props) {
    if (props.imageSource)  {
        return (
            <div className="card-container-reverse">
    
                <div>
                    <img src={props.imageSource} alt="img" width="auto" height="200px"></img>
                </div>
                <div className="header-wrapper">
                    <div className="card-header">
                        {props.cardHeader}
                    </div>
                </div>
            </div>
        );
    }
    if (props.hexCode) {
        return (
            <div className="card-container-reverse">
    
                <div style={{ backgroundColor: `${props.hexCode}`, height: '100px', width: '100px', borderRadius: '50px' }}>
                    
                </div>
                <div className="header-wrapper">
                    <div className="card-header">
                        {props.cardHeader}
                    </div>
                </div>
            </div>
        );
    }
}