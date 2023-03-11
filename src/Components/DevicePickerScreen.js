import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import DevicePicker from "./DevicePicker";
import Header from "./Header";
import Nav from "./Navigation";
import Footer from "./Footer";
import axios from "axios";
import { apiPhoneIdListUrl } from "../../src/utils/path";
import { ToastContainer, toast } from 'react-toastify';
import { FiX } from "react-icons/fi";
import ReactModal from 'react-modal';
import './Assets/Css/Modal.css';
import './Assets/Css/DevicePicker.css';
import { send } from 'emailjs-com';
import spinnerimg from './Assets/Img/spinner.svg';

import { useSelector, useDispatch } from 'react-redux';

import {
  incrementByAmount1,
  incrementByAmount2,
  incrementByAmount3,
  incrementByAmount4,
} from '../Components/Redux/totalAmount';



function DevicePickerScreen() {

  const dispatch = useDispatch();

  const reducer1 = useSelector((state) => state.amountOfPrice.phoneReducer1);
  const reducer2 = useSelector((state) => state.amountOfPrice.phoneReducer2);
  const reducer3 = useSelector((state) => state.amountOfPrice.phoneReducer3);
  const reducer4 = useSelector((state) => state.amountOfPrice.phoneReducer4);
  const deviceInfo1 = useSelector((state) => state.amountOfPrice.phoneInfo1);
  const deviceInfo2 = useSelector((state) => state.amountOfPrice.phoneInfo2);
  const deviceInfo3 = useSelector((state) => state.amountOfPrice.phoneInfo3);
  const deviceInfo4 = useSelector((state) => state.amountOfPrice.phoneInfo4);
  const totalAmount = reducer1 + reducer2 + reducer3 + reducer4;

  const location = useLocation();
  const [id, setId] = useState();

  const [idData, setIdData] = useState();

  const [addressModal, setAddressModal] = useState(false);

  const [formName, setFormName] = useState(null);
  const [formSurname, setFormSurname] = useState(null);
  const [formNumber, setFormNumber] = useState(null);
  const [formEmail, setFormEmail] = useState(null);
  const [accountNumber, setformAccountNumber] = useState(null);
  const [rn, setRn] = useState(null);
  const [addressType, setAddressType] = useState("Send pakkelabel via. mail");
  const [checkBoxLisance, setCheckBoxLisance] = useState(false);
  const [radioButtonStatus, setRadioButtonStatus] = useState(true);
  const [mailError, setMailError] = useState(false);
  const [spinner, setSpinner] = useState(false);

  let navigate = useNavigate();
  const routeChange = () => {
    let path = '/mailapprove';
    navigate(path);
  }

  function readyMail() {
    if (formName && formSurname && formNumber && formEmail && rn && accountNumber && addressType && checkBoxLisance) {
      setSpinner(true);
      const mB = {
        "ps_mail_price": totalAmount,
        "ps_mail_firstname": formName,
        "ps_mail_lastname": formSurname,
        "ps_mail_phone": formNumber,
        "ps_mail_email": formEmail,
        "ps_mail_regnr": rn,
        "ps_mail_konto": accountNumber,
        "ps_mail_ptype": addressType,
        "ps_mail_dinfo1": deviceInfo1,
        "ps_mail_dinfo2": deviceInfo2,
        "ps_mail_dinfo3": deviceInfo3,
        "ps_mail_dinfo4": deviceInfo4
      }
      send(
        'service_qxg2mjr',
        'template_bfxba9l',
        mB,
        'GGxlhbrkt4ZtfEtre'
      ).then((response) => {
        //   toast.success('E-mail sendt succesfuldt', {
        //     position: "top-center",
        //     autoClose: 5000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        // });
        routeChange();
      })
        .catch((err) => {
          toast.error('E-mail kunne ikke sendes', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        });;
    } else {
      setMailError(true);
    }
  }

  const goLisence = () => { 
    window.open('http://phoneswap.online/lisence', '_blank'); 
  }

  function setRadioStatusRemote() {
    setRadioButtonStatus(true);
    setAddressType("Send pakkelabel via. mail");
  }

  function setRadioStatusDelivery() {
    setRadioButtonStatus(false);
    setAddressType("Aflevér i butik");
    setAddressModal(true);
  }

  useEffect(() => {
    dispatch(incrementByAmount1(parseFloat(0)));
    dispatch(incrementByAmount2(parseFloat(0)));
    dispatch(incrementByAmount3(parseFloat(0)));
    dispatch(incrementByAmount4(parseFloat(0)));

    axios.get(apiPhoneIdListUrl).then((response) => {
      setIdData(response.data);
    });

  }, []);


  useEffect(() => {
    setId(location.state.id);
  }, []);


  const customStyles1 = {
    content: {
      top: '20%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      background: '#f2f3f4',
    },
    overlay: {
      background: "rgba(0, 0, 0, 0.8)",
      border: '0'
    }
  };

  if (idData) {
    return (
      <>
        <Header />
        <Nav screenWidth={location.state.screenWidth} />
        <div>
          {[...Array(location.state.id)].map((e, i) => <DevicePicker totalDevice={location?.state.id} deviceCount={i + 1} devId={id} idData={idData} />)}
        </div>
        <div className="dp-total-price">
          <div className="price-section-header"><h2>Total Pris</h2></div>
          <div className="price-section-content-wrapper">
            <div className="price-section-content"><h2>Udbetaling</h2></div>
            <div className="price-section-content"><div className="content-p">Få pengene overført til <br /> din bankkonto</div></div>
            <div className="price-section-content"><div className="content-p-price">{totalAmount} KR</div></div>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '100px' }}>
          <div className="form-container">
            <div className="form-section-header" ><h2>Dine informationer</h2></div>
            <div className="dp-form">
              <div className="form-l">
                <div className="borderr">
                  <div className="input-wrapper">
                    <div className="borderrr">
                      <div className="input-header">Fornavn</div>
                      <div>
                        <input className="form-input" type="text" name="name" onChange={(e) => setFormName(e.target.value)} />
                      </div>
                    </div>
                  </div>
                  <div className="input-wrapper">
                    <div className="borderrr">
                      <div className="input-header">Efternavn</div>
                      <div>
                        <input className="form-input" type="text" name="name" onChange={(e) => setFormSurname(e.target.value)} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="borderr">
                  <div className="input-wrapper">
                    <div className="borderrr">
                      <div className="input-header">Telefonnummer</div>
                      <div>
                        <input className="form-input" type="text" name="surname" onChange={(e) => setFormNumber(e.target.value)} />
                      </div>
                    </div>
                  </div>
                  <div className="input-wrapper">
                    <div className="borderrr">
                      <div className="input-header">Email adresse</div>
                      <div>
                        <input className="form-input" type="text" name="name" onChange={(e) => setFormEmail(e.target.value)} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="borderr">
                  <div className="input-wrapper">
                    <div className="borderrr">
                      <div className="input-header">Reg. nr</div>
                      <div>
                        <input className="form-input" type="text" name="name" onChange={(e) => setRn(e.target.value)} />
                      </div>
                    </div>
                  </div>
                  <div className="input-wrapper">
                    <div className="borderrr">
                      <div className="input-header">Kontonummer</div>
                      <div>
                        <input className="form-input" type="text" name="name" onChange={(e) => setformAccountNumber(e.target.value)} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="radio-form">
              <div><input type="radio" name="rr" checked={radioButtonStatus} onClick={() => setRadioStatusRemote()}></input> Send pakkelabel via. mail</div>
              <div style={{ marginTop: '5px' }}><input type="radio" name="rr" checked={!radioButtonStatus} onClick={() => setRadioStatusDelivery()}></input> Aflevér i butik </div>
              <div style={{ marginTop: '10px' }}><input type="checkbox" name="chb" onClick={() => setCheckBoxLisance(!checkBoxLisance)}></input> Jeg accepterer <button id="lisence-button" onClick={() => goLisence()} >Handelsbetingelser</button></div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}><button onClick={() => readyMail()}>Opret og godkend enheder</button> {spinner ? (<img src={spinnerimg} alt="spinner" width={40} />) : null}</div>
          </div></div>
        <Footer />
        <ReactModal
          style={customStyles1}
          isOpen={addressModal}
          contentLabel="Address PhoneSwap"
        >
          <div className="address-modal">
            <div className="modal-address-content">Bredgade 41<br></br>
              7400 Herning</div><button className="modal-wrapper-close" onClick={() => setAddressModal(false)}><FiX /></button>
          </div>
        </ReactModal>
        <ReactModal
          style={customStyles1}
          isOpen={mailError}
          contentLabel="Kontakt cant be empty."
        >
          <div className="error-modal">

            <div className="modal-error-content">Handelsbetingelser skal accepteres!</div><button className="modal-wrapper-close" onClick={() => setMailError(false)}><FiX /></button>
          </div>
        </ReactModal>
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
  } else {
    return null;
  }


}

export default DevicePickerScreen;
