// Navbar

const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navbar');

burger.addEventListener('click', (e) => {
  burger.classList.toggle('is-active');
  navbar.classList.toggle('is-active');
});
