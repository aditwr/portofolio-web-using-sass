const hamburger_menu = document.querySelector('.hamburger-menu');
const nav = document.querySelector('nav');
const nav_menu = document.querySelector('.nav-menu');
const nav_cta = document.querySelector('.nav-cta');

const hamburger_span = document.getElementsByClassName('hamburger-menu_item')

let showMenu = false;
let hamburger_active = false;

hamburger_menu.addEventListener('click', function(){

    if(!hamburger_active) {
        hamburger_span[0].classList.remove('hamburger-span-1-nonactive');
        hamburger_span[1].classList.remove('hamburger-span-2-nonactive');
        hamburger_span[2].classList.remove('hamburger-span-3-nonactive');
        
        hamburger_span[0].classList.add('hamburger-span-1-active');
        hamburger_span[1].classList.add('hamburger-span-2-active');
        hamburger_span[2].classList.add('hamburger-span-3-active');

        hamburger_active = true;
    } else {
        hamburger_span[0].classList.remove('hamburger-span-1-active');
        hamburger_span[1].classList.remove('hamburger-span-2-active');
        hamburger_span[2].classList.remove('hamburger-span-3-active');

        hamburger_span[0].classList.toggle('hamburger-span-1-nonactive');
        hamburger_span[1].classList.toggle('hamburger-span-2-nonactive');
        hamburger_span[2].classList.toggle('hamburger-span-3-nonactive');

        hamburger_active = false;
    }

    if(!showMenu) {
        nav.classList.add('nav-menu_active');

        showMenu = true;
    } else {
        nav.classList.remove('nav-menu_active');

        showMenu = false;
    }
})