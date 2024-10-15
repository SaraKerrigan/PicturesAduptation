const btn = document.querySelector(".header__mob-burger");
const mobMenu = document.querySelector(".header__menu");

btn.addEventListener("click", function () {
  mobMenu.classList.add("active");
});

const close = document.querySelector(".header__menu-close");
close.addEventListener("click", function () {
  mobMenu.classList.remove("active");
});
