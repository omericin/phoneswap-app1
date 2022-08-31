import React, { useState, useEffect } from "react";
import "./Assets/Css/Backoffice.css";


function BackOfficeScreen(props) {

    console.log("sea", props);
    console.log("ase", props.action);

    if(props.action) {
        return (
            <div>{props.action}</div>
        )
    }

}


export default BackOfficeScreen;