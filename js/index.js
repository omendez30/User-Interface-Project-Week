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

// class TabLink {
//   constructor(tab) {
//     this.tab = tab;
//     //console.log(this.tab);
//     this.data = this.tab.dataset.tab;
//     //console.log(this.data);
//     this.itemElement = document.querySelector(
//       `.tabs-link[data-tab ="${this.data}"]`
//     );

//     this.tabItem = new TabItem(this.itemElement);
//     this.tab.addEventListener("click", () => this.activeTab());
//   }
//   activeTab() {
//     const link = document.querySelectorAll(".tabs-link");

//     link.forEach(link => link.classList.remove("tabs-links-selected"));

//     this.tab.classList.add("tab-link-selected");

//     this.tabItem.activeTab();
//   }
// }

// class TabItem {
//   constructor(tab) {
//     this.tab = tab;
//   }
//   activeTab() {
//     const items = document.querySelectorAll(".tab-item");

//     items.forEach(item => item.classList.remove("tab-item-selected"));

//     this.tab.classList.add("tab-item-selected");

//     this.tab.style.backgroundColor = "teal";

//     //this.tab.activeTab();
//   }
// }
// let links = document
//   .querySelectorAll(".tabs .tabs-link")
//   .forEach(tab => new TabLink(tab));
// //console.log(links);
