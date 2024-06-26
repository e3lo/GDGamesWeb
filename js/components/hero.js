import { Component } from '../framework/component.js';
import { getItemById } from '../framework/itemHandler.js';
import { getPageInfo } from '../framework/pageInfoHandler.js';

export default class Hero extends Component {
  constructor(document) {
    super('app-hero', document);

    this.props = {
      id: '',
      itemId: '',
    };
  }

  createElement(parentNode) {
    super.setProps(parentNode);
    // For page hero
    if (getPageInfo(this.props.id) != null) {
      this.heroData = getPageInfo(this.props.id).hero;
    }

    // For item hero
    if (getItemById(this.props.itemid) != null) {
      const itemData = getItemById(this.props.itemid);
      this.heroData = {
        title: itemData.title,
        body: '',
        background: itemData.bgImg,
        routingPath: [
          { name: 'home', url: '../../index.html' },
          {
            name: itemData.category,
            url: `./section.html?id=${itemData.category}`,
          },
          {
            name: itemData.type,
            url: `./search.html?id=${itemData.type_internal}`,
          },
          { name: itemData.title, url: `` },
        ],
        barcode: {
          body: itemData.decor,
        },
      };
    }

    this.props = this.heroData;
    super.setAttributes(parentNode);
    const templateClone = super.createElementWithoutReset(parentNode);

    // Setting up breadcrumbs
    this.createBreadCrumbs(templateClone);
    // Set barcode
    this.createBarcode(templateClone);

    // Set up background
    const bg = templateClone.querySelector('.hero');
    bg.style.background = `linear-gradient(rgba(23, 23, 23, 0.4), rgba(23, 23, 23, 1)),
    url(${this.props.background})`;
    bg.style.backgroundSize = 'cover';
    bg.style.backgroundPosition = 'center';
    bg.style.backgroundRepeat = 'no-repeat';

    return templateClone;
  }

  createBreadCrumbs(templateClone) {
    const breadcrumbs1 = templateClone.querySelector('#breadcrumbs1');
    const breadcrumbs2 = templateClone.querySelector('#breadcrumbs2');

    this.heroData.routingPath.map((value, index) => {
      const item1 = document.createElement('a');
      const item2 = document.createElement('a');

      item1.innerText = value.name;
      item2.innerText = value.name;

      item1.setAttribute('href', value.url);
      item2.setAttribute('href', value.url);

      if (index != this.heroData.routingPath.length - 1) {
        item1.classList.add('hero__breadcrumbs--link');
        item2.classList.add('hero__breadcrumbs--link');

        breadcrumbs1.appendChild(item1);
        breadcrumbs2.appendChild(item2);

        const gap1 = document.createElement('p');
        const gap2 = document.createElement('p');
        gap1.innerText = '>';
        gap2.innerText = '>';
        breadcrumbs1.appendChild(gap1);
        breadcrumbs2.appendChild(gap2);
      } else {
        breadcrumbs1.appendChild(item1);
        breadcrumbs2.appendChild(item2);
      }
    });
  }

  createBarcode(templateClone) {
    const barcode = templateClone.querySelector('app-barcode');
    barcode.setAttribute('body', this.heroData.barcode.body);
  }
}
