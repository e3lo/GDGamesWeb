import { Component } from '../framework/component.js';
import { getPageInfo } from '../framework/pageInfoHandler.js';

export default class TypeOverview extends Component {
  constructor(document) {
    super('app-type-overview', document);

    this.props = {
      id: '',
      barcodeText: '',
      type: '',
      title: '',
      description: '',
      src1: '',
      src2: '',
      quote: '',
      items: '',
    };

    this.onSeeCollection = this.onSeeCollection.bind(this);

    // Attach the bound method to globalThis
    globalThis.onSeeCollection = this.onSeeCollection;
  }

  createElement(parentNode) {
    // Retrieving the real data for the component
    super.setProps(parentNode);
    const newProps = getPageInfo(this.props.id).section[
      parseInt(this.props.order)
    ];
    this.copyProps(newProps);
    super.setAttributes(parentNode);

    // Loading the actual component
    const templateClone = super.createElementWithoutReset(parentNode);

    // Setting the images
    this.setImage(
      templateClone.querySelector('.type-section__bg'),
      `linear-gradient(rgba(48, 48, 48, 0.4), rgba(23, 23, 23, 1)),
    url(${this.props.src1})`
    );
    this.setImage(
      templateClone.querySelector('.type-section__bento__stat'),
      `url(${this.props.src2})`
    );
    this.setImage(
      templateClone.querySelector('.type-section__bento__item'),
      `url(${this.props.src3})`
    );

    const itemSection = templateClone.querySelector('.type-collection');
    this.props.items.forEach((value) => {
      const element = document.createElement('app-item');
      element.setAttribute('id', value);
      itemSection.appendChild(element);
    });

    // Setting the barcode
    const barcode = templateClone.querySelector('app-barcode');
    barcode.setAttribute('body', this.props.barcodeText);

    return templateClone;
  }

  copyProps(newProps) {
    this.props = { ...this.props, ...newProps };
  }

  setImage(node, backgroundStyle) {
    if (node.style == null) {
      return;
    }
    node.style.background = backgroundStyle;
    node.style.backgroundSize = 'cover';
    node.style.backgroundPosition = 'center';
    node.style.backgroundRepeat = 'no-repeat';
  }

  onSeeCollection(event) {
    const item =
      event.srcElement.parentNode.parentNode.parentNode.parentNode.parentNode
        .parentNode;
    console.log(item);
    const id = item.getAttribute('id');

    window.location.href = `./search.html?id=${id}`;
  }
}
