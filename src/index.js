import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
//incorporamos estilos via global
import "./styles/global.css";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
