document.addEventListener('DOMContentLoaded', function() {
    const images = [
    '/assets/imagenes-carrusel/2.jpg',
    '/assets/imagenes-carrusel/3.jpg',
    '/assets/imagenes-carrusel/4.JPG',
    '/assets/imagenes-carrusel/5.JPG',
    '/assets/imagenes-carrusel/6.JPG',
    '/assets/imagenes-carrusel/8.JPG',
    '/assets/imagenes-carrusel/11.JPG',
    '/assets/imagenes-carrusel/12.JPG',
    '/assets/imagenes-carrusel/13.JPG',
    '/assets/imagenes-carrusel/14.JPG',
    '/assets/imagenes-carrusel/15.JPG'

    ];

    function updateImage() {
        console.log("Cargando imagen: " + images[currentIndex]);
        carouselImage.src = images[currentIndex];
    }

    let currentIndex = 0;
    const carouselImage = document.getElementById('carousel-image');

    // Función para actualizar la imagen
    function updateImage() {
        carouselImage.src = images[currentIndex];
    }

    // Evento para avanzar
    document.getElementById('next').addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % images.length; // Avanzar y volver al principio si es necesario
        updateImage();
    });

    // Evento para retroceder
    document.getElementById('prev').addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length; // Retroceder y volver al último si es necesario
        updateImage();
    });

    // Cargar la primera imagen al inicio
    updateImage();
});