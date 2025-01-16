const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});

ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".header__content form", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".header__content .bar", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".header__image__card", {
  duration: 1000,
  interval: 500,
  delay: 2500,
});

ScrollReveal().reveal(".container", {
  ...scrollRevealOption,
  delay: 200,
});

ScrollReveal().reveal(".therapy__importance h2", {
  ...scrollRevealOption,
  delay: 400,
});

ScrollReveal().reveal(".therapy__importance p", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".benefit__card", {
  ...scrollRevealOption,
  interval: 1600,
  delay: 600,
});

ScrollReveal().reveal(".about", {
  ...scrollRevealOption,
  delay: 400,
});

ScrollReveal().reveal(".about__image", {
  ...scrollRevealOption,
  delay: 600,
});

ScrollReveal().reveal(".about__title", {
  ...scrollRevealOption,
  interval: 1600,
  delay: 600,
});

ScrollReveal().reveal(".about__subtitle", {
  ...scrollRevealOption,
  interval: 1600,
  delay: 600,
});

ScrollReveal().reveal(".about__description", {
  ...scrollRevealOption,
  interval: 1600,
  delay: 600,
});

ScrollReveal().reveal(".about__button", {
  ...scrollRevealOption,
  interval: 1600,
  delay: 1000,
});
