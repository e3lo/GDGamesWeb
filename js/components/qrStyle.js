import { Component } from "./component.js";

export class QrStyle extends Component {
  constructor() {
    super("app-qr-style");
  }

  createElement(parentNode) {
    const templateClone = this.template.content.cloneNode(true);
    console.log(parentNode.attributes);

    return templateClone;
  }
}
