export class Component {
  constructor(name, document) {
    this.name = name;
    this.props = {};
    this.setTemplate(document.getElementById(this.name));
  }

  // Entry Point
  render(parentNode) {
    parentNode.appendChild(this.createElement(parentNode));
  }

  setTemplate(template) {
    this.template = template;
  }

  setProps(parentNode) {
    try {
      if (parentNode.attributes instanceof NamedNodeMap) {
        // Iterate over each property of the NamedNodeMap
        for (let i = 0; i < parentNode.attributes.length; i++) {
          const attributeName = parentNode.attributes[i].name;
          const attributeValue = parentNode.attributes[i].value;

          // Setting the values to the class
          this.props[attributeName] = attributeValue;
        }
      }
    } catch (e) {
      console.log(e);
    }
  }

  setAttributes(parentNode) {
    if (this.props == null) {
      console.log('Empty props');
      return;
    }

    for (const key in this.props) {
      if (this.props.hasOwnProperty(key)) {
        parentNode.setAttribute(key, this.props[key]);
      }
    }
  }

  createElement(parentNode) {
    let templateClone = this.template.content.cloneNode(true);
    // Resetting props
    this.props = {};

    // Setting props
    this.setProps(parentNode);

    // Setting text binding
    templateClone = this.setTextBinding(templateClone);

    return templateClone;
  }

  createElementWithoutReset(parentNode) {
    let templateClone = this.template.content.cloneNode(true);

    // Setting text binding
    templateClone = this.setTextBinding(templateClone);

    return templateClone;
  }

  setTextBinding(templateClone) {
    for (let key in this.props) {
      let results = templateClone.querySelectorAll(`[-text = ${key}]`);
      results.forEach((element) => {
        element.innerHTML = this.props[key];
      });
    }

    return templateClone;
  }
}
