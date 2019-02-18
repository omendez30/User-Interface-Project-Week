// JS goes here
class Expanded {
  constructor(element) {
    this.element = element;

    this.button = this.element.querySelector(".main-nav .dropdown-button");
    this.buttonOpen = this.element.querySelector(".open-img");
    this.buttonClose = this.element.querySelector(".close-img");
    //console.log(this.buttonClose);

    this.content = this.element.querySelector(".menu");
    //console.log(this.content);

    this.button.addEventListener("click", () => this.toggleExpand());
  }
  toggleExpand() {
    this.content.classList.toggle("menu-hidden");
    this.buttonOpen.classList.toggle("hide-btn");
    this.buttonClose.classList.toggle("hide-btn");
  }
}

let expand = document
  .querySelectorAll(".main-nav")
  .forEach(element => new Expanded(element));
