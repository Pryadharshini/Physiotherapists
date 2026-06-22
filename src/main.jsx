import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import App from "./App";
import Aboutus from "./Components/Aboutus";
import Ourservice from "./Components/ourservice";
import ServiceDetail from "./Components/ServiceDetail";
import Hours from "./Components/hours";
import PatientInfo from "./Components/patientinfo";
import { PopupProvider } from "./PopupContext";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PopupProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<App />} />
            <Route path="/about" element={<Aboutus />} />
            <Route path="/services" element={<Ourservice />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/hours" element={<Hours />} />
            <Route path="/patient-info" element={<PatientInfo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PopupProvider>
  </React.StrictMode>
);