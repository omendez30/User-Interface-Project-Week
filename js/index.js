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

class Tabs {
  constructor(element) {
    this.element = element;
  }
}

let expand = document
  .querySelectorAll(".main-nav")
  .forEach(element => new Expanded(element));

let links = document
  .querySelectorAll(".tabs .tabs-link")
  .forEach(tab => new Tabs(tab));
//console.log(links);
