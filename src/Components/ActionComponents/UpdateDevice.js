import React, { useState, useEffect } from "react";
import ImageUploading from 'react-images-uploading';
import axios from "axios";
import { apiAddDevice } from "../../utils/path";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Assets/Css/Form.css';
import '../Assets/Css/Actions.css';
import { FaCheck } from "react-icons/fa";
import { Combobox } from "react-widgets";
import Navigation from "../Navigation"

export default function UpdateDevice(props) {
    

    const [deviceList, setDeviceList] = useState();
    const [deviceName, setDeviceName] = useState();
    const [deviceId, setDeviceId] = useState(null);
    const [device, setDevice] = useState();

    const [images, setImages] = React.useState([]);
    const maxNumber = 1;

    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };

    useEffect(() => {
        axios.get(`${apiAddDevice}`).then((response) => {
            setDeviceList(response.data);
        });
    }, []);

    useEffect(() => {
        if (deviceId !== null) {
            axios.get(`${apiAddDevice}${deviceId.id}`).then((response) => {
                setDevice(response.data);
                setDeviceName(response.data.name);
                const b64 = [
                {
                    base64: response.data.image,
                }
            ];
                setImages(b64[0]);
            });
        }
    }, [deviceId]);

    useEffect(() => {
        console.log("seasea", images[0]?.base64);
    }, [images]);

    function doSmth() {
        axios.put(`${apiAddDevice}`, {
            id: deviceId,
            name: deviceName,
            image: images[0]?.base64,
        }).then((response) => {
            console.log(response);
            toast.success('Device Saved Successfully', {
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
        <Combobox
            defaultValue="Pick Device"
            data={deviceList}
            textField='name'
            onChange={value => setDeviceId(value)}
        />
            <form>
                <label className="ps-label">
                    <h2>Device Name:</h2>
                    <input className="ps-input" placeholder={deviceName} type="text" name="name" onChange={(e) => setDeviceName(e.target.value)} />
                </label>
            </form>
            <div className="App">
                <ImageUploading
                    multiple
                    value={images}
                    onChange={onChange}
                    maxNumber={maxNumber}
                    dataURLKey="base64"
                >
                    {({
                        onImageUpload, isDragging, dragProps, onImageRemoveAll,
                    }) => (<div className="upload__image-wrapper">
                        <button
                            className="ps-button"
                            onClick={onImageUpload}
                            {...dragProps}
                        >
                            Upload Image
                        </button>
                        <button className="ps-button" onClick={onImageRemoveAll}>Remove Image</button>
                        {images[0]?.base64 ? <FaCheck color="green" /> : null}
                    </div>
                    )}
                </ImageUploading>
            </div>
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