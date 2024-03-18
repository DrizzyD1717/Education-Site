const closeMenu = document.querySelector(".mobile-logo");
const openMenu = document.querySelector(".open-menu");
const mobileMenu = document.querySelector(".mobile-nav");
const mainMenu = document.querySelector("header");

openMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("hide");
  mainMenu.classList.toggle("hide");
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("hide");
  mainMenu.classList.toggle("hide");
});
