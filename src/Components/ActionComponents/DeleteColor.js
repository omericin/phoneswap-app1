import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ImageUploading from 'react-images-uploading';
import axios from "axios";
import { apiColor } from "../../utils/path";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Assets/Css/Form.css';
import '../Assets/Css/Actions.css';
import { FaCheck } from "react-icons/fa";
import Navigation from "../Navigation"

export default function DeleteColor(props) {

    let navigate = useNavigate();
    const routeChange = () => {
        let path = '/backoffice';
        navigate('/backoffice');
    }

    const [id, setId] = useState();
    const [list, setList] = useState();

    useEffect (() => {

        axios.get("http://localhost:5000/color").then((response) => {
            setList(response.data);
            console.log("list: ", response.data);
        });

    }, []);

    useEffect (() => {

        axios.get(`${apiColor}`).then((response) => {
            setList(response.data);
            console.log("list: ", response.data);
        });

    }, [id]);

    function doSmth(colorId) {
        console.log("DELEETING: ", colorId);
        axios.delete(`${apiColor}${colorId}`).then((response) => {
            setId(response);
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
        <>
            <Navigation />
            <div className="ps-wrapper-form">
                {
                    list ? (
                        <div className="list-item-wrapper">
                            {
                            list?.map((key) => <div className="list-item-line">
                                <div style={{ backgroundColor: `#${key.hexCode}` }} className="list-item-color-avatar"></div><div className="list-item-id">{key.name}</div><button onClick={()=> doSmth(key.id)}>Delete</button>
                            </div>
                            )
                        }
                            </div>
                    ) : null
                }
                            <div className="save-div">
                <button className="ps-button" onClick={() => navigate('/backoffice')}>Go Back</button>
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
            </div>
        </>
    );


}