import Barcode from './components/barcode.js';
import Item from './components/item.js';
import Navigation from './components/navigation.js';
import { ComponentHandler } from './framework/componentHandler.js';

// Component Handling
let componentHandler = new ComponentHandler();

let barcode = new Barcode();
let navigation = new Navigation();
let item = new Item();

barcode.setTemplate(document.getElementById(barcode.name));
navigation.setTemplate(document.getElementById(navigation.name));
item.setTemplate(document.getElementById(item.name));

componentHandler.register(barcode);
componentHandler.register(navigation);
componentHandler.register(item);

componentHandler.renderComponents();

// Handle Hero
const heroList = document.getElementById('hero-list');
const heroItems = [
  {
    title: 'FINAL FANTASY VII',
    img: '/assets/banners/FFVII.png',
    link: '/page/products.html?1',
  },
  {
    title: 'NieR: Automata',
    img: '/assets/banners/nier.jpg',
    link: '/page/products.html?2',
  },
  {
    title: 'Silksong',
    img: '/assets/banners/silksong.jpg',
    link: '/page/products.html?3',
  },
];
let heroActive = 0;
renderHeroActive(heroList);

const heroSelection = document.getElementById('hero-selection-list');
for (let i = 0; i < heroSelection.childElementCount; i++) {
  let item = heroSelection.children[i];
  item.innerText = heroItems[i].title;
  item.style.background = `linear-gradient(rgba(23, 23, 23, 0.4), rgba(23, 23, 23, 0.4)), url(${heroItems[i].img})`;
  item.style.backgroundSize = 'cover';
  item.style.backgroundPosition = 'center';
}

function renderHeroActive(heroList) {
  for (let i = 0; i < heroList.childElementCount; i++) {
    let item = heroList.children[i];
    if (i != heroActive) {
      item.style.display = 'none';
    } else {
      item.style.display = 'block';
    }
  }
  let background = heroList.parentElement;
  background.style.background = `linear-gradient(rgba(23, 23, 23, 0.4), rgba(23, 23, 23, 1)),
  url(${heroItems[heroActive].img})`;
  background.style.backgroundSize = 'cover';
  background.style.backgroundPosition = 'center';
}

function changeActive(index) {
  heroActive = index;
  renderHeroActive(heroList);
}

function onLandingHeroClick() {
  window.location.href = heroItems[heroActive].link;
}

globalThis.onLandingHeroClick = onLandingHeroClick;
globalThis.changeActive = changeActive;
