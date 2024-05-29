import Barcode from '../components/barcode.js';
import Footer from '../components/footer.js';
import Hero from '../components/hero.js';
import Item from '../components/item.js';
import ItemOption from '../components/itemOption.js';
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
let itemOption = new ItemOption(document);

componentHandler
  .register(barcode)
  .register(navigation)
  .register(item)
  .register(footer)
  .register(hero)
  .register(slideshow)
  .register(itemOption);

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

// Setting Title
const itemTitle = document.getElementById('item-title');
itemTitle.innerText = itemData.title;

// Setting item options
const itemSelections = document.querySelector('.selection__options');
itemData.productOptions.forEach((value, index) => {
  const item = document.createElement('app-item-option');
  for (let key in value) {
    item.setAttribute(key, value[key]);
  }
  item.setAttribute('onclick', `onSelectProduct(${index})`);
  itemSelections.appendChild(item);
});

// Setting description
const description1 = document.getElementById('item-about-sm');
const description2 = document.getElementById('item-about-lg');
description1.innerHTML = itemData.about;
description2.innerHTML = itemData.about;

// Setting specs
const specs1 = document.getElementById('item-specs-sm');
const specs2 = document.getElementById('item-specs-lg');
specs1.innerHTML = itemData.technical;
specs2.innerHTML = itemData.technical;

// Setting recommended
const recommended = document.getElementById('recommened');
itemData.similarItems.forEach((value) => {
  const item = document.createElement('app-item');
  item.setAttribute('id', value);

  recommended.appendChild(item);
});

componentHandler.renderComponents(document);

// Handling item
let activeItem = 0;
let quantity = 1;

function setQuantity(value) {
  const quantityDisplay = document.getElementById('item-quantity__value');
  quantityDisplay.innerHTML = value;
  quantity = value;
}

function getQuantity() {
  return quantity;
}

function onSelectProduct(index) {
  activeItem = index;
  setQuantity(1);

  Array.from(itemSelections.children).forEach((value, item) => {
    console.log(index);
    if (item == index) {
      value.children[0].classList.add('active');
    } else {
      value.children[0].classList.remove('active');
    }
  });
}

// Handling Qty
function onQuantityToggle() {
  const quantityDetails = document.querySelector('.item-quantity__details');

  if (quantityDetails.classList.contains('show')) {
    quantityDetails.classList.remove('show');
  } else {
    quantityDetails.classList.add('show');
  }
}

function onMinusItem() {
  if (getQuantity() > 0) {
    setQuantity(getQuantity() - 1);
  }
  console.log(getQuantity());
}

function onAddItem() {
  if (getQuantity() < itemData.productOptions[activeItem].stock) {
    setQuantity(getQuantity() + 1);
  } else {
    alert('Sorry! This is all the stock available!');
  }
  console.log(getQuantity());
}

// Add to cart
function onAddToCart() {
  alert('Added to cart!');
}

globalThis.onSelectProduct = onSelectProduct;
globalThis.onQuantityToggle = onQuantityToggle;
globalThis.onMinusItem = onMinusItem;
globalThis.onAddItem = onAddItem;
globalThis.onAddToCart = onAddToCart;
