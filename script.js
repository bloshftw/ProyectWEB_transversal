document.addEventListener('DOMContentLoaded', function() {
    const images = [
    'assets/imagenes-carrousel/1',
    'assets/imagenes-carrousel/2'
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