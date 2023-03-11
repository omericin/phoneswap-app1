import React, { useState, useEffect } from "react";
import ImageUploading from 'react-images-uploading';
import axios from "axios";
import { apiColor, apiModel, apiStorage, apiAddDevice, apiPrice, apiPriceUpdate } from "../../utils/path";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Assets/Css/Form.css';
import '../Assets/Css/Actions.css';
import { FaCheck, FaRavelry } from "react-icons/fa";
import Navigation from "../Navigation"
import { Combobox } from "react-widgets";
import "react-widgets/styles.css";

export default function UpdateModel(props) {

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
    const [modelList, setModelList] = useState();
    const [modelId, setModelId] = useState();
    const [valval, setvalval] = useState();
    const [oldPrice, setOldPrice] = useState();
    const [newSize, setNewSize] = useState();
    const [newStore, setNewStore] = useState();

    const [images, setImages] = React.useState([]);
    const maxNumber = 1;

    const onChange = (imageList, addUpdateIndex) => {
        setImages(imageList);
    };


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

    useEffect(() => {
        axios.get(`${apiModel}`).then((response) => {
            setModelList(response.data);
        });
    }, [deviceId]);

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
    console.log(valval?.id);

    useEffect(() => {
        if(oldPrice) {
            axios.put(`${apiPriceUpdate}`, {
                id: oldPrice?.id,
                price: price,
                brandId: valval.id,
                size: newSize,
                status: newStore

            }).then((respose) => {
                console.log(respose.data);
            });
        }
    }, [oldPrice]);

    function savePriceToDb(size, status) {
        if (valval) {
            setNewSize(size);
            setNewStore(status);
            axios.post(`${apiPrice}`, {
                brandId: valval.id,
                size: size,
                status: status
            }).then((response) => {
                setOldPrice(response.data);
            });



            // axios.post(`${apiPriceAdd}`, {
            //     id: modelId,
            //     brandId: brandId,
            //     size: size,
            //     status: status,
            //     price: price,
            //     image: valval.image
            // }).then((response) => {
            //     toast.success(`price saved id: ${brandId}`, {
            //         position: "top-center",
            //         autoClose: 5000,
            //         hideProgressBar: false,
            //         closeOnClick: true,
            //         pauseOnHover: true,
            //         draggable: true,
            //     });
            // });
        }
    }

    function doSmth() {
        setPriceSectionActive(true);
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
            onChange={value => setDeviceId(value.id)}
        />
    );
    let widgetModel = (
        <Combobox
            defaultValue="Pick Model"
            data={modelList}
            textField='name'
            onChange={value => setvalval(value)}
        />
    );

    return (
        <>
            <Navigation />
            <div className="ps-wrapper-form-model">
                <div className="delete-form-first">
                    <div className="delete-form">{widget}</div>
                    <div style={{ fontSize: '20px', fontWeight: '700' }}>
                        {!!modelList ? (widgetModel) : (null)}
                    </div>
                </div>
                <div className="delete-form-second">
                </div>
                <div>
                    {
                        modelList ? (
                            <div>
                                {
                                    valval?.storageList?.map(
                                        key =>
                                            <>
                                                <div style={{textDecoration: 'underline'}}><h2> {key.size} GB </h2></div>
                                                <div className="add-price-status-line">
                                                    <div style={{color: '#00ff00'}} className="status-name">Status Healty</div>
                                                    <div><input className="ps-input-price" type="text" onChange={(e) => setPrice(e.target.value)}></input> KR</div>
                                                    <div><button className="ps-button" onClick={() => savePriceToDb(key.size, 4)}>SS</button></div>
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