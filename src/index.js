import React from "react";
import ReactDOM from "react-dom/client"
import './global.css'
import './Fonts/font.css'
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routers";
import Nav from "./components/nav/Nav";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </React.StrictMode>
)