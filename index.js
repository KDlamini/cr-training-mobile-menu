const hamburger = document.querySelector('.menu-bars');
const nav = document.querySelector('#desktop-nav');
const menulist = document.querySelector('#desktop-nav ul');
const menuitems = Array.from(document.querySelectorAll('#desktop-nav ul li'));
const icon = document.querySelector('.menu-bars .fas');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('nav-open');
  menulist.classList.toggle('nav-open');

  if (nav.classList.contains('nav-open')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-times');
  } else {
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  }
});