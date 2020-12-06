const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");
const heroBtn = document.querySelector(".reveal");
let toogler = 0;
if (window.screen.width <= 767) {
  navbar.classList.add("close");
}

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("close");
});

heroBtn.addEventListener("click", function (event) {
  if (toogler === 0) {
    document.querySelector(".main-title").style.visibility = "hidden";
    document.querySelector(
      ".header"
    ).style.background = `url("../../images/monster-3.JPG") no-repeat center center/cover`;
    event.target.textContent = "click to hide the true";
    toogler = 1;
  } else {
    document.querySelector(".main-title").style.visibility = "visible";
    document.querySelector(
      ".header"
    ).style.background = `url("../../images/hero-2.JPG") no-repeat center center/cover`;
    event.target.textContent = "click to see the true";
    toogler = 0;
  }
});
