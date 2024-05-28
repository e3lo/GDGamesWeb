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

    this.onSeeCollection = this.onSeeCollection.bind(this);
    this.onSeeFeatured = this.onSeeFeatured.bind(this);
    // Attach the bound method to globalThis
    globalThis.onSeeCollection = this.onSeeCollection;
    globalThis.onSeeFeatured = this.onSeeFeatured;
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
      const element = document.createElement('app-item');
      element.setAttribute('id', value);
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

  onSeeCollection(event) {
    const item =
      event.srcElement.parentNode.parentNode.parentNode.parentNode.parentNode
        .parentNode.parentNode;
    const id = item.getAttribute('id');

    window.location.href = `./html/pages/section.html?id=${id}`;
  }

  onSeeFeatured(event) {
    const item =
      event.srcElement.parentNode.parentNode.parentNode.parentNode.parentNode
        .parentNode.parentNode;
    const id = item.getAttribute('featureId');
    window.location.href = `./html/pages/item.html?id=${id}`;
  }
}
