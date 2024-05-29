import { Component } from '../framework/component.js';
import { getItemById } from '../framework/itemHandler.js';

export default class Slideshow extends Component {
  constructor(document) {
    super('app-slideshow', document);

    this.props = {
      itemid: '',
    };

    this.onImgClick = this.onImgClick.bind(this);
    globalThis.onImgClick = this.onImgClick;
  }

  createElement(parentNode) {
    const templateClone = super.createElement(parentNode);

    const itemData = getItemById(parseInt(this.props.itemid));

    // Rendering the images
    this.imageList = itemData.productImg;
    this.imgMain = templateClone.querySelector('#main-image');
    this.imgSub = templateClone.querySelector('.slideshow__options');
    this.imgMain.setAttribute('src', this.imageList[0]);
    this.imageList.map((value, index) => {
      const item = document.createElement('img');
      item.setAttribute('src', value);
      item.setAttribute('onclick', `onImgClick(${index})`);
      this.imgSub.appendChild(item);
    });

    return templateClone;
  }

  //   This logic won't work for multiple instances of components within html file
  onImgClick(index) {
    this.imgMain.setAttribute('src', this.imageList[index]);
    const imgList = this.imgSub.children;
    Array.from(imgList).map((value, number) => {
      if (number == index) {
        value.classList.add('border--active');
      } else {
        value.classList.remove('border--active');
      }
    });
  }
}
