import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DevicePickerScreen from './Components/DevicePickerScreen';
import BackOfficeScreen from './Components/BackOfficeScreen';
import Retur from './Components/ReturScreen';
import Reklamation from './Components/ReklamationScreen';
import Butik from './Components/ButikScreen';
import AddDevice from './Components/ActionComponents/AddDevice';
import AddColor from './Components/ActionComponents/AddColor';
import AddStorage from './Components/ActionComponents/AddStorage';
import DeleteColor from './Components/ActionComponents/DeleteColor';
import DeleteStorage from './Components/ActionComponents/DeleteStorage';
import AddModel from './Components/ActionComponents/AddModel';
import Faq from './Components/faq';
import store from './app/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/saelg" element={<DevicePickerScreen />}></Route>
      <Route path="/retur" element={<Retur />}></Route>
      <Route path="/faq" element={<Faq />}></Route>
      <Route path="/butik" element={<Butik />}></Route>
      <Route path="/reklamation" element={<Reklamation />}></Route>
      <Route path="/backoffice" element={<BackOfficeScreen />}></Route>
      <Route path="/backoffice/device/add" element={<AddDevice />}></Route>
      <Route path="/backoffice/color/add" element={<AddColor />}></Route>
      <Route path="/backoffice/color/delete" element={<DeleteColor />}></Route>
      <Route path="/backoffice/storage/add" element={<AddStorage />}></Route>
      <Route path="/backoffice/storage/delete" element={<DeleteStorage />}></Route>
      <Route path="/backoffice/model/add" element={<AddModel />}></Route>
    </Routes>
  </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
