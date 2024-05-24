export class Component {
  constructor(name) {
    this.name = name;
  }

  setTemplate(template) {
    this.template = template;
    console.log(typeof template);
  }

  render(parentNode) {
    const templateClone = this.template.cloneNode(true);

    parentNode.appendChild(templateClone);
    console.log("done!");
  }
}
