document.addEventListener('DOMContentLoaded', function() {
    const images = [
        '/assets/Imagenes-categorias/1ra_A-Masculina.jpg',
        '/assets/Imagenes-categorias/A2-A-Masculino.jpg',
        '/assets/Imagenes-categorias/A2-B-Masculino.jpg'
    ];

    let currentIndex = 0;
    const carouselImage = document.getElementById('carousel-image');
    const carouselTitle = document.querySelector('.carousel-title'); // Selecciona el título

    // Función para actualizar la imagen y el título con efecto de desvanecimiento
    function updateImage(newIndex) {
        // Remover la clase activa para iniciar el fade out
        carouselImage.classList.remove('active');
        carouselTitle.style.opacity = 0; // Hacer que el título se desvanezca

        // Esperar que la imagen se desvanezca antes de cambiar el src
        setTimeout(() => {
            currentIndex = newIndex;
            carouselImage.src = images[currentIndex]; // Cambiar la imagen
            
            // Hacer que el título aparezca después de cambiar la imagen
            carouselTitle.style.opacity = 1; // Hacer que el título aparezca
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
        carouselTitle.style.opacity = 1; // Hacer que el título aparezca desde el inicio
    }, 100); // Retraso pequeño para que la primera imagen se muestre correctamente
});
