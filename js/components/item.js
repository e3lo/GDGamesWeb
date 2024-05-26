import { Component } from '../framework/component.js';

export default class Item extends Component {
  constructor() {
    super('app-item');

    this.props = {
      title: '',
      type: '',
      description: '',
      src: '',
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

    return templateClone;
  }
}
