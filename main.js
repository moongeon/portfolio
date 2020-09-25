"use strict";

// 최상단에 있을때, navbar를 투명하게 만든다.
const navbar = document.querySelector("#navbar");

const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("narbar--dark");
  } else {
    navbar.classList.remove("narbar--dark");
  }
});

// 홈화면에서 스크롤을 내릴때 점점 화면을 옅어지게 하면서 내리기

const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

const navbar__menu = document.querySelector(".navbar__menu");
navbar__menu.addEventListener("click", (evnet) => {
  console.log(event.target.dataset.link);

  switch (event.target.dataset.link) {
    case "#home":
      window.scrollTo(0, 0);
      break;
    case "#about":
      window.scrollTo(0, 600);
      break;
    case "#skills":
      window.scrollTo(0, 1325);
      break;
    case "#mywork":
      window.scrollTo(0, 1800);
      break;
    case "#contact":
      window.scrollTo(0, 2200);
      break;
  }
});
