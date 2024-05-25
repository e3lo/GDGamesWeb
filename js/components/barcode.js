import { Component } from '../framework/component.js';

export default class Barcode extends Component {
  constructor() {
    super('app-barcode');

    this.props = {
      body: '',
    };
  }

  createElement(parentNode) {
    const templateClone = super.createElement(parentNode);
    return templateClone;
  }
}
