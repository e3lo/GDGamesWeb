import QrStyle from './components/QrStyle.js';
import Navigation from './components/navigation.js';
import { ComponentHandler } from './framework/componentHandler.js';

// Component Handling
let componentHandler = new ComponentHandler();

let qrStyle = new QrStyle();
let navigation = new Navigation();

qrStyle.setTemplate(document.getElementById('app-qr-style-template'));
navigation.setTemplate(document.getElementById('app-navigation'));

componentHandler.register(qrStyle);
componentHandler.register(navigation);

componentHandler.renderComponents();
