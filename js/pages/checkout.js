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

//   Rendering Total
let total = parseInt(localStorage.getItem('subtotal'));
document.getElementById('total').innerText = `TOTAL: $${total}`;

componentHandler.renderComponents(document);

let billingAddress = false;
function toggleBillingAddress() {
  const field = document.getElementById('billingAddressField');

  if (billingAddress) {
    field.classList.add('hidden');
  } else {
    field.classList.remove('hidden');
  }

  billingAddress = !billingAddress;
}

const requiredFields = [
  'name',
  'contactEmail',
  'mobile',
  'address',
  'billingName',
  'card',
  'expiry',
  'cvv',
];

function onSubmit(event) {
  event.preventDefault();

  let emptyFields = false;
  requiredFields.forEach((value) => {
    let field = document.getElementById(value);
    if (!field.value) {
      emptyFields = true;

      console.log(field.parentNode);
      let smallElement = field.parentNode.querySelector('small');
      if (smallElement && smallElement.classList) {
        smallElement.classList.add('warning-message');
      }
    } else {
      let smallElement = field.parentNode.querySelector('small');
      if (smallElement && smallElement.classList) {
        smallElement.classList.remove('warning-message');
      }
    }
  });

  if (emptyFields) {
    warnUserEmptyField();
  } else {
    window.location.href = './success.html';
  }
}

function warnUserEmptyField() {
  document.getElementById('warning').innerText =
    "Sorry! It seems you haven't filled out all the fields yet";
}

globalThis.toggleBillingAddress = toggleBillingAddress;
globalThis.onSubmit = onSubmit;
