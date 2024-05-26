import { Component } from '../framework/component.js';

export default class Navigation extends Component {
  constructor(document) {
    super('app-navigation', document);

    this.props = {
      active: 'string',
    };

    this.activeMobile = false;

    this.links = [
      { name: 'Home', link: '/index.html' },
      { name: 'Xbox', link: '/html/pages/xbox.html' },
      { name: 'PS5', link: '/html/pages/ps5.html' },
    ];

    this.onMobileNavClick = this.onMobileNavClick.bind(this);

    // Attach the bound method to globalThis
    globalThis.onMobileNavClick = this.onMobileNavClick;
  }

  createElement(parentNode) {
    const templateClone = super.createElement(parentNode);
    return templateClone;
  }

  onMobileNavClick(e) {
    const parent = e.srcElement.parentNode.parentNode;
    const navContent = parent.querySelector('#nav__popup');

    console.log(parent);
    if (this.activeMobile) {
      parent.style.height = '4rem';
      navContent.style.opacity = 0;
    } else {
      parent.style.height = `${
        navContent.offsetHeight + parent.offsetHeight + 40
      }px`;
      navContent.style.opacity = 1;
    }

    this.activeMobile = !this.activeMobile;
  }
}
