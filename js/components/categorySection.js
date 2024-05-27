import { Component } from '../framework/component.js';
import { getItemById } from '../framework/itemHandler.js';

export default class CategorySection extends Component {
  constructor(document) {
    super('app-category-section', document);

    this.props = {
      id: '',
      title: '',
      description: '',
      stat: '',
      statDescription: '',
      itemDescription: '',
      itemTitle: '',
      src1: '',
      src2: '',
      src3: '',
      items: '',
    };
  }

  createElement(parentNode) {
    const templateClone = super.createElement(parentNode);

    this.setImage(
      templateClone.querySelector('.category-section__bg'),
      `linear-gradient(rgba(48, 48, 48, 0.4), rgba(23, 23, 23, 1)),
    url(${this.props.src1})`
    );

    this.setImage(
      templateClone.querySelector('.category-section__bento__stat'),
      `linear-gradient(rgba(23, 23, 23, 0.6), rgba(23, 23, 23, 0.6)),
      url(${this.props.src2})`
    );

    this.setImage(
      templateClone.querySelector('.category-section__bento__img'),
      `url(${this.props.src3})`
    );

    // Setting the item list
    const itemSection = templateClone.querySelector('.category-collection');
    const items = this.props.items.split(',');
    items.forEach((value) => {
      const item = getItemById(parseInt(value));
      if (item == null) {
        return;
      }

      const element = document.createElement('app-item');
      element.setAttribute('id', item.id);
      element.setAttribute('title', item.title);
      element.setAttribute('type', item.productOptions[0].title);
      element.setAttribute('description', item.tags);
      element.setAttribute('price', item.productOptions[0].price);
      element.setAttribute('src', item.productImg[0]);
      element.setAttribute('cta', 'View Item');
      itemSection.appendChild(element);
    });

    // items.appendChild(this.createElement('app-item'));

    return templateClone;
  }

  setImage(node, backgroundStyle) {
    if (node.style == null) {
      return;
    }
    node.style.background = backgroundStyle;
    node.style.backgroundSize = 'cover';
    node.style.backgroundPosition = 'center';
    node.style.backgroundRepeat = 'no-repeat';
  }
}
