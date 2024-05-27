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
}
