import { Component } from '../framework/component.js';

export default class Footer extends Component {
  constructor(document) {
    super('app-footer', document);

    this.props = {
      body: '',
    };
  }

  createElement(parentNode) {
    const templateClone = super.createElement(parentNode);
    return templateClone;
  }
}
