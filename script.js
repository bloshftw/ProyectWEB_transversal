document.addEventListener('DOMContentLoaded', function() {
    const images = [
        './assets/imagenes-carrusel/2.jpg',
        './assets/imagenes-carrusel/3.jpg',
        './assets/imagenes-carrusel/4.JPG',
        './assets/imagenes-carrusel/6.jpg',
        './assets/imagenes-carrusel/8.jpg',
        './assets/imagenes-carrusel/11.jpg',
        './assets/imagenes-carrusel/12.jpg',
        './assets/Mini-voley/7.JPG',
        './assets/Mini-voley/27.JPG',
        './assets/Mini-voley/105.JPG',
        './assets/imagenes-carrusel/15.jpg'
    ];

    let currentIndex = 0;
    const carouselImage = document.getElementById('carousel-image');

    // Función para actualizar la imagen con efecto de desvanecimiento
    function updateImage(newIndex) {
        // Remover la clase activa para iniciar el fade out
        carouselImage.classList.remove('active');

        // Esperar que la imagen se desvanezca antes de cambiar el src
        setTimeout(() => {
            currentIndex = newIndex;
            carouselImage.src = images[currentIndex]; // Cambiar la imagen
            carouselImage.classList.add('active'); // Añadir la clase activa para el fade in
        }, 800); // El mismo tiempo que la transición en CSS
    }

    // Evento para avanzar a la siguiente imagen
    document.getElementById('next').addEventListener('click', function() {
        const nextIndex = (currentIndex + 1) % images.length; // Avanzar al siguiente índice
        updateImage(nextIndex);
    });

    // Evento para retroceder a la imagen anterior
    document.getElementById('prev').addEventListener('click', function() {
        const prevIndex = (currentIndex - 1 + images.length) % images.length; // Retroceder al índice anterior
        updateImage(prevIndex);
    });

    // Cargar la primera imagen con un pequeño retraso para que tenga efecto de fade in
    setTimeout(() => {
        carouselImage.src = images[currentIndex];
        carouselImage.classList.add('active');
    }, 100); // Retraso pequeño para que la primera imagen se muestre correctamente
});


/*SLIDER NAV*/ 

document.addEventListener('DOMContentLoaded', function() {
    const categoriasBtn = document.getElementById('categorias-btn');
    const submenu = document.querySelector('.submenu');

    categoriasBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Evitar que el enlace recargue la página
        submenu.classList.toggle('active'); // Mostrar/ocultar el submenú
    });
});

