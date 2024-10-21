document.addEventListener('DOMContentLoaded', function() {
    const images = [
        './assets/imagenes-carrusel/2.jpg',
        './assets/imagenes-carrusel/3.jpg',
        './assets/imagenes-carrusel/6.jpg',
        './assets/imagenes-carrusel/8.jpg',
        './assets/imagenes-carrusel/11.jpg',
        './assets/imagenes-carrusel/12.jpg',
        './assets/Mini-voley/7.JPG',
        './assets/Mini-voley/27.JPG',
        './assets/Mini-voley/105.JPG'
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
        const nextIndex = (currentIndex + 1) % images.length; // Avanzar al siguiente índice
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


/*FORMULARIO INICIO*/
// Función de validación
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario
    let hasError = false;

    // Limpieza de mensajes anteriores
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('phoneError').textContent = '';
    document.getElementById('messageError').textContent = '';

    // Validación del nombre
    const name = document.getElementById('name').value.trim();
    if (name === '') {
        document.getElementById('nameError').textContent = 'El nombre es obligatorio.';
        hasError = true;
    }

    // Validación del email usando expresión regular
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Introduce un correo electrónico válido.';
        hasError = true;
    }

    // Validación del teléfono usando expresión regular
    const phone = document.getElementById('phone').value.trim();
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
        document.getElementById('phoneError').textContent = 'El número de teléfono debe tener 10 dígitos.';
        hasError = true;
    }

    // Validación del mensaje
    const message = document.getElementById('message').value.trim();
    if (message === '') {
        document.getElementById('messageError').textContent = 'El mensaje es obligatorio.';
        hasError = true;
    }

    // Si no hay errores, mostrar los datos enviados
    if (!hasError) {
        // Crear elementos HTML para mostrar los datos enviados
        const successMessage = document.getElementById('successMessage');
        successMessage.textContent = ''; // Limpiar mensajes anteriores

        const nameElement = document.createElement('p');
        nameElement.textContent = `Nombre: ${name}`;
        successMessage.appendChild(nameElement);

        const emailElement = document.createElement('p');
        emailElement.textContent = `Email: ${email}`;
        successMessage.appendChild(emailElement);

        const phoneElement = document.createElement('p');
        phoneElement.textContent = `Teléfono: ${phone}`;
        successMessage.appendChild(phoneElement);

        const messageElement = document.createElement('p');
        messageElement.textContent = `Mensaje: ${message}`;
        successMessage.appendChild(messageElement);
    }
});
/*FORMULARIO FINAL*/ 