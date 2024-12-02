document.addEventListener('DOMContentLoaded', function() {
    const images = [
        './assets/imagenes-carrusel/1.jpg',
        './assets/imagenes-carrusel/2.jpg',
        './assets/imagenes-carrusel/3.jpg',
        './assets/imagenes-carrusel/4.jpg',
        './assets/imagenes-carrusel/5.jpg'
    ];

    let currentIndex = 0;
    const carouselImage = document.getElementById('carousel-image');

    // Función para actualizar imagen
    function updateImage(newIndex) {
        carouselImage.classList.remove('active');

        setTimeout(() => {
            currentIndex = newIndex;
            carouselImage.src = images[currentIndex]; 
            carouselImage.classList.add('active'); 
        }, 800); // El mismo tiempo que la transición en CSS
    }

  
    document.getElementById('next').addEventListener('click', function() {
        const nextIndex = (currentIndex + 1) % images.length; 
        updateImage(nextIndex);
    });


    document.getElementById('prev').addEventListener('click', function() {
        const prevIndex = (currentIndex - 1 + images.length) % images.length; 
        updateImage(prevIndex);
    });


    setTimeout(() => {
        carouselImage.src = images[currentIndex];
        carouselImage.classList.add('active');
    }, 100); 


setInterval(function() {
    const nextIndex = (currentIndex + 1) % images.length;
    updateImage(nextIndex);
}, 9000);   
});

/*SLIDER NAV*/ 

document.addEventListener('DOMContentLoaded', function() {
    const categoriasBtn = document.getElementById('categorias-btn');
    const submenu = document.querySelector('.submenu');

    categoriasBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Evitar que el enlace recargue la pagina
        submenu.classList.toggle('active'); // Mostrar/ocultar el submenu
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const galeriaCategoriasBtn = document.getElementById('galeria-categorias');
    const submenu = document.querySelector('.submenu2');

    galeriaCategoriasBtn.addEventListener('click', function(event) {
        event.preventDefault(); //
        submenu.classList.toggle('active'); 
    });
});

/* hamburguesa */
const menuHamburguesa = document.querySelector('.menu-hamburguesa');
const navMenu = document.getElementById('nav-menu');

menuHamburguesa.addEventListener('click', () => {
    navMenu.classList.toggle('show'); // Alterna la clase "show"
});

