import { Component } from '../framework/component.js';

export default class QrStyle extends Component {
  constructor() {
    super('app-qr-style');

    this.props = {
      body: '',
    };
  }

  createElement(parentNode) {
    const templateClone = super.createElement(parentNode);
    return templateClone;
  }
}
