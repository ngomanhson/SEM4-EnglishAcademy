import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AgoraRTC, { AgoraRTCProvider } from "agora-rtc-react";

const root = ReactDOM.createRoot(document.getElementById("root"));

const client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });

root.render(
    // <React.StrictMode>
    <BrowserRouter>
        <AgoraRTCProvider client={client}>
            <App />
            <ToastContainer />
        </AgoraRTCProvider>
    </BrowserRouter>
    // </React.StrictMode>
);
reportWebVitals();
