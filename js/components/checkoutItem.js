import { Component } from '../framework/component.js';

export default class CheckoutItem extends Component {
  constructor(document) {
    super('app-checkout-item', document);

    this.props = {
      body: '',
      qty: '',
      price: '',
      shipping: '',
      subtotal: '',
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

    //  Setting data
    const price = templateClone.querySelector('#price');
    const qty = templateClone.querySelector('#qty');
    const shipping = templateClone.querySelector('#shipping');
    const subtotal = templateClone.querySelector('#subtotal');

    let shippingCost = parentNode.getAttribute('shipping') === 'true' ? 10 : 0;

    price.innerText = '$' + parentNode.getAttribute('price');
    qty.innerText = parentNode.getAttribute('qty');
    shipping.innerText =
      parentNode.getAttribute('shipping') === 'true' ? '$10' : 'Free';
    subtotal.innerText = `$${
      shippingCost +
      parseInt(
        parentNode.getAttribute('price') *
          parseInt(parentNode.getAttribute('qty'))
      )
    }`;

    return templateClone;
  }

  setQuantity(item, value) {
    const quantityDisplay = item.querySelector('#item-quantity__value');
    quantityDisplay.innerHTML = value;

    let cart = JSON.parse(localStorage.getItem('cart'));
    let itemData = cart[parseInt(item.getAttribute('index'))];
    itemData.quantity = value;
    localStorage.setItem('cart', JSON.stringify(cart));

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
