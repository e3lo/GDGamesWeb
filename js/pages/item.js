import Barcode from '../components/barcode.js';
import Footer from '../components/footer.js';
import Hero from '../components/hero.js';
import Item from '../components/item.js';
import Navigation from '../components/navigation.js';
import Slideshow from '../components/slideshow.js';
import { ComponentHandler } from '../framework/componentHandler.js';
import { getItemById } from '../framework/itemHandler.js';

// Component Handling
let componentHandler = new ComponentHandler();

let barcode = new Barcode(document);
let navigation = new Navigation(document);
let item = new Item(document);
let footer = new Footer(document);
let hero = new Hero(document);
let slideshow = new Slideshow(document);

componentHandler
  .register(barcode)
  .register(navigation)
  .register(item)
  .register(footer)
  .register(hero)
  .register(slideshow);

// Rendering information
const currentUrl = new URL(window.location.href);
const urlParams = new URLSearchParams(currentUrl.search);
const id = urlParams.get('id');

// Setting components
const appHero = document.querySelector('app-hero');
const appSlideshow = document.querySelector('app-slideshow');
appHero.setAttribute('itemid', id);
appSlideshow.setAttribute('itemid', id);

const itemData = getItemById(id);
console.log(itemData);

componentHandler.renderComponents(document);
