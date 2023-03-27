const landing = document.querySelector(".landingSection");

const navToggle = document.querySelector(".navbar_toggle");
const links = document.querySelector(".main_nav");
navToggle.addEventListener("click", function () {
  links.classList.toggle("show_nav");
  links.classList.toggle("hidden");
});

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
