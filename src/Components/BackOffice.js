import React, { useState, useEffect } from "react";
import AddDevice from "./ActionComponents/AddDevice";
import { useNavigate } from "react-router-dom";

import "./Assets/Css/Backoffice.css";

export default function BackOffice(props) {

    const [isMenuActive, setIsMenuActive] = useState(true);
    const [actionType, setActionType] = useState(null);

    let navigate = useNavigate();
    const routeChange = () => {
        let path = '/backoffice/device/add';
        navigate('/backoffice/device/add');
    }

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
                <div onClick={() => setActionType("uDevice")} className="bo-category">
                    Update Device
                </div>
                <div onClick={() => setActionType("uModel")} className="bo-category">
                    Update Model
                </div>
                <div onClick={() => navigate('/backoffice/color/delete')} className="bo-category">
                    Delete Color
                </div>
                <div onClick={() => navigate('/backoffice/storage/delete')} className="bo-category">
                    Delete Storage
                </div>
            </div><div className="bo-line-bottom">
                <div onClick={() => setActionType("delDevice")} className="bo-category-little">
                    Delete Device
                </div>
                <div onClick={() => setActionType("delModel")} className="bo-category-little">
                    Delete Model
                </div>
            </div>
        </div>
    );
}