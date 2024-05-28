import { Component } from '../framework/component.js';

export default class Item extends Component {
  constructor(document) {
    super('app-item', document);

    this.props = {
      id: '',
      title: '',
      type: '',
      description: '',
      src: '',
      price: '',
    };

    this.onItemClick = this.onItemClick.bind(this);

    // Attach the bound method to globalThis
    globalThis.onItemClick = this.onItemClick;
  }

  createElement(parentNode) {
    const templateClone = super.createElement(parentNode);
    // Updating images
    templateClone.querySelector('img').src = this.props.src;

    // Removing type if empty
    if (this.props.type === '') {
      templateClone.querySelector("[-text = 'type']").style.display = 'none';
    }

    // Removing price if empty
    if (this.props.price == null) {
      templateClone.querySelector('.item__info__price').style.display = 'none';
    }

    return templateClone;
  }

  onItemClick(event) {
    const item = event.srcElement.parentNode.parentNode;
    const id = item.getAttribute('id');

    if (isNaN(id)) {
      window.location.href = `./html/pages/section.html?id=${id}`;
    } else {
      window.location.href = `./html/pages/item.html?id=${id}`;
    }
  }
}
