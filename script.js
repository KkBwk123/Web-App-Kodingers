const toggle = document.querySelector(".toggle input");
const navbar = document.querySelector("nav ul");

toggle.addEventListener("click", function () {
  navbar.classList.toggle("slide");
});
