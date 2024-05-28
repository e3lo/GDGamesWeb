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
      { name: 'Xbox', link: '/html/pages/section.html?id=xbox' },
      { name: 'PS5', link: '/html/pages/section.html?id=playstation' },
      { name: 'My cart', link: '/html/pages/cart.html' },
    ];

    this.onMobileNavClick = this.onMobileNavClick.bind(this);
    this.onLinkClick = this.onLinkClick.bind(this);

    // Attach the bound method to globalThis
    globalThis.onMobileNavClick = this.onMobileNavClick;
    globalThis.onLinkClick = this.onLinkClick;
  }

  createElement(parentNode) {
    const templateClone = super.createElement(parentNode);

    const navItems = templateClone.querySelector('.nav__links');
    const navItemsMobile = templateClone.querySelector('.nav__links--mobile');

    console.log(navItems);

    this.links.map((value) => {
      let itemDesktop = document.createElement('li');
      itemDesktop.setAttribute('onclick', `onLinkClick('${value.link}')`);
      itemDesktop.innerText = value.name;

      let itemMobile = document.createElement('li');
      itemMobile.setAttribute('onclick', `onLinkClick('${value.link}')`);
      itemMobile.innerText = value.name;

      navItems.appendChild(itemDesktop);
      navItemsMobile.appendChild(itemMobile);
    });

    return templateClone;
  }

  onLinkClick(link) {
    window.location.href = link;
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
