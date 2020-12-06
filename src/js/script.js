const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");
const heroBtn = document.querySelector(".reveal");
const anim = document.querySelector(".anim");
let toogler = 0;
let animCount = 1;

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
    ).style.background = `url("../../images/monster-3.jpeg") no-repeat center center/cover`;
    event.target.textContent = "click to hide the true";
    toogler = 1;
  } else {
    document.querySelector(".main-title").style.visibility = "visible";
    document.querySelector(
      ".header"
    ).style.background = `url("../../images/hero-2.jpeg") no-repeat center center/cover`;
    event.target.textContent = "click to see the true";
    toogler = 0;
  }
});
console.log(anim.style.background);

setInterval(() => {
  if (animCount === 7) {
    animCount = 1;
  }
  anim.style.background = `url("../../images/anim_one/anim-${animCount}.jpg") no-repeat center
  center/cover`;
  animCount++;
}, 2000);
