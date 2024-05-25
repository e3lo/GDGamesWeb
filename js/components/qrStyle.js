import { Component } from "./component.js";

export class QrStyle extends Component {
  constructor() {
    super("app-qr-style");

    this.props = {
      body: "",
    };
  }

  createElement(parentNode) {
    const templateClone = super.createElement(parentNode);
    return templateClone;
  }
}
