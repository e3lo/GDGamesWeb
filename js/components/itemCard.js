export function rednerItemCard() {
  let elems = document.getElementsByTagName("app-item-card");

  Array.from(elems).forEach((element) => {
    element.innerHTML = "This is a rendered QR element";

    // Log the element to the console (for debugging purposes)
    console.log(element);
  });
}
