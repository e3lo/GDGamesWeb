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
    let subtotalValue =
      shippingCost +
      parseInt(
        parentNode.getAttribute('price') *
          parseInt(parentNode.getAttribute('qty'))
      );
    price.innerText = '$' + parentNode.getAttribute('price');
    qty.innerText = parentNode.getAttribute('qty');
    shipping.innerText =
      parentNode.getAttribute('shipping') === 'true' ? '$10' : 'Free';
    subtotal.innerText = `$${subtotalValue}`;

    parentNode.setAttribute('subtotal', subtotalValue);

    return templateClone;
  }

  setQuantity(item, value) {
    if (value == 0) {
      if (window.confirm('Do you want to remove this item from your cart?')) {
        this.removeItem(item);
      }
      return;
    }

    // Updating display
    const quantityDisplay = item.querySelector('#item-quantity__value');
    quantityDisplay.innerHTML = value;

    // Updating attributes
    const shippingCost = item.getAttribute('shipping') === 'true' ? 10 : 0;
    const itemCost = parseInt(item.getAttribute('price')) * value;
    item.setAttribute('subtotal', shippingCost + itemCost);
    item.querySelector('#subtotal').innerText = `$${shippingCost + itemCost}`;

    // Setting local storage
    let cart = JSON.parse(localStorage.getItem('cart'));
    let itemData = cart[parseInt(item.getAttribute('index'))];
    itemData.quantity = value;
    localStorage.setItem('cart', JSON.stringify(cart));

    item.setAttribute('qty', value);
  }

  getQuantity(item) {
    return parseInt(item.getAttribute('qty'));
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

  removeItem(item) {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const index = item.getAttribute('index');

    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));

    console.log(localStorage.getItem('cart'));

    // Updating every other nodes index
    const parent = item.parentNode;
    item.remove();

    Array.from(parent.children).forEach((value, index) => {
      value.setAttribute('index', index);
    });
  }
}
