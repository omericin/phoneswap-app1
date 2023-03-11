import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Assets/Css/Backoffice.css";

import { useSelector, useDispatch } from 'react-redux';

import {
    setLogin
} from '../Components/Redux/totalAmount';

export default function BackOffice(props) {

    const [user, setUser] = useState();
    const [password, setPassword] = useState();

    const dispatch = useDispatch();

    const loginData = useSelector((state) => state.amountOfPrice.isLoggedIn);

    function doSmth() {
        if (user && user === "ps-admin-faruk") {
            if (password && password === "ps$1289**") {
                dispatch(setLogin());
            }
        }
    };



    let navigate = useNavigate();

    
    if (loginData) {
    return (
        <div className="bo-wrapper">
            <div className="bo-line">
                <div onClick={() => navigate('/backoffice/device/add')} className="bo-category">
                    Add Device
                </div>
                <div onClick={() => navigate('/backoffice/model/add')} className="bo-category">
                    Add Model
                </div>
                <div onClick={() => navigate('/backoffice/color/add')} className="bo-category">
                    Add Color
                </div>
                <div onClick={() => navigate('/backoffice/storage/add')} className="bo-category">
                    Add Storage
                </div>
            </div><div className="bo-line">
                <div onClick={() => navigate('/backoffice/device/update')} className="bo-category">
                    Update Device
                </div>
                <div onClick={() => navigate('/backoffice/storage/update/model')} className="bo-category">
                    Update Model
                </div>
                <div onClick={() => navigate('/backoffice/color/delete')} className="bo-category">
                    Delete Color
                </div>
                <div onClick={() => navigate('/backoffice/storage/delete')} className="bo-category">
                    Delete Storage
                </div>
            </div><div className="bo-line-bottom">
                <div onClick={() => navigate('/backoffice/device/delete')} className="bo-category-little">
                    Delete Device
                </div>
                <div onClick={() => navigate('/backoffice/model/delete')} className="bo-category-little">
                    Delete Model
                </div>
            </div>
        </div>
    );
    } else {
        return(<>
            <div style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'column', margin: 50}}><div>
                <input className="ps-input" type="text" name="name" onChange={(e) => setUser(e.target.value)} />
                <input className="ps-input" type="password" name="pass" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
             <button className="ps-button" onClick={() => doSmth()}>SAVE</button>
            </div></div></>
        );
    }
}