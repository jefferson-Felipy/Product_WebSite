const btn_hamburguer = document.querySelector('.menu_hamburguer');
const body_menu = document.querySelector('.body_menu');

btn_hamburguer.addEventListener('click', () => {
    // btn_hamburguer.src = "/images/close.svg";
    body_menu.classList.toggle('btn_close');
});