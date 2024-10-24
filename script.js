document.addEventListener('DOMContentLoaded', function() {
    const images = [
        './assets/imagenes-carrusel/2.jpg',
        './assets/imagenes-carrusel/1.jpg',
        './assets/imagenes-carrusel/3.jpg',
        './assets/imagenes-carrusel/6.jpg',
        './assets/imagenes-carrusel/8.jpg',
        './assets/imagenes-carrusel/11.jpg',
        './assets/imagenes-carrusel/12.jpg',
        './assets/imagenes-carrusel/105.jpg'
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





/*FORMULARIO INICIO*/
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    let isValid = true;

    // Limpiar msjes
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("phoneError").textContent = "";
    document.getElementById("messageError").textContent = "";
    document.getElementById("successMessage").textContent = "";

    // Validar nombres minimo 3 caract
    if (name.length < 3) {
        document.getElementById("nameError").textContent = "El nombre debe tener al menos 3 caracteres.";
        isValid = false;
    }

    // expresion regular validar
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "El correo electrónico no es válido.";
        isValid = false;
    }

    // validar nro telefono
    const phonePattern = /^[0-9]{10}$/; // 10 digitos
    if (!phonePattern.test(phone)) {
        document.getElementById("phoneError").textContent = "El teléfono debe contener solo números (10 dígitos).";
        isValid = false;
    }

    // Validar mensajes
    if (message.length === 0) {
        document.getElementById("messageError").textContent = "El mensaje no puede estar vacío.";
        isValid = false;
    } else if (message.length > 300) {
        document.getElementById("messageError").textContent = "El mensaje no debe superar los 300 caracteres.";
        isValid = false;
    }

    // mostrar datos si son validos
    if (isValid) {
        const successMessage = document.getElementById("successMessage");
        successMessage.textContent = "Datos enviados correctamente:";

        // Crear elementos para mostrar los datos
        const nameElement = document.createElement("p");
        nameElement.textContent = "Nombre: " + name;

        const emailElement = document.createElement("p");
        emailElement.textContent = "Email: " + email;

        const phoneElement = document.createElement("p");
        phoneElement.textContent = "Teléfono: " + phone;

        const messageElement = document.createElement("p");
        messageElement.textContent = "Mensaje: " + message;

        // agregar elementos al dom
        successMessage.appendChild(nameElement);
        successMessage.appendChild(emailElement);
        successMessage.appendChild(phoneElement);
        successMessage.appendChild(messageElement);

        // Limpiar el formulario
        document.getElementById("contactForm").reset();
    }
});
/*FORMULARIO FINAL*/ 