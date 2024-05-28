import Barcode from '../components/barcode.js';
import Footer from '../components/footer.js';
import Item from '../components/item.js';
import Navigation from '../components/navigation.js';
import { ComponentHandler } from '../framework/componentHandler.js';

// Component Handling
let componentHandler = new ComponentHandler();

let barcode = new Barcode(document);
let navigation = new Navigation(document);
let item = new Item(document);
let footer = new Footer(document);

componentHandler
  .register(barcode)
  .register(navigation)
  .register(item)
  .register(footer);

componentHandler.renderComponents(document);

// Rendering information
const currentUrl = new URL(window.location.href);
const urlParams = new URLSearchParams(currentUrl.search);
const id = urlParams.get('id');
const type = urlParams.get('type');
