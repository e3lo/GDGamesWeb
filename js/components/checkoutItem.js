import { Component } from '../framework/component.js';

export default class CheckoutItem extends Component {
  constructor(document) {
    super('app-checkout-item', document);

    this.props = {
      body: '',
      quantity: '',
    };

    this.onQuantityToggle = this.onQuantityToggle.bind(this);
    this.onMinusItem = this.onMinusItem.bind(this);
    this.onAddItem = this.onAddItem.bind(this);
    globalThis.onQuantityToggle = this.onQuantityToggle;
    globalThis.onMinusItem = this.onMinusItem;
    globalThis.onAddItem = this.onAddItem;
  }

  createElement(parentNode) {
    const templateClone = super.createElement(parentNode);
    return templateClone;
  }

  setQuantity(item, value) {
    const quantityDisplay = item.querySelector('#item-quantity__value');
    quantityDisplay.innerHTML = value;
    item.setAttribute('quantity', value);
  }

  getQuantity(item) {
    return parseInt(item.getAttribute('quantity'));
  }

  // Handling Qty
  onQuantityToggle() {
    const quantityDetails = document.querySelector('.item-quantity__details');

    if (quantityDetails.classList.contains('show')) {
      quantityDetails.classList.remove('show');
    } else {
      quantityDetails.classList.add('show');
    }
  }

  onMinusItem(event) {
    const item = event.srcElement.parentNode.parentNode.parentNode.parentNode;

    if (this.getQuantity(item) > 0) {
      this.setQuantity(item, this.getQuantity(item) - 1);
    }
    console.log(this.getQuantity(item));
  }

  onAddItem(event) {
    const item = event.srcElement.parentNode.parentNode.parentNode.parentNode;
    this.setQuantity(item, this.getQuantity(item) + 1);
    // May require checks for limit here aswell
    console.log(this.getQuantity(item));
  }
}
