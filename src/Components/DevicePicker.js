import React, { useState, useEffect, useRef } from "react";
import "./Assets/Css/DevicePicker.css"
import "./Assets/Css/Modal.css";
import good from "./Assets/Img/g1.png";
import good2 from "./Assets/Img/g2.png";
import bad from "./Assets/Img/b222.png";
import bad2 from "./Assets/Img/b111.png";
import acc1 from "./Assets/Img/acc1.png";
import acc2 from "./Assets/Img/acc2.png";
import acc3 from "./Assets/Img/acc3.png";
import acc4 from "./Assets/Img/acc4.png";
import ip1 from "./Assets/Img/ip1.PNG";
import ip2 from "./Assets/Img/ip2.PNG";
import ip3 from "./Assets/Img/ip3.PNG";
import ip4 from "./Assets/Img/ip4.PNG";
import storageImg from "./Assets/Img/storage.png";
import Card from '../Components/SellOnlineCardReverse';
import ImageCard from '../Components/ImageCard';
import { FaCheck } from "react-icons/fa";
import { FiCheck, FiX } from "react-icons/fi";
import axios from "axios";
import { apiPrice, apiModelListUrl } from "../../src/utils/path";
import ReactModal from "react-modal";
import { useSelector, useDispatch } from 'react-redux';
import {
    incrementByAmount1,
    incrementByAmount2,
    incrementByAmount3,
    incrementByAmount4,
    setPhoneInfo1,
    setPhoneInfo2,
    setPhoneInfo3,
    setPhoneInfo4
} from '../Components/Redux/totalAmount';

export default function DevicePicker(props) {

    const refStorage = useRef(null);
    const refColor = useRef(null);
    const refIntroduction = useRef(null);
    const refStatus = useRef(null);
    const refAcc = useRef(null);
    const refModel = useRef(null);
    const refDevice = useRef(null);
    const refInit = useRef(null);
    const refNext = useRef(null);


    const handleClick = (ref1) => {
        ref1.current?.scrollIntoView({behavior: 'smooth'});
      };

    const count = useSelector((state) => state.amountOfPrice.amountOfPrice);
    const dispatch = useDispatch();

    const [deviceKind, setDeviceKind] = useState(null);
    const [deviceModel, setDeviceModel] = useState(null);
    const [storage, setStorage] = useState(null);
    const [color, setColor] = useState(null);
    const [accountStatus, setAccountStatus] = useState(null);
    const [deviceStatus, setDeviceStatus] = useState(null);
    const [statusInstractions, setStatusInstractions] = useState(null);
    const [InstractionsActive, setInstractionsActive] = useState(false);
    const [isButtonActive, setIsButtonActive] = useState(false);
    const [price, setPrice] = useState(null);
    const [deviceStatusText, setDeviceStatusText] = useState(null);

    const [colorResponse, setColorResponse] = useState();
    const [modelResponse, setModelResponse] = useState();
    const [storageResponse, setStorageResponse] = useState();
    const [getPriceData, setGetPriceData] = useState(false);
    const [modalSection, setModalSection] = useState(1);

    const [showModal, setShowModal] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);

    const customStyles2 = {
        content: {
            background: '#f2f3f4',
        },
        overlay: {
            background: "rgba(0, 0, 0, 0.8)",
            border: '0'
        }
    };

    useEffect(() => {
        clearPrice();
        setGetPriceData(false);
    }, []);

    useEffect(() => {
        console.log("TOTAL PRICE", count);
    }, [totalPrice]);

    useEffect(() => {
        if (deviceKind) {
            axios.post(`${apiModelListUrl}`, {
                deviceId: deviceKind.id
            }).then((response) => {
                setModelResponse(response.data);
            });
        }
    }, [deviceKind]);

    useEffect(() => {
        if (deviceModel) {
            setStorageResponse(deviceModel.storageList);
            setColorResponse(deviceModel.colorList);
        }
    }, [deviceModel]);

    useEffect(() => {
        if (isButtonActive) {
            // console.log("Device - ", deviceKind);
            // console.log("Model - ", deviceModel);
            // console.log("Storage - ", storage);
            // console.log("Color - ", color);
            // console.log("Status - ", deviceStatus);
        }
    }, [isButtonActive]);

    useEffect(() => {
        handleClick(refStorage);
    }, [deviceModel]);

    useEffect(() => {
        handleClick(refModel);
    }, [deviceKind]);

    useEffect(() => {
        handleClick(refIntroduction);
    }, [deviceStatus]);

    useEffect(() => {
        handleClick(refColor);
    }, [storage]);

    useEffect(() => {
        handleClick(refAcc);
    }, [color]);

    useEffect(() => {
        if (statusInstractions !== null) {
            handleClick(refNext);
        }
    }, [statusInstractions]);

    useEffect(() => {
        if (props?.deviceCount === 1) {
            handleClick(refInit);
        }
    }, []);



    function pay() {
        let statusString;
        if (deviceStatus === 4) {
            statusString = "Helt ny";
        }
        if (deviceStatus === 3) {
            statusString = "Pæn og velholdt";
        }
        if (deviceStatus === 2) {
            statusString = "Godt brugt";
        }
        if (deviceStatus === 1) {
            statusString = "Defekt";
        }
        if (props?.deviceCount === 1) {
            dispatch(setPhoneInfo1(`Device Info: ${deviceModel?.name} ${color?.name} | ${storage?.size}-GB STATUS: ${statusString}`));
        } else if (props?.deviceCount === 2) {
            dispatch(setPhoneInfo2(`Device Info: ${deviceModel?.name} ${color?.name} | ${storage?.size}-GB STATUS: ${statusString}`));
        } else if (props?.deviceCount === 3) {
            dispatch(setPhoneInfo3(`Device Info: ${deviceModel?.name} ${color?.name} | ${storage?.size}-GB STATUS: ${statusString}`));
        } else if (props?.deviceCount === 4) {
            dispatch(setPhoneInfo4(`Device Info: ${deviceModel?.name} ${color?.name} | ${storage?.size}-GB STATUS: ${statusString}`));
        }
        axios.post(`${apiPrice}`, {
            size: storage?.size,
            status: deviceStatus,
            brandId: deviceModel?.id
        }).then((response) => {
            setPrice(response.data.price);
            // dispatch(incrementByAmount(parseFloat(response.data.price)));
            if (props?.deviceCount === 1) {
                dispatch(incrementByAmount1(parseFloat(response.data.price)));
            } else if (props?.deviceCount === 2) {
                dispatch(incrementByAmount2(parseFloat(response.data.price)));
            } else if (props?.deviceCount === 3) {
                dispatch(incrementByAmount3(parseFloat(response.data.price)));
            } else if (props?.deviceCount === 4) {
                dispatch(incrementByAmount4(parseFloat(response.data.price)));
            }
            setTotalPrice(response.data.price);
            console.log("RES", response?.data);
        });
        setGetPriceData(true);
    }

    function setDeviceKindData(data) {
        setDeviceKind(data);
    }
    function setDeviceModelData(data) {
        setDeviceModel(data);
    }
    function setStorageData(data) {
        setStorage(data);
    }
    function setColorData(data) {
        setColor(data);
    }

    function clearStatus() {
        setStatusInstractions(null);
        setInstractionsActive(false);
        setDeviceStatus(null);
        clearPrice();
        setGetPriceData(null);
    }

    function clearAll() {
        setDeviceKind(null);
        setDeviceModel(null);
        setColor(null);
        setStorage(null);
        setAccountStatus(null);
        setDeviceStatus(null);
        clearStatus();
    };

    function clearKind() {
        setDeviceKind(null);
        clearModel();
        clearStorage();
        clearColor();
        clearStatus();
    };

    function clearModel() {
        setDeviceModel(null);
        clearStorage();
        clearColor();
        clearStatus();
    };

    function clearStorage() {
        setStorage(null);
        clearColor();
        clearStatus();
    };

    function clearColor() {
        setColor(null);
        setAccountStatus(null);
        clearStatus();
    }
    function setDeviceStatusAndRender(data) {
        if (data === 1) {
            setDeviceStatusText("Defekt");
        }
        if (data === 2) {
            setDeviceStatusText("Godt brugt");
        }
        if (data === 3) {
            setDeviceStatusText("Pæn og velholdt");
        }
        if (data === 4) {
            setDeviceStatusText("Helt ny");
        }
        setDeviceStatus(data);
        setInstractionsActive(true);
        setIsButtonActive(true);
    }



    function setStatusInstractionsAndRender(data) {
        setStatusInstractions(data);
        setInstractionsActive(false);
        setIsButtonActive(false);
        pay();
    }
    function clearPrice() {
        setPrice(null);
    }

    return (<>
        <div className="dp-container" id="start2" ref={refInit}>
            <div className="dp-wrapper" ref={refDevice}>
                <div className="device-count">Enhed #{props.deviceCount} <p><h2 onClick={() => clearAll()}>(Start forfra)</h2></p></div>
                <div className="line">
                    {
                        // THIS PART FOR DEVICE KIND
                        deviceKind?.name ? (
                            <div className="dp-approved-line">
                                <div className={(deviceKind?.name == null ? "approved-l" : "approved-l-p")}><h2>Vælg enhedstype</h2></div>
                                <div className="approved-r">
                                    {deviceKind?.name} <FaCheck />
                                    <h2 onClick={() => clearKind(null)}>Rediger</h2>
                                </div>
                            </div>
                        ) : (<>
                            <div className="section-header">
                                Vælg enhedstype
                            </div>
                            <div className="dp-list">
                                {
                                    props.idData.map(key => (
                                        <div onClick={() => setDeviceKindData(key)}><ImageCard cardHeader={key.name} imageSource={key.image} width='100px' /></div>
                                    ))
                                }</div>
                        </>)
                    }
                    
                </div >

                {
                    // THIS PART FOR DEVICE MODEL
                    !deviceKind ? (null) : (
                        <div className="line" ref={refModel}>
                            {
                                deviceModel ? (
                                    <div className="dp-approved-line">
                                        <div className={(deviceModel.name == null ? "approved-l" : "approved-l-p")}><h2>Vælg Model</h2></div>
                                        <div className="approved-r">
                                            {deviceModel.name} <FaCheck />
                                            <h2 onClick={() => clearModel(null)}>Rediger</h2>
                                        </div>
                                    </div>
                                ) : (
                                    <>                    <div className="section-header" d="device-model-link">
                                        Vælg model
                                    </div>
                                        <div className="dp-list" >
                                            {
                                                modelResponse?.map(key => (
                                                    <div onClick={() => setDeviceModelData(key)}><ImageCard cardHeader={key.name} imageSource={key.image} width='100px' /></div>
                                                ))
                                            }
                                        </div></>)
                            }
                        </div >
                    )
                }

                {
                    // THIS PART FOR DEVICE STORAGE
                    !deviceModel ? (null) : (
                        <div className="line" ref={refStorage}>
                            {
                                storage ? (
                                    <div className="dp-approved-line">
                                        <div className={(storage.size == null ? "approved-l" : "approved-l-p")}><h2>Vælg hukommelse</h2></div>
                                        <div className="approved-r">
                                            {storage.size} <FaCheck />
                                            <h2 onClick={() => clearStorage(null)}>Rediger</h2>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <div className="section-header">
                                            Vælg hukommelse
                                        </div>
                                        <div className="dp-list">
                                            {
                                                storageResponse?.map(key => (
                                                    <div onClick={() => setStorageData(key)}><Card cardHeader={key.size + " GB"} imageSource={storageImg} width='100px' /></div>
                                                ))
                                            }
                                        </div>
                                    </>
                                )
                            }
                        </div >
                    )
                }

                {
                    // THIS PART FOR DEVICE COLOR
                    !storage ? (null) : (
                        <div className="line" ref={refColor}>
                            {
                                color ? (
                                    <div className="dp-approved-line">
                                        <div className={(color.name == null ? "approved-l" : "approved-l-p")}><h2>Vælg farve</h2></div>
                                        <div className="approved-r">
                                            {color.name} <FaCheck />
                                            <h2 onClick={() => clearColor(null)}>Rediger</h2>
                                        </div>
                                    </div>
                                ) : (
                                    <>                    <div className="section-header">
                                        Vælg farve
                                    </div>
                                        <div className="dp-list" id="device-color-link">
                                            {
                                                colorResponse?.map(key => (
                                                    <div onClick={() => setColorData(key)}><ImageCard cardHeader={key.name} hexCode={"#" + key.hexCode} width='100px' /></div>
                                                ))
                                            }
                                        </div></>)
                            }
                        </div >
                    )
                }

                {
                    // THIS PART FOR ACCOUNT
                    !color ? (null) : (
                        <div className="line" ref={refAcc}>
                            {
                                accountStatus ? (
                                    <div className="dp-approved-line">
                                        <div className={(accountStatus == null ? "approved-l" : "approved-l-p")}><h2>Har du fjernet enheden fra din iCloud konto ?</h2></div>
                                        <div className="approved-r">
                                            {accountStatus} <FaCheck />
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <div className="section-header" id="device-acc-link">
                                            Har du fjernet enheden fra din iCloud konto ?
                                        </div>
                                        <div className="dp-list">
                                            <button className="dp-button" onClick={() => setShowModal(true)}>Nej</button>
                                            <button className="dp-button" onClick={() => setShowModal(true)}>Hvad er iCloud?</button>
                                            <button className="dp-button" onClick={() => setAccountStatus("Ja")}>Ja</button>
                                        </div>
                                    </>)
                            }
                        </div >
                    )
                }

                {
                    // THIS PART FOR DEVICE STATUS
                    !accountStatus ? (null) : (
                        <div className="line"  ref={refStatus}>
                            {
                                statusInstractions ? (
                                    <div className="dp-approved-line">
                                        <div className={(statusInstractions == null ? "approved-l" : "approved-l-p")}><h2>Standen på din enhed</h2></div>
                                        <div className="approved-r">
                                            {deviceStatusText} <FaCheck />
                                            <h2 onClick={() => clearStatus(null)}>Rediger</h2>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <div className="section-header">
                                            Standen på din enhed
                                        </div>
                                        <div className="dp-list">
                                            <div className="status-card">
                                                <div onClick={() => setDeviceStatusAndRender(1)} className="status-card-img"><img src={bad} alt="" style={{ width: '100px' }}></img></div>
                                                <div onClick={() => setDeviceStatusAndRender(1)} className="status-card-header">Defekt</div>
                                            </div>                                            <div className="status-card">
                                                <div onClick={() => setDeviceStatusAndRender(2)} className="status-card-img"><img src={bad2} alt="" style={{ width: '100px' }}></img></div>
                                                <div onClick={() => setDeviceStatusAndRender(2)} className="status-card-header">Godt brugt</div>
                                            </div>                                            <div className="status-card">
                                                <div onClick={() => setDeviceStatusAndRender(3)} className="status-card-img"><img src={good} alt="" style={{ width: '100px' }}></img></div>
                                                <div onClick={() => setDeviceStatusAndRender(3)} className="status-card-header">Pæn og velholdt</div>
                                            </div>                                            <div className="status-card">
                                                <div onClick={() => setDeviceStatusAndRender(4)} className="status-card-img"><img src={good2} alt="" style={{ width: '100px' }}></img></div>
                                                <div onClick={() => setDeviceStatusAndRender(4)} className="status-card-header">Helt ny</div>
                                            </div>
                                        </div>
                                    </>)
                            }

                        </div >
                    )
                }

                { // PRICE
                    getPriceData ? (
                        <div className="line">
                            <div className="dp-approved-line">
                                <div className='approved-l-price'><h2>Price</h2>
                                </div><div className='approved-r-price'>
                                    <h2>{price} KR</h2>
                                </div>
                            </div>
                            <div className="line-hr"></div>
                        </div>

                    ) : null
                }

                {
                    // THIS PART FOR INSTRODUCTIONS
                    !InstractionsActive ? (null) : (
                        <div className="line"  ref={refIntroduction}>

                            {
                                deviceStatus === 4 ? (
                                    <>
                                        <div className="status-wrapper">
                                            <div className="status-good">
                                                <h2>Krav til enheden</h2>
                                                <div className="sl"><div className="check-icon"><FiCheck size='20' className="color-good" /></div><div className="text-width"> Enheden skal kunne tænde og man skal kunne komme frem til startsiden.</div></div>
                                                <div className="sl"><div className="check-icon"><FiCheck size='20' className="color-good" /></div><div className="text-width"> Enheden må ikke have iTunes fejl eller andre softwarefejl.</div></div>
                                                <div className="sl"><div className="check-icon"><FiCheck size='20' className="color-good" /></div><div className="text-width"> Enheden skal være ubrugt og således fremstå som en helt ny enhed.</div></div>
                                                <div className="sl"><div className="check-icon"><FiCheck size='20' className="color-good" /></div><div className="text-width"> Alt der fligte med enheden, da den blev købt, skal følge med - heriblandt æske, sim-nål, oplader og høretelefoner.</div></div>
                                                <div className="sl"><div className="check-icon"><FiCheck size='20' className="color-good" /></div><div className="text-width"> Der skal medfølge en købskvittering.</div></div>
                                                <div className="sl"><div className="check-icon"><FiCheck size='20' className="color-good" /></div><div className="text-width"> OBS: Ombytningsenheder fra forsikringsselskaber i forbindelse med en forsikringssag kan ligeledes sælges som helt ny såfremt at kvittering for ombytningen medfølger. I sådanne tilfælde behøver æske, sim-nål og høretelefoner ikke medfølge.</div></div>
                                            </div>
                                            <div className="status-bad">
                                                <h2>Enheden må ikke</h2>
                                                <div className="sl"><div className="check-icon"><FiCheck size='20' className="color-bad" /></div><div className="text-width"> Have brugstegn.</div></div>
                                            </div>
                                        </div>
                                    </>
                                ) : (null)
                            }

                            {
                                deviceStatus === 3 ? (
                                    <>
                                        <div className="status-wrapper">
                                            <div className="status-good">
                                                <h2>Krav til enheden</h2>                                                    <div className="sl"><div className="check-icon"><FiCheck size='20' className="color-good" /></div><div className="text-width">Enheden skal kunne tænde op og man skal kunne komme frem til startsiden.</div></div>
                                                <div className="sl"><div className="check-icon"><FiCheck size='20' className="color-good" /></div><div className="text-width">Enheden må ikke have itunes fejl eller andre softwarefejl.</div></div>
                                                <div className="sl"><div className="check-icon"><FiCheck size='20' className="color-good" /></div><div className="text-width">Enheden må ikke have dybe ridser* eller skader på hverken skærm eller bagcover.</div></div>
                                                <div className="sl"><div className="check-icon"><FiCheck size='20' className="color-good" /></div><div className="text-width">Batteriet skal levere normal maksimal ydeevne.</div></div>
                                                <div className="sl"><div className="check-icon"><FiCheck size='20' className="color-good" /></div><div className="text-width">Alle funktioner i enheden skal virke 100%.</div></div>
                                                <div className="sl"><div className="check-icon"><FiCheck size='20' className="color-good" /></div><div className="text-width">Enheden skal bestå af originale dele eller OEM* dele fra egne leverandører.</div></div>

                                                <div className="sl"><div className="check-icon"><FiCheck size='20' className="color-good" /></div><div className="text-width">*Dybe ridser er ridser der fremstår tydeligt, når man kigger på telefonen samt enhver form for hakker.</div></div>

                                                <div className="sl"><div className="check-icon"><FiCheck size='20' className="color-good" /></div><div className="text-width">*OEM er betegnelsen for dele af original kvalitet.</div></div>
                                            </div>
                                            <div className="status-bad">
                                                <h2>Enheden må ikke</h2>
                                                <div className="sl"><div className="check-icon"><FiCheck size='20' className="color-bad" /></div><div className="text-width"> Enheden må have lommeridser og almindeligt slid.</div></div>
                                            </div>
                                        </div>
                                    </>
                                ) : (null)
                            }

                            {
                                deviceStatus === 2 ? (
                                    <>
                                        <div className="status-wrapper">
                                            <div className="status-good">
                                                <h2>Krav til enheden</h2>
                                                <div className="sl"><div className="check-icon"><FiCheck size='20' className="color-good" /></div><div className="text-width"> Enheden skal kunne tænde og man skal kunne komme frem til startsiden.</div></div>
                                                <div className="sl"><div className="check-icon"><FiCheck size='20' className="color-good" /></div><div className="text-width"> Enheden må ikke have iTunes fejl eller andre softwarefejl.</div></div>
                                                <div className="sl"><div className="check-icon"><FiCheck size='20' className="color-good" /></div><div className="text-width"> Gælder for alle iPhones med touch-ID: homeknappen skal være original, intakt og med en fungerende klikfunktion samt fingeraftrykslæser.</div></div>
                                                <div className="sl"><div className="check-icon"><FiCheck size='20' className="color-good" /></div><div className="text-width"> Gælder for alle iPhones med Face-ID: Dette skal virke.</div></div>
                                                <div className="sl"><div className="check-icon"><FiCheck size='20' className="color-good" /></div><div className="text-width"> Gælder for iPhone 4S: WIFI skal virke. </div></div>
                                            </div>
                                            <div className="status-bad">
                                                <h2>Enheden må ikke</h2>
                                                <div className="sl"><div className="check-icon"><FiCheck size='20' className="color-bad" /></div><div className="text-width"> Ødelagt eller defekt skærm.</div></div>
                                                <div className="sl"><div className="check-icon"><FiCheck size='20' className="color-bad" /></div><div className="text-width"> Ødelagt eller defekt ramme/bagcover..</div></div>
                                                <div className="sl"><div className="check-icon"><FiCheck size='20' className="color-bad" /></div><div className="text-width"> Ødelagt eller defekt vibrator..</div></div>
                                                <div className="sl"><div className="check-icon"><FiCheck size='20' className="color-bad" /></div><div className="text-width"> Ødelagt eller defekt mikrofon..</div></div>
                                                <div className="sl"><div className="check-icon"><FiCheck size='20' className="color-bad" /></div><div className="text-width"> Ødelagt eller defekt højtaler..</div></div>
                                                <div className="sl"><div className="check-icon"><FiCheck size='20' className="color-bad" /></div><div className="text-width"> Ødelagt eller defekt on/off-knap..</div></div>
                                                <div className="sl"><div className="check-icon"><FiCheck size='20' className="color-bad" /></div><div className="text-width"> Ødelagt eller defekt home-knap..</div></div>
                                                <div className="sl"><div className="check-icon"><FiCheck size='20' className="color-bad" /></div><div className="text-width"> Ødelagt eller defekt battteri..</div></div>
                                                <div className="sl"><div className="check-icon"><FiCheck size='20' className="color-bad" /></div><div className="text-width"> Gælder for alle iPhones med touch-ID: hvis homeknappen er i stykker, uoriginal eller på anden måde ikke virker, så vil enheden være i standen "defekt". Det samme gælder, hvis fingeraftrykslæseren ikke virker..</div></div>
                                                <div className="sl"><div className="check-icon"><FiCheck size='20' className="color-bad" /></div><div className="text-width"> Gælder for alle iPhones med Face-ID: hvis Face-ID ikke virker, vil enheden være i standen defekt..</div></div>
                                                <div className="sl"><div className="check-icon"><FiCheck size='20' className="color-bad" /></div><div className="text-width"> Gælder for iPhone 7: hvis der er problemer med lyden og dette skyldes en defekt audio IC chip, så vil enheden være i standen "defekt"..</div></div>
                                            </div>
                                        </div>
                                    </>
                                ) : (null)
                            }

                            {
                                deviceStatus === 1 ? (
                                    <>
                                        <div className="status-wrapper">
                                            <div className="status-good">
                                                <h2>Krav til enheden</h2>
                                                <div className="sl"><div className="check-icon"><FiCheck size='20' className="color-good" /></div><div className="text-width">Bundkort og resten af enheden hænger sammen i ét stykke.</div></div>

                                            </div>
                                            <div className="status-bad">
                                                <h2>Enheden må ikke</h2>
                                                <div className="sl"><div className="check-icon"><FiCheck size='20' className="color-bad" /></div><div className="text-width">Enheden kan ikke tænde eller tage imod strømkabel.</div></div>
                                                <div className="sl"><div className="check-icon"><FiCheck size='20' className="color-bad" /></div><div className="text-width">Enheden viser intet skærmbillede.</div></div>
                                                <div className="sl"><div className="check-icon"><FiCheck size='20' className="color-bad" /></div><div className="text-width">Enheden kan ikke starte op (kommer ikke videre end opstarts flow).</div></div>
                                                <div className="sl"><div className="check-icon"><FiCheck size='20' className="color-bad" /></div><div className="text-width">Enheden har fejl på bundkortet.</div></div>
                                                <div className="sl"><div className="check-icon"><FiCheck size='20' className="color-bad" /></div><div className="text-width">Enheden er væskeskadet.</div></div>
                                                <div className="sl"><div className="check-icon"><FiCheck size='20' className="color-bad" /></div><div className="text-width">Gælder for alle iPhones med touch-ID: hvis homeknappen er i stykker, uoriginal eller på anden måde ikke virker, så vil enheden være i standen "defekt". Det samme gælder, hvis fingeraftrykslæseren ikke virker.</div></div>
                                                <div className="sl"><div className="check-icon"><FiCheck size='20' className="color-bad" /></div><div className="text-width">Gælder for alle iPhones med Face-ID: hvis Face-ID ikke virker, vil enheden være i standen defekt.</div></div>
                                                <div className="sl"><div className="check-icon"><FiCheck size='20' className="color-bad" /></div><div className="text-width">Gælder for iPhone 4S: hvis WIFI ikke virker, vil enheden være i standen "defekt".</div></div>
                                                <div className="sl"><div className="check-icon"><FiCheck size='20' className="color-bad" /></div><div className="text-width">Gælder for iPhone 7: hvis der er problemer med lyden og dette skyldes en defekt audio IC chip, så vil enheden være i standen "defekt".</div></div>
                                            </div>
                                        </div>
                                    </>
                                ) : (null)
                            }


                        </div>
                    )
                }
                {
                    isButtonActive ? (
                        <button onClick={() => setStatusInstractionsAndRender(true)} className="approval-button">Overstående er korrekt</button>
                    ) : null
                }<div  ref={refNext}></div>
                <ReactModal isOpen={showModal} contentLabel="PhoneSwap" style={customStyles2} >
                    <div className="modal-wrapper">
                        <div className="button-close-wrapper">
                            <button className="modal-wrapper-close" onClick={() => setShowModal(false)}><FiX></FiX></button>
                        </div>
                        <div className="modal-button-wrapper2">
                            <button className="modal-wrapper-pc-button" onClick={() => setModalSection(1)}>Fra Computeren</button>
                            <button className="modal-wrapper-pc-button" onClick={() => setModalSection(2)}>Fra Telefonen</button>
                        </div>

                        {
                            modalSection === 1 ? (
                                <><div className="modal-content-section">
                                    <img src={acc1} alt="" width="400px" height="auto"></img>
                                    <img src={acc2} alt="" width="400px" height="auto"></img>
                                    <img src={acc4} alt="" width="400px" height="auto"></img>
                                    <img src={acc3} alt="" width="400px" height="auto"></img>
                                </div></>
                            ) : (
                                <><div className="modal-content-section">
                                    <img src={ip1} alt="" width="170px"></img>
                                    <img src={ip2} alt="" width="170px"></img>
                                    <img src={ip3} alt="" width="170px"></img>
                                    <img src={ip4} alt="" width="170px"></img>
                                </div></>
                            )
                        }
                    </div>
                </ReactModal></div>
        </div>
    </>
    );
}
