import Barcode from "./components/barcode.js";
import CategorySection from "./components/categorySection.js";
import Footer from "./components/footer.js";
import Item from "./components/item.js";
import Navigation from "./components/navigation.js";
import { ComponentHandler } from "./framework/componentHandler.js";

// Component Handling
let componentHandler = new ComponentHandler();

let barcode = new Barcode(document);
let navigation = new Navigation(document);
let item = new Item(document);
let categorySection = new CategorySection(document);
let footer = new Footer(document);

componentHandler
  .register(barcode)
  .register(navigation)
  .register(item)
  .register(categorySection)
  .register(footer);

// Handle Hero
const heroList = document.getElementById("hero-list");
const heroItems = [
  {
    title: "FINAL FANTASY VII",
    img: "/assets/banners/ff7.jpg",
    link: "./html/pages/item.html?id=4",
  },
  {
    title: "NieR: Automata",
    img: "/assets/banners/nier.jpg",
    link: "./html/pages/item.html?id=14",
  },
  {
    title: "Silksong",
    img: "/assets/banners/silksong.jpg",
    link: "./html/pages/item.html?id=12",
  },
];
let heroActive = 0;

renderHeroActive(heroList);
const heroSelection = document.getElementById("hero-selection-list");
for (let i = 0; i < heroSelection.childElementCount; i++) {
  let item = heroSelection.children[i];
  item.innerText = heroItems[i].title;
  item.style.background = `linear-gradient(rgba(23, 23, 23, 0.4), rgba(23, 23, 23, 0.4)), url(${heroItems[i].img})`;
  item.style.backgroundSize = "cover";
  item.style.backgroundPosition = "center";
}

componentHandler.renderComponents(document);

function renderHeroActive(heroList) {
  for (let i = 0; i < heroList.childElementCount; i++) {
    let item = heroList.children[i];
    if (i != heroActive) {
      item.classList.add("hidden");
      item.classList.remove("landing-hero__items__display");
    } else {
      item.classList.remove("hidden");
      item.classList.add("landing-hero__items__display");
    }
  }
  let background = heroList.parentElement;
  background.style.background = `linear-gradient(rgba(23, 23, 23, 0.4), rgba(23, 23, 23, 1)),
  url(${heroItems[heroActive].img})`;
  background.style.backgroundSize = "cover";
  background.style.backgroundPosition = "center";
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
