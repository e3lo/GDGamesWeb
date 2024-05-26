import { Component } from '../framework/component.js';

export default class CategorySection extends Component {
  constructor(document) {
    super('app-category-section', document);

    this.props = {
      body: '',
    };
  }

  createElement(parentNode) {
    const templateClone = super.createElement(parentNode);
    return templateClone;
  }
}
