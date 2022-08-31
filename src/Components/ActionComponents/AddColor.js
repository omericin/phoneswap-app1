import React, { useState, useEffect } from "react";
import ImageUploading from 'react-images-uploading';
import axios from "axios";
import { apiColor } from "../../utils/path";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Assets/Css/Form.css';
import '../Assets/Css/Actions.css';
import { FaCheck } from "react-icons/fa";
import Navigation from "../Navigation";

export default function AddColor(props) {

    const [name, setName] = useState();
    const [hexCode, setHexCode] = useState();

    function doSmth() {
        axios.post("http://localhost:5000/color/add", {
            id: hexCode,
            name: name,
            hexCode: hexCode,
        }).then((response) => {
            toast.success('Color Saved Successfully', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        });
    }

    return (
        <><Navigation /><div className="ps-wrapper-form">
            <form>
                <label className="ps-label">
                    <h2>Color Name:</h2>
                    <input className="ps-input" type="text" name="name" onChange={(e) => setName(e.target.value)} />
                </label>
                <label className="ps-label">
                    <h2>HexCode:</h2>
                    <div style={{ display: 'flex', justifyContent: 'space-around', width: '327px' }}><h3>#</h3><input className="ps-input" type="text" name="name" onChange={(e) => setHexCode(e.target.value)} /></div>
                </label>
            </form>
            <div style={{ width: '80%', height: '1px', backgroundColor: '#fff', marginRight: 'auto', marginLeft: 'auto' }}></div>
            <div className="save-div">
                <button className="ps-button" onClick={() => doSmth()}>SAVE</button>
                <a style={{ textDecoration: 'none', color: '#fff' }} href="/backoffice">Go Back</a>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover />


        </div></>
    );


}