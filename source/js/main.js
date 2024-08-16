document.addEventListener("DOMContentLoaded", function () {
  const burgerButton = document.querySelector(".header__burger");
  const nav = document.querySelector(".header__nav");

  function toggleMenu() {
    burgerButton.classList.toggle("active");
    nav.classList.toggle("header__nav--active");
  }

  burgerButton.addEventListener("click", toggleMenu);

});