const buttonOpenMenu = document.querySelector('.open-menu');
const buttonCloseMenu = document.querySelector('.close-menu');
const menu = document.querySelector('.menu');

function toggleMenu(){
    menu.classList.toggle('menu_opened');
}

buttonOpenMenu.addEventListener('click', toggleMenu);
buttonCloseMenu.addEventListener('click', toggleMenu);