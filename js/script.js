// Navbar

const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navbar');
const body = document.body;

burger.addEventListener('click', (e) => {
  burger.classList.toggle('is-active');
  navbar.classList.toggle('is-active');
  body.classList.toggle('is-fixed');

  navbar.addEventListener('click', (e) => {
    if (e.target !== e.currentTarget) {
      burger.classList.remove('is-active');
      navbar.classList.remove('is-active');
      body.classList.remove('is-fixed');
    }
  });
});
