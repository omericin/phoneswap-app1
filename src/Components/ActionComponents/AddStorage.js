import React, { useState, useEffect } from "react";
import ImageUploading from 'react-images-uploading';
import axios from "axios";
import { apiStorage } from "../../utils/path";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Assets/Css/Form.css';
import '../Assets/Css/Actions.css';
import { FaCheck } from "react-icons/fa";
import Navigation from "../Navigation"

export default function AddStorage(props) {

    const [size, setSize] = useState();

    function doSmth() {
        axios.post(`${apiStorage}`, {
            size: size,
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
                    <h2>Size:</h2>
                    <input className="ps-input" type="text" name="name" onChange={(e) => setSize(e.target.value)} />
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