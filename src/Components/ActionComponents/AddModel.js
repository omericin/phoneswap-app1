import React, { useState, useEffect } from "react";
import ImageUploading from 'react-images-uploading';
import axios from "axios";
import { apiColor, apiModel, apiStorage, apiAddDevice, apiPriceAdd } from "../../utils/path";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Assets/Css/Form.css';
import '../Assets/Css/Actions.css';
import { FaCheck, FaRavelry } from "react-icons/fa";
import Navigation from "../Navigation"
import { Combobox } from "react-widgets";
import "react-widgets/styles.css";

export default function AddModel(props) {

    const [brandId, setBrandId] = useState(null);
    const [deviceId, setDeviceId] = useState();
    const [modelName, setModelName] = useState();
    const [colorList, setColorList] = useState();
    const [storageList, setStorageList] = useState();
    const [deviceList, setDeviceList] = useState();
    const [getColorList, setGetColorList] = useState();
    const [getSizeList, setGetSizeList] = useState();
    const [isColorSelected, setIsColorSelected] = useState(false);
    const [array, setArray] = useState([]);
    const [sizeArray, setSizeArray] = useState([]);
    const [priceSectionActive, setPriceSectionActive] = useState(false);
    const [price, setPrice] = useState();

    const [images, setImages] = React.useState([]);
    const maxNumber = 1;

    const onChange = (imageList, addUpdateIndex) => {
        setImages(imageList);
    };
    console.log("BRAND ID", brandId);


    useEffect(() => {
        axios.get(`${apiColor}`).then((response) => {
            setGetColorList(response.data);
        });
        axios.get(`${apiStorage}`).then((response) => {
            setGetSizeList(response.data);
        });
        axios.get(`${apiAddDevice}`).then((response) => {
            setDeviceList(response.data);
        });
    }, []);

    function makeColorArray(hexCode, name) {
        let data = {
            name: name,
            hexCode: hexCode
        };
        if (array.some(data => data.name === name)) {
            let arr = array.filter((item) => item.name !== name);
            setArray(arr);
        } else {
            let temp = [];
            temp = array;
            temp.push(data);
            setArray(temp);
        }

    }

    function makeSizeArray(size) {
        let data = {
            size: size
        };
        if (sizeArray.some(data => data.size === size)) {
            let arr = sizeArray.filter((item) => item.size !== size);
            setSizeArray(arr);
        } else {
            let temp = [];
            temp = sizeArray;
            temp.push(data);
            setSizeArray(temp);
        }

    }

    function savePriceToDb(size, status) {
        if (brandId) {
            console.log("price add", size);
            axios.post(`${apiPriceAdd}`, {
                brandId: brandId,
                size: size,
                status: status,
                price: price,
            }).then((response) => {
                toast.success(`price saved id: ${brandId}`, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            });
        }
    }

    function doSmth() {
        setPriceSectionActive(true);
        // console.log("name", modelName);
        // console.log("device", deviceId.id);
        // console.log("color", array);
        // console.log("size", sizeArray);
        // console.log("image", images[0]?.base64);
        if(brandId === null) {
            axios.post(`${apiModel}`, {
                deviceId: deviceId.id,
                name: modelName,
                colorList: array,
                storageList: sizeArray,
                image: images[0]?.base64,
            }).then((response) => {
                setBrandId(response.data.id);
                toast.success('Model Saved Successfully, Add Prices please.', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            });
        }
    }

    let widget = (
        <Combobox
            defaultValue="Pick Device"
            data={deviceList}
            textField='name'
            onChange={value => setDeviceId(value)}
        />
    );

    return (
        <>
            <Navigation />
            <div className="ps-wrapper-form-model">
                <div className="delete-form-first">
                    <div className="delete-form">{widget}</div>
                    <div style={{ fontSize: '20px', fontWeight: '700' }}>
                        Name:  <input className="ps-input" type="text" name="name" onChange={(e) => setModelName(e.target.value)} />
                    </div>
                </div>
                <div className="delete-form-second">
                <div><h2>Color List</h2>
                        {
                            getColorList?.map((key) => <div style={{fontSize: '20px'}}><input type="checkbox" onChange={() => makeColorArray(key.hexCode, key.name)}></input>{key.name}</div>)
                        }
                    </div>
                    <div>
                    <h2>Storage List</h2>
                        {
                            getSizeList?.map((key) => <div style={{fontSize: '20px'}}><input type="checkbox" onChange={() => makeSizeArray(key.size)}></input>{key.size}</div>)
                        }
                    </div>
                </div>
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
                        {images[0]?.base64 ? <FaCheck color="#00ff00" /> : null}
                    </div>
                    )}
                </ImageUploading>
                <div>
                    <button className="ps-button" onClick={() => doSmth()}>Next</button>
                </div>
                <div>
                    {
                        priceSectionActive  ? (
                            <div>
                                {
                                    sizeArray.map(
                                        key =>
                                            <>
                                                <div style={{textDecoration: 'underline'}}><h2> {key.size} GB </h2></div>
                                                <div className="add-price-status-line">
                                                    <div style={{color: '#00ff00'}} className="status-name">Status Healty</div>
                                                    <div><input className="ps-input-price" type="text" onChange={(e) => setPrice(e.target.value)}></input> KR</div>
                                                    <div><button className="ps-button" onClick={() => savePriceToDb(key.size, 4)}>Save</button></div>
                                                </div>
                                                <div className="add-price-status-line">
                                                    <div style={{color: '#fafc00'}} className="status-name">Status Good</div>
                                                    <div><input className="ps-input-price" type="text" onChange={(e) => setPrice(e.target.value)}></input> KR</div>
                                                    <div><button className="ps-button" onClick={() => savePriceToDb(key.size, 3)}>Save</button></div>
                                                </div>
                                                <div className="add-price-status-line">
                                                    <div style={{color: '#fa6800'}} className="status-name">Status Poor</div>
                                                    <div><input className="ps-input-price" type="text" onChange={(e) => setPrice(e.target.value)}></input> KR</div>
                                                    <div><button className="ps-button" onClick={() => savePriceToDb(key.size, 2)}>Save</button></div>
                                                </div>
                                                <div className="add-price-status-line">
                                                    <div style={{color: '#ff0000'}} className="status-name">Status Bad</div>
                                                    <div><input className="ps-input-price" type="text"onChange={(e) => setPrice(e.target.value)}></input> KR</div>
                                                    <div><button className="ps-button" onClick={() => savePriceToDb(key.size, 1)}>Save</button></div>
                                                </div>
                                            </>
                                    )
                                }
                            </div>
                        ) : null
                    }
                </div>
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
        </>
    );


}