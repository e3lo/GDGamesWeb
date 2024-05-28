import { Component } from '../framework/component.js';
import { getPageInfo } from '../framework/pageInfoHandler.js';

export default class Featured extends Component {
  constructor(document) {
    super('app-featured', document);

    this.props = {
      body: '',
    };
  }

  createElement(parentNode) {
    const templateClone = super.createElement(parentNode);

    this.pageInfo = getPageInfo(this.props.id);

    const collection = templateClone.querySelector('.item-collection');

    this.pageInfo.featured.collection.map((value) => {
      const item = document.createElement('app-item');
      item.setAttribute('id', value);
      collection.appendChild(item);
    });

    return templateClone;
  }
}
