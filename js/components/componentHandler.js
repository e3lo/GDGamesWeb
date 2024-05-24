export class ComponentHandler {
  constructor() {
    this.componentList = [];
  }

  register(component) {
    this.componentList.push(component);
  }

  renderComponents() {
    this.componentList.forEach((component) => {
      let elems = document.getElementsByTagName(component.name);
      Array.from(elems).forEach((element) => {
        component.render(element);
      });
    });
  }
}
