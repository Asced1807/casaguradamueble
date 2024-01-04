document.addEventListener('DOMContentLoaded', function() {
    const chatBubble = document.querySelector('.chat-bubble');

    // Función para mostrar la burbuja
    function showBubble() {
        chatBubble.classList.add('active');
        setTimeout(hideBubble, 3000); // Oculta la burbuja después de 3 segundos (ajusta según tus necesidades)
    }

    // Función para ocultar la burbuja
    function hideBubble() {
        chatBubble.classList.remove('active');
        setTimeout(showBubble, 3000); // Muestra la burbuja nuevamente después de 3 segundos (ajusta según tus necesidades)
    }

    // Inicia el ciclo de mostrar y ocultar la burbuja
    showBubble();
});
