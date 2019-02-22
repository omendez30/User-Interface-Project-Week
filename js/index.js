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

class TabLink {
  constructor(link) {
    this.link = link;
    this.data = this.link.dataset.tab;
    this.selectedTab = document.querySelector(
      `.tab-item[data-tab="${this.data}"]`
    );
    this.tabItem = new TabContent(this.itemElement);

    this.link.addEventListener("click", () => this.select());
  }

  select() {
    document
      .querySelectorAll(".tabs-links")
      .forEach(link => link.classList.remove("tabs-link-selected"));
    this.link.classList.add("tabs-link-selected");
    this.tabItem.select();
  }
}

class TabContent {
  constructor(content) {
    this.content = content;
  }

  select() {
    const card = document
      .querySelectorAll(".tab-item")
      .forEach(item => item.classList.remove("tab-item-selected"));
    const display = document.querySelector(
      `.tab-content[data-tab ="${this.content}"]`
    );
    display.classList.add("tab-item-selected");
  }
}
let expand = document
  .querySelectorAll(".main-nav")
  .forEach(element => new Expanded(element));

let link = document
  .querySelectorAll(".tabs-links")
  .forEach(link => new TabLink(link));
