export class Component {
  constructor(name) {
    this.name = name;
  }

  setTemplate(template) {
    this.template = template;
    console.log(typeof template);
  }

  createElement(parentNode) {
    const templateClone = this.template.content.cloneNode(true);

    return templateClone;
  }

  render(parentNode) {
    parentNode.appendChild(this.createElement(parentNode));
  }
}
