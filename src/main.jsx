import React from "react";
import ReactDOM from "react-dom/client";
import App from "./HelloWorld";
import FirstComponent from "./FirstComponent";
import PanelUsuario from "./Renderizado";
import Render2 from "./Render2";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <FirstComponent/>
        <App />
        <PanelUsuario/>
        <Render2/>
    </React.StrictMode>,
);