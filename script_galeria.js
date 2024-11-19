/*SLIDER NAV*/ 

document.addEventListener('DOMContentLoaded', function() {
    const categoriasBtn = document.getElementById('categorias-btn');
    const submenu = document.querySelector('.submenu');

    categoriasBtn.addEventListener('click', function(event) {
        event.preventDefault(); //
        submenu.classList.toggle('active'); 
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const galeriaCategoriasBtn = document.getElementById('galeria-categorias');
    const submenu = document.querySelector('.submenu2');

    galeriaCategoriasBtn.addEventListener('click', function(event) {
        event.preventDefault(); 
        submenu.classList.toggle('active'); 
    });
});


/* hamburguesa */
const menuHamburguesa = document.querySelector('.menu-hamburguesa');
const navMenu = document.getElementById('nav-menu');

menuHamburguesa.addEventListener('click', () => {
    navMenu.classList.toggle('show'); // Alterna la clase "show"
});