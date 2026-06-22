import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import App from "./App";
import Aboutus from "./Components/Aboutus";
import Ourservice from "./Components/ourservice";
import Hours from "./Components/hours";
import PatientInfo from "./Components/patientinfo";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/services" element={<Ourservice />} />
          <Route path="/hours" element={<Hours />} />
          <Route path="/patient-info" element={<PatientInfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);