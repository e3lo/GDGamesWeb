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
    if (this.props.id != null) {
      this.heroData = getPageInfo(this.props.id).hero;
    }

    // For item hero
    if (this.props.itemid != null) {
      const itemData = getItemById(this.props.itemid);
      this.heroData = {
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

      console.log(this.heroData);
    }

    this.props = this.heroData;
    super.setAttributes(parentNode);
    const templateClone = super.createElementWithoutReset(parentNode);

    // Setting up breadcrumbs
    this.createBreadCrumbs(templateClone);
    // Set barcode
    this.createBarcode(templateClone);

    return templateClone;
  }

  createBreadCrumbs(templateClone) {
    const breadcrumbs1 = templateClone.querySelector('#breadcrumbs1');
    const breadcrumbs2 = templateClone.querySelector('#breadcrumbs2');

    this.heroData.routingPath.map((value, index) => {
      console.log(value);

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
