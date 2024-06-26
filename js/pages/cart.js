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

let subtotal = 0;

componentHandler
  .register(barcode)
  .register(navigation)
  .register(item)
  .register(footer)
  .register(hero)
  .register(checkoutItem);

// Render Checkout Items
try {
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

    item.addEventListener('onSubtotalChange', calculateSubtotal);

    checkoutList.appendChild(item);
  });
} catch (e) {}

componentHandler.renderComponents(document);

calculateSubtotal();

function onCheckout() {
  localStorage.setItem('subtotal', subtotal);
  window.location.href = './checkout.html';
}

function calculateSubtotal() {
  const items = document.querySelector('.checkout-list');
  const subtotalList = document.querySelectorAll('.cart__subtotal');
  let subtotalValue = 0;

  Array.from(items.children).forEach((value) => {
    subtotalValue += parseInt(value.getAttribute('subtotal'));
  });

  Array.from(subtotalList).forEach((value) => {
    value.innerText = `Subtotal: $${subtotalValue}`;
  });

  subtotal = subtotalValue;
}

globalThis.onCheckout = onCheckout;
