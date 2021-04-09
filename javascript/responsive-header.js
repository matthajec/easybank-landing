const navBtn = document.querySelector('.header__nav-hamburger');
const header = document.querySelector('.header');

navBtn.addEventListener('click', () => {
  header.classList.toggle('open');
});