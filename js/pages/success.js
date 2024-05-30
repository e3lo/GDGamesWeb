import Barcode from '../components/barcode.js';
import Footer from '../components/footer.js';
import Item from '../components/item.js';
import Navigation from '../components/navigation.js';
import Hero from '../components/hero.js';

import { ComponentHandler } from '../framework/componentHandler.js';

// Component Handling
let componentHandler = new ComponentHandler();

let barcode = new Barcode(document);
let navigation = new Navigation(document);
let item = new Item(document);
let footer = new Footer(document);
let hero = new Hero(document);

componentHandler
  .register(barcode)
  .register(navigation)
  .register(item)
  .register(footer)
  .register(hero);

localStorage.setItem('cart', '');

componentHandler.renderComponents(document);
