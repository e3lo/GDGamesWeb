import { Component } from '../framework/component.js';

export default class Featured extends Component {
  constructor(document) {
    super('app-featured', document);

    this.props = {
      body: '',
    };
  }

  createElement(parentNode) {
    const templateClone = super.createElement(parentNode);
    return templateClone;
  }
}
