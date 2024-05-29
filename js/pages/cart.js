import Barcode from '../components/barcode.js';
import CheckoutItem from '../components/checkoutItem.js';
import Footer from '../components/footer.js';
import Hero from '../components/hero.js';
import Item from '../components/item.js';
import Navigation from '../components/navigation.js';
import { ComponentHandler } from '../framework/componentHandler.js';
import { getItemById } from '../framework/itemHandler.js';

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

// Render Checkout Items
const cart = JSON.parse(localStorage.getItem('cart'));
const checkoutList = document.querySelector('.checkout-list');
cart.forEach((element, index) => {
  const item = document.createElement('app-checkout-item');
  const productData = getItemById(element.itemId);
  const productType = productData.productOptions[element.productIndex];

  item.setAttribute('index', index);
  item.setAttribute('qty', element.quantity);
  item.setAttribute('price', productType.price);
  item.setAttribute('shipping', productType.physical);
  item.setAttribute('title', productData.title);
  item.setAttribute('product-title', productType.title);
  item.setAttribute('img', productData.productImg[0]);

  checkoutList.appendChild(item);
});

componentHandler.renderComponents(document);

function onCheckout() {}

globalThis.onCheckout = onCheckout;
