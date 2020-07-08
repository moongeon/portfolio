"use strict";

// 최상단에 있을때, navbar를 투명하게 만든다.
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("narbar--dark");
  } else {
    navbar.classList.remove("narbar--dark");
  }
});
