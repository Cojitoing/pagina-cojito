document.addEventListener('DOMContentLoaded', function () {
    const flowerRain = document.getElementById('flower-rain');

    // Crear la lluvia de flores
    function createFlower() {
        const flower = document.createElement('div');
        flower.classList.add('flower');
        
        // Seleccionar aleatoriamente una flor (puedes añadir más URLs de flores)
        const flowerImage = 'https://m.media-amazon.com/images/I/71tQTnJzU2L._AC_UF894,1000_QL80_.jpg'; 
        flower.style.backgroundImage = `url(${flowerImage})`;

        // Posición inicial aleatoria
        flower.style.left = Math.random() * 100 + 'vw'; // Posición horizontal
        flower.style.top = '-100px'; // Empieza fuera de la vista

        // Añadir el elemento al DOM
        flowerRain.appendChild(flower);

        // Animar la caída
        const fallDuration = Math.random() * 5 + 5; // Duración aleatoria entre 5 y 10 segundos
        flower.style.animation = `fall ${fallDuration}s linear`;

        // Remover el elemento después de que haya caído
        setTimeout(() => {
            flower.remove();
        }, fallDuration * 1000);
    }

    // Crear flores de manera continua
    setInterval(createFlower, 300);

    // Animación de caída
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes fall {
            0% {
                transform: translateY(0);
                opacity: 1;
            }
            100% {
                transform: translateY(100vh);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});
 