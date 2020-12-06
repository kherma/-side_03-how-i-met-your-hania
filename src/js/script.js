const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");
const links = document.querySelectorAll(".nav-items li");

links.forEach((link) => {
  link.addEventListener("click", function (event) {
    console.log("click");
  });
});

hamburger.addEventListener("click", function (event) {
  navbar.classList.toggle("close");
});
