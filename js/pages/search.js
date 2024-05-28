import Barcode from '../components/barcode.js';
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

componentHandler
  .register(barcode)
  .register(navigation)
  .register(item)
  .register(footer)
  .register(hero);

componentHandler.renderComponents(document);

// Rendering information
const currentUrl = new URL(window.location.href);
const urlParams = new URLSearchParams(currentUrl.search);
const id = urlParams.get('id');
const type = urlParams.get('type');

// Handling Category Logic
let activeCategory = 0;

function onCategoryClick(index) {
  activeCategory = index;

  renderCategories();
}

function renderCategories() {
  const navList = document.querySelector('.search-bar__categories');
  console.log(navList);
  Array.from(navList.children).forEach((value, key) => {
    console.log(value);
    if (key == activeCategory) {
      value.classList.add('search-bar__categories--active');
    } else {
      value.classList.remove('search-bar__categories--active');
    }
  });
}

globalThis.onCategoryClick = onCategoryClick;
