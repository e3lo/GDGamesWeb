import { Component } from '../framework/component.js';

export default class ItemOption extends Component {
  constructor(document) {
    super('app-item-option', document);

    this.props = {
      body: '',
    };
  }

  createElement(parentNode) {
    const templateClone = super.createElement(parentNode);

    if (this.props.decor == 'null' || this.props.decor == '') {
      templateClone.querySelector('.item-decor').remove();
    }

    // Price
    const price = templateClone.querySelector('.item-price');
    price.innerText = `$${this.props.price}`;

    if (this.props.physical == 'true') {
      price.innerText += ' + Delivery';
    }

    // Stock
    const stock = templateClone.querySelector('.item-stock__text');
    const stockIndicator = templateClone.querySelector('#stock-indicator');

    if (parseInt(this.props.stock) < 5) {
      stock.innerText = 'Low Stock';
      stockIndicator.classList.add('stock-indicator--yellow');
    } else if (parseInt(this.props.stock) <= 0) {
      stock.innerText = 'Out of Stock';
      stockIndicator.classList.add('stock-indicator--red');
    } else {
      stock.innerText = 'In Stock';
      stockIndicator.classList.add('stock-indicator--green');
    }

    return templateClone;
  }
}
