const burger = document.querySelector(".burger");
const nav = document.querySelector(".header-nav-sp");
const navLinks = document.querySelectorAll(".header-nav-sp li");

burger.addEventListener("click", () => {

  nav.classList.toggle("nav-active");

  navLinks.forEach((link, index) => {

    if (link.style.animation) {
      link.style.animation = "";
    } else {

      link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 + 0.4
        }s`;
    }
  });

  burger.classList.toggle("toggle");
});

navLinks.forEach((link, index) => {
  link.addEventListener("click", () => {
    nav.classList.remove("nav-active")
    burger.classList.remove("toggle")
  })
});