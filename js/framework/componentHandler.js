export class ComponentHandler {
  constructor() {
    this.componentList = [];
  }

  register(component) {
    this.componentList.push(component);
    return this;
  }

  renderComponents(scope) {
    // Check if scope is a valid node (either DOCUMENT_NODE or ELEMENT_NODE)
    if (
      scope.nodeType !== Node.ELEMENT_NODE &&
      scope.nodeType !== Node.DOCUMENT_NODE
    ) {
      return;
    }

    this.componentList.forEach((component) => {
      let elems = scope.querySelectorAll(component.name);

      elems.forEach((element) => {
        component.render(element);

        // Recursively render components for each child node
        // This allows nesting of components
        element.childNodes.forEach((child) => {
          this.renderComponents(child);
        });
      });
    });
  }

  renderIndividualComponent(name, scope) {
    this.componentList.forEach((component) => {
      if (component.name != name) {
        return;
      }

      let elems = scope.querySelectorAll(component.name);

      elems.forEach((element) => {
        component.render(element);

        // Recursively render components for each child node
        // This allows nesting of components
        element.childNodes.forEach((child) => {
          this.renderComponents(child);
        });
      });
    });
  }

  handleEvents() {}
}
