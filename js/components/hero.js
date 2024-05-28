import { Component } from '../framework/component.js';

export default class Hero extends Component {
  constructor(document) {
    super('app-hero', document);

    this.props = {
      body: '',
    };
  }

  createElement(parentNode) {
    const templateClone = super.createElement(parentNode);
    return templateClone;
  }
}
