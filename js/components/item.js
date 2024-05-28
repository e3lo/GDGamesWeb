import { Component } from '../framework/component.js';
import { getItemById } from '../framework/itemHandler.js';

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

    const itemData = getItemById(parseInt(this.props.id));

    if (itemData != null) {
      this.props.title = itemData.title;
      this.props.type = itemData.productOptions[0].title;
      this.props.description = itemData.tags;
      this.props.src = '../..' + itemData.productImg[0];
      this.props.price = itemData.productOptions[0].price;
      super.setTextBinding(templateClone);
    }

    // Removing type if empty
    if (this.props.type === '') {
      templateClone.querySelector("[-text = 'type']").style.display = 'none';
    }

    // Removing price if empty
    if (this.props.price == null) {
      templateClone.querySelector('.item__info__price').style.display = 'none';
    }

    // Updating images
    templateClone.querySelector('img').src = this.props.src;
    return templateClone;
  }

  onItemClick(event) {
    const item = event.srcElement.parentNode.parentNode;
    const id = item.getAttribute('id');

    console.log(window.location.href);

    // For index.html
    if (window.location.href.includes('index.html')) {
      if (isNaN(id)) {
        window.location.href = `./html/pages/section.html?id=${id}`;
      } else {
        window.location.href = `./html/pages/item.html?id=${id}`;
      }
    } else {
      if (isNaN(id)) {
        window.location.href = `./section.html?id=${id}`;
      } else {
        window.location.href = `./item.html?id=${id}`;
      }
    }
  }
}
