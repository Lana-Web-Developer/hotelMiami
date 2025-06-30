"use strict";

const menuToggle = document.getElementById("menu");
const menuList = document.getElementById("menuList");
const menuClose = document.getElementById("menuClose");

menuToggle.addEventListener("click", () => {
  menuList.classList.add("menu__list_opened");
});

menuClose.addEventListener("click", function () {
  menuList.classList.remove("menu__list_opened");
});
