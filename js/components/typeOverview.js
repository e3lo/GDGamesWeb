import { Component } from '../framework/component.js';

export default class TypeOverview extends Component {
  constructor(document) {
    super('app-type-overview', document);

    this.props = {
      id: '',
      barcodeText: '',
      title: '',
      description: '',
      src1: '',
      src2: '',
      quote: '',
      items: '',
    };

    this.onSeeCollection = this.onSeeCollection.bind(this);

    // Attach the bound method to globalThis
    globalThis.onSeeCollection = this.onSeeCollection;
  }

  createElement(parentNode) {
    const templateClone = super.createElement(parentNode);

    this.setImage(
      templateClone.querySelector('.type-section__bg'),
      `linear-gradient(rgba(48, 48, 48, 0.4), rgba(23, 23, 23, 1)),
    url(${this.props.src1})`
    );

    this.setImage(
      templateClone.querySelector('.type-section__bento__stat'),
      `url(${this.props.src2})`
    );

    // Setting the item list
    const itemSection = templateClone.querySelector('.type-collection');
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
        .parentNode;
    console.log(item);
    const id = item.getAttribute('id');
    const type = item.getAttribute('type');

    window.location.href = `./search.html?id=${id}&type=${type}`;
  }
}
