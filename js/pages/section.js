import Barcode from '../components/barcode.js';
import Featured from '../components/featured.js';
import Footer from '../components/footer.js';
import Hero from '../components/hero.js';
import Item from '../components/item.js';
import Navigation from '../components/navigation.js';
import TypeOverview from '../components/typeOverview.js';
import { ComponentHandler } from '../framework/componentHandler.js';

// Component Handling
let componentHandler = new ComponentHandler();

let barcode = new Barcode(document);
let navigation = new Navigation(document);
let item = new Item(document);
let footer = new Footer(document);
let hero = new Hero(document);
let featured = new Featured(document);
let typeOverview = new TypeOverview(document);

componentHandler
  .register(barcode)
  .register(navigation)
  .register(item)
  .register(footer)
  .register(hero)
  .register(featured)
  .register(typeOverview);

// Rendering information
const currentUrl = new URL(window.location.href);
const urlParams = new URLSearchParams(currentUrl.search);
const id = urlParams.get('id');

const body = document.querySelectorAll('#id');
body.forEach((value) => {
  value.setAttribute('id', id);
});

// Rendering components
componentHandler.renderComponents(document);
