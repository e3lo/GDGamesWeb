import Barcode from '../components/barcode.js';
import CheckoutItem from '../components/checkoutItem.js';
import Footer from '../components/footer.js';
import Hero from '../components/hero.js';
import Item from '../components/item.js';
import Navigation from '../components/navigation.js';
import { ComponentHandler } from '../framework/componentHandler.js';

// Component Handling
let componentHandler = new ComponentHandler();

let barcode = new Barcode(document);
let navigation = new Navigation(document);
let item = new Item(document);
let footer = new Footer(document);
let hero = new Hero(document);
let checkoutItem = new CheckoutItem(document);

componentHandler
  .register(barcode)
  .register(navigation)
  .register(item)
  .register(footer)
  .register(hero)
  .register(checkoutItem);

componentHandler.renderComponents(document);

function onCheckout() {}

globalThis.onCheckout = onCheckout;
