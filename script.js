document.addEventListener('DOMContentLoaded', function() {
    // Datos de los viajes y destinos
    const viajes = [
        {
            titulo: 'viaje 1',
            descripcion: 'El perro de san Roque no tiene rabo porque Ramón Rodríguez...',
            imgSrc: 'viajes/viajes-5.jpg'
        },
        {
            titulo: 'viaje 2',
            descripcion: 'El perro de san Roque no tiene rabo porque Ramón Rodríguez...',
            imgSrc: 'viajes/viajes-6.jpg'
        },
        {
            titulo: 'viaje 3',
            descripcion: 'El perro de san Roque no tiene rabo porque Ramón Rodríguez...',
            imgSrc: 'viajes/viajes-7.jpg'
        }
    ];

    const destinos = ['Islas Molucas, Indonesia', 'Svalbard, Noruega', 'Kamchatka, Rusia'];

    // 1. Generar la imagen de bienvenida (montañas)
    const welcomeSection = document.querySelector('.welcome');
    const featuredImage = document.createElement('img'); // Creamos la imagen
    featuredImage.src = 'banner/6.jpg'; // Ruta de la imagen de la montaña
    featuredImage.alt = 'Montaña Nevada'; // Texto alternativo
    featuredImage.classList.add('featured-image'); // Añadimos la clase CSS para estilos

    welcomeSection.appendChild(featuredImage); // Añadimos la imagen a la sección de bienvenida

    // 2. Generar las tarjetas de los viajes
    const cardsContainer = document.getElementById('cards-container');

    viajes.forEach(viaje => {
        // Crear elementos para cada tarjeta
        const card = document.createElement('div');
        card.classList.add('card');

        const img = document.createElement('img');
        img.src = viaje.imgSrc;
        img.alt = viaje.titulo;

        const title = document.createElement('h3');
        title.textContent = viaje.titulo;

        const description = document.createElement('p');
        description.textContent = viaje.descripcion;

        // Añadir los elementos a la tarjeta
        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(description);

        // Añadir la tarjeta al contenedor
        cardsContainer.appendChild(card);
    });

    // 3. Generar las opciones del selector de destinos
    const selectDestino = document.getElementById('destinos');

    destinos.forEach(destino => {
        const option = document.createElement('option');
        option.value = destino.toLowerCase();
        option.textContent = destino;
        selectDestino.appendChild(option);
    });

    // Evento al cambiar el destino
    selectDestino.addEventListener('change', function() {
        const selectedOption = selectDestino.options[selectDestino.selectedIndex].text;
        alert('Has seleccionado: ' + selectedOption);
    });
});
