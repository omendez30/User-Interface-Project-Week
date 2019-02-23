// JS goes here
class NavButton {
  constructor(button) {
    this.button = button;
    this.button.addEventListener("click", () => this.handleClick());
  }

  handleClick() {
    document
      .querySelectorAll(".navigation-btn")
      .forEach(button => button.classList.toggle("current"));
    const navItems = document.querySelector(".nav-items");
    navItems.classList.toggle("current");
  }
}

const menuButton = document
  .querySelectorAll(".navigation-btn")
  .forEach(button => new NavButton(button));
