import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import ImageUploading from 'react-images-uploading';
import axios from "axios";
import { apiStorage } from "../../utils/path";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Assets/Css/Form.css';
import '../Assets/Css/Actions.css';
import { MdSdStorage } from "react-icons/md";
import Navigation from "../Navigation"

export default function DeleteStorage(props) {


    let navigate = useNavigate();
    const routeChange = () => {
        let path = '/backoffice';
        navigate('/backoffice');
    }

    const [id, setId] = useState();
    const [list, setList] = useState();

    useEffect (() => {

        axios.get(`${apiStorage}`).then((response) => {
            setList(response.data);
            console.log("list: ", response.data);
        });

    }, []);

    useEffect (() => {

        axios.get(`${apiStorage}`).then((response) => {
            setList(response.data);
            console.log("list: ", response.data);
        });

    }, [id]);

    function doSmth(storageId) {
        console.log("DELEETING: ", storageId);
        axios.delete(`${apiStorage}${storageId}`).then((response) => {
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
            <div className="ps-wrapper-form-list">
                {
                    list ? (
                        <div className="list-item-wrapper">
                            {
                            list?.map((key) => <div className="delete-list-item-line">
                                <div className="delete-form"><MdSdStorage size={30} /> <h3 style={{marginLeft: '20px'}}>{key.size}</h3></div><button style={{height: '30px'}} onClick={()=> doSmth(key.id)}>Delete</button>
                            </div>)
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