// Carrusel.js
let currentIndex = 0;
const slides = document.querySelector('.carousel-slide');
const totalSlides = document.querySelectorAll('.carousel-image').length;
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Función para mover el carrusel
function moveCarousel() {
  // Cambiar la posición del carrusel según el índice
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Función para mover al siguiente slide
function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  moveCarousel();
}

// Función para mover al slide anterior
function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  moveCarousel();
}

// Botones de navegación
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Rotación automática cada 5 segundos
setInterval(nextSlide, 5000);

// Mover el carrusel inicialmente
moveCarousel();
