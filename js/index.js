import { QrStyle } from "./components/QrStyle.js";
import { ComponentHandler } from "./components/componentHandler.js";

let componentHandler = new ComponentHandler();

let qrStyle = new QrStyle();

qrStyle.setTemplate(document.getElementById("app-qr-style-template"));

componentHandler.register(qrStyle);

componentHandler.renderComponents();
